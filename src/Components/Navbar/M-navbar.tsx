import React, { useState } from "react";
import logo from "../../assests/images/logo.png";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "./Navbar.css";
import { auth } from "../../firebase";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Successfully logged out");
      // Redirect the user to the authentication page
      navigate("/auth"); // Change "/auth" to the actual route of your authentication page
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Specify the type of error as 'any'
      console.error("Error logging out:", error.message);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <img src={logo} alt="" />
      </div>
      <div className={`n-middle ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hospitalsearch">Hospitals</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/appointment">Book Appointment</Link>
          </li>
        </ul>
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div className="n-right">
        <button className="n-button" onClick={handleLogout}>
          Logout
        </button>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
          <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
          <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
