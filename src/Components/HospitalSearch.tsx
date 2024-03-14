import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import HospitalForm from "./HospitalForm/HospitalForm";
import data from "../utils/data.json";
import Footer from "../Components/Footer/Footer";
import "./HospitalSearch.css";

interface Hospital {
  name: string;
  address: string;
  coordinates: number[];
  country: string;
  phone: string;
  email: string;
  opening_hours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
}

function HospitalSearch(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null
  );
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setSearchTerm(value);

    const filteredData: Hospital[] = data.data.filter((hospital: Hospital) => {
      return (
        hospital.name.toLowerCase().includes(value.toLowerCase()) ||
        hospital.email.toLowerCase().includes(value.toLowerCase())
      );
    });

    setSearchResults(filteredData);
  };

  const handleHospitalClick = (hospital: Hospital): void => {
    setSelectedHospital(hospital);
    setSearchResults([]); // Clear the search results
    setSearchTerm(hospital.name); // Update input field with selected hospital name
  };

  const handleSearchButtonClick = (): void => {
    if (searchResults.length > 0) {
      setSelectedHospital(searchResults[0]);
    }
  };

  const handleHomeButtonClick = (): void => {
    // Navigate to the landing page
    navigate("/");
  };

  return (
    <div className="Ctn">
      <div className="top-right-button">
        <button className="home-button" onClick={handleHomeButtonClick}>
          Back to Home
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="Search hospital by name or location..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul className="search-results">
          {searchResults.map((hospital, index) => (
            <li key={index} onClick={() => handleHospitalClick(hospital)}>
              Name: {hospital.name}
            </li>
          ))}
        </ul>
        <button className="E-btn" onClick={handleSearchButtonClick}>
          Enter
        </button>
      </div>
      {selectedHospital && (
        <div className="hospital-details">
          <h2>Hospital Details</h2>
          <p>
            <strong>Name:</strong> {selectedHospital.name}
          </p>
          <p>
            <strong>Address:</strong> {selectedHospital.address}
          </p>
          <p>
            <strong>Country:</strong> {selectedHospital.country}
          </p>
          <p>
            <strong>Phone:</strong> {selectedHospital.phone}
          </p>
          <p>
            <strong>Email:</strong> {selectedHospital.email}
          </p>
          <p>
            <strong>Opening Hours:</strong>
          </p>
          <ul>
            {Object.entries(selectedHospital.opening_hours).map(
              ([day, hours]) => (
                <li key={day}>
                  <strong>{day}:</strong> {hours}
                </li>
              )
            )}
          </ul>
        </div>
      )}
      <HospitalForm />
      <Footer />
    </div>
  );
}

export default HospitalSearch;
