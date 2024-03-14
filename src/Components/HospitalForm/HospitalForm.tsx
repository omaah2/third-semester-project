import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./HospitalForm.css";
import ReactMarkdown from "react-markdown";
import { draftToMarkdown } from "markdown-draft-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Hospital {
  id: string;
  name: string;
  address: string;
  contact: string;
  markdownContent: EditorState;
}

const HospitalForm: React.FC = () => {
  const [hospitalInfo, setHospitalInfo] = useState<Hospital>({
    id: "",
    name: "",
    address: "",
    contact: "",
    markdownContent: EditorState.createEmpty(),
  });
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [shareOption, setShareOption] = useState<string | null>(null);

 useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(async (user) => {
     if (user) {
       try {
         const q = query(
           collection(db, "hospitals"),
           where("userId", "==", user.uid)
         );
         const snapshot = await getDocs(q);
         const hospitalsData: Hospital[] = snapshot.docs.map((doc) => ({
           id: doc.id,
           name: doc.data().name,
           address: doc.data().address,
           contact: doc.data().contact,
           markdownContent: EditorState.createWithContent(
             convertFromRaw(doc.data().markdownContent)
           ),
         }));
         setHospitals(hospitalsData);
       } catch (error) {
         console.error("Error fetching hospitals: ", error);
         toast.error("Error fetching hospitals");
       }
     } else {
       // User is signed out, clear hospitals data
       setHospitals([]);
     }
   });

   return unsubscribe;
 }, []);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setHospitalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const user = auth.currentUser;
      console.log("Current user:", user); // Check if user is logged in
      if (user) {
        const docRef = await addDoc(collection(db, "hospitals"), {
          name: hospitalInfo.name,
          address: hospitalInfo.address,
          contact: hospitalInfo.contact,
          markdownContent: convertToRaw(
            hospitalInfo.markdownContent.getCurrentContent()
          ),
          userId: user.uid,
        });
        console.log("Document reference:", docRef); // Check if document reference is obtained

        // Fetch updated list of hospitals and set the state
        const updatedHospitals: Hospital[] = [];
        const q = query(
          collection(db, "hospitals"),
          where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
          updatedHospitals.push({
            id: doc.id,
            name: doc.data().name,
            address: doc.data().address,
            contact: doc.data().contact,
            markdownContent: EditorState.createWithContent(
              convertFromRaw(doc.data().markdownContent)
            ),
          });
        });
        setHospitals(updatedHospitals);

        // Reset hospitalInfo state
        setHospitalInfo({
          id: "",
          name: "",
          address: "",
          contact: "",
          markdownContent: EditorState.createEmpty(),
        });
      }
    } catch (error) {
      console.error("Error adding hospital: ", error);
      toast.error("Error adding hospital");
    }
  };



  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "hospitals", id));
      setHospitals((prevHospitals) =>
        prevHospitals.filter((hospital) => hospital.id !== id)
      );
      toast.success("Hospital deleted successfully!");
    } catch (error) {
      console.error("Error deleting hospital: ", error);
      toast.error("Error deleting hospital");
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle image upload here
    }
  };

  const convertToMarkdown = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    if (!contentState) {
      return ""; // Return empty string if contentState is null or undefined
    }
    const rawContentState = convertToRaw(contentState);
    const markdownText = draftToMarkdown(rawContentState);
    return markdownText;
  };

  const exportToCSV = () => {
    const csvData = hospitals.map((hospital) =>
      [hospital.name, hospital.address, hospital.contact].join(",")
    );
    const csvContent = "data:text/csv;charset=utf-8," + csvData.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hospitals.csv");
    document.body.appendChild(link);
    link.click();
  };

  const shareViaEmail = () => {
    toast.success("Sharing via email...");
  };

  const generateLink = () => {
    toast.success("Generating shareable link...");
  };

  return (
    <div className="hospital-form-container">
      <h2>Add Hospital</h2>
      <form onSubmit={handleSubmit} className="hospital-form">
        <label>
          Hospital Name:
          <input
            type="text"
            name="name"
            value={hospitalInfo.name}
            onChange={handleChange}
            required
            className="hospital-input"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={hospitalInfo.address}
            onChange={handleChange}
            required
            className="hospital-input"
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={hospitalInfo.contact}
            onChange={handleChange}
            required
            className="hospital-input"
          />
        </label>
        <label>
          Markdown Content:
          <Editor
            editorState={hospitalInfo.markdownContent}
            onEditorStateChange={(editorState) =>
              setHospitalInfo((prevState) => ({
                ...prevState,
                markdownContent: editorState,
              }))
            }
            wrapperClassName="hospital-editor-wrapper"
            editorClassName="hospital-editor"
            toolbar={{
              options: ["inline", "blockType", "list", "link", "image"],
            }}
          />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        <button type="submit" className="add-hospital-button">
          Add Hospital
        </button>
      </form>
      <h2>Hospitals</h2>
      <table className="hospital-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Markdown Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital) => (
            <tr key={hospital.id}>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>{hospital.contact}</td>
              <td>
                <ReactMarkdown>
                  {convertToMarkdown(hospital.markdownContent)}
                </ReactMarkdown>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(hospital.id)}
                  className="d-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="export-share-buttons">
        <button onClick={exportToCSV}>Export to CSV</button>
        <button onClick={() => setShareOption("email")}>Share Hospitals</button>
      </div>

      {shareOption === "email" && (
        <button onClick={shareViaEmail}>Share via Email</button>
      )}
      {shareOption === "link" && (
        <button onClick={generateLink}>Generate Link</button>
      )}
    </div>
  );
};

export default HospitalForm;
