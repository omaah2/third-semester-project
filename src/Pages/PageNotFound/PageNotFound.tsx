import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"
const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist. 🙈</p>
      <p>Let's get you back on track:</p>
      <Link to="/" className="btn">
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
