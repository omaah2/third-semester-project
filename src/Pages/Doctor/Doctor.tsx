import React, { useState } from "react";
import "./Doctor.css";

import doctor1 from "../../assests/images/doctor1.jpg";
import doctor2 from "../../assestss/images/doctor2.jpg";
import doctor3 from "../../assestss/images/doctor3.jpg";
import doctor4 from "../../assestss/images/doctor4.jpg";

interface Doctor {
  id: number;
  name: string;
  field: string;
  specialization: string;
  experience: number;
}

const initialDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    field: "Cardiologist",
    specialization: "Cardiology",
    experience: 10,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    field: "Neurologist",
    specialization: "Neurology",
    experience: 8,
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    field: "Orthopedic Surgeon",
    specialization: "Orthopedics",
    experience: 12,
  },
  {
    id: 4,
    name: "Dr. Emily Brown",
    field: "Pediatrician",
    specialization: "Pediatrics",
    experience: 7,
  },
];

const DoctorList: React.FC = () => {
  const [doctorsList, setDoctorsList] = useState<Doctor[]>(initialDoctors);
  const [newDoctor, setNewDoctor] = useState<Doctor>({
    id: 0,
    name: "",
    field: "",
    specialization: "",
    experience: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const addDoctor = () => {
    if (
      newDoctor.name.trim() !== "" &&
      newDoctor.field.trim() !== "" &&
      newDoctor.specialization.trim() !== "" &&
      newDoctor.experience > 0
    ) {
      const updatedDoctors = [
        ...doctorsList,
        { ...newDoctor, id: doctorsList.length + 1 },
      ];
      setDoctorsList(updatedDoctors);
      setNewDoctor({
        id: 0,
        name: "",
        field: "",
        specialization: "",
        experience: 0,
      });
    }
  };

  return (
    <div>
      <div className="doc-list">
        <h1>Doctor List</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter doctor name"
          value={newDoctor.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="field"
          placeholder="Enter doctor field"
          value={newDoctor.field}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="specialization"
          placeholder="Enter doctor specialization"
          value={newDoctor.specialization}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="experience"
          placeholder="Enter doctor experience"
          value={newDoctor.experience}
          onChange={handleInputChange}
        />
        <button onClick={addDoctor}>Add Doctor</button>
        <ul>
          {doctorsList.map((doctor) => (
            <li key={doctor.id}>
              <strong>Name:</strong> {doctor.name}, <strong>Field:</strong>{" "}
              {doctor.field}, <strong>Specialization:</strong>{" "}
              {doctor.specialization}, <strong>Experience:</strong>{" "}
              {doctor.experience} years
            </li>
          ))}
        </ul>
      </div>
      <div className="doctors-section">
        <h2>Meet Our Best Doctors</h2>
        <div className="doctors-list">
          {initialDoctors.map((doctor, index) => (
            <div className="doctor" key={doctor.id}>
              <img
                src={
                  index === 0
                    ? doctor1
                    : index === 1
                    ? doctor2
                    : index === 2
                    ? doctor3
                    : doctor4
                }
                alt={doctor.name}
              />
              <h3>{doctor.name}</h3>
              <p>{doctor.field}</p>
              <p>Specialization: {doctor.specialization}</p>
              <p>Experience: {doctor.experience} years</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
