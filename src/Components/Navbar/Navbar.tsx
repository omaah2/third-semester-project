import React from "react";
import logo from "../../assestss/images/logo.png";
import "./Navbar.css";

const Navbar: React.FC<{ openSignUpForm: () => void }> = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
