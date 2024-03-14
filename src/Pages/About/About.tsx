import React from "react";
import "./About.css";
import Image from "../../assestss/images/about.png";
import "animate.css";

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className={`about-us ${className || ""}`}>
      <div className="Sub-cont">
        <div className="image animate__animated animate__rubberBand">
          <img src={Image} alt="" />
        </div>
        <div className="content-text animate__animated animate__bounceInRight">
          <h2>About CareFinder</h2>
          <p>
            CareFinder is your comprehensive solution for accessing vital
            information about hospitals and healthcare services in your
            vicinity. Our platform is designed to empower individuals in making
            informed decisions about their healthcare needs, ensuring
            convenience and peace of mind.
          </p>

          <h3>Our Mission</h3>
          <p>
            At CareFinder, our mission is to revolutionize the way people engage
            with healthcare services. We strive to provide a user-friendly
            platform that simplifies the process of finding, sharing, and
            accessing information about hospitals and healthcare providers.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Search Hospitals:</strong> Utilize our advanced search
              functionality to locate hospitals based on your specific criteria,
              including location, services offered, ratings, and more.
            </li>
            <li>
              <strong>Share Information:</strong> Share detailed hospital
              profiles with your friends, family, or healthcare professionals to
              facilitate informed discussions and decisions.
            </li>
            <li>
              <strong>Book Appointments:</strong> Seamlessly schedule
              appointments with healthcare providers directly through our
              platform, saving you time and effort.
            </li>
            <li>
              <strong>Export Information:</strong> Download hospital information
              for offline access or to keep a record of your healthcare
              preferences.
            </li>
          </ul>

          <h3>Our Commitment to Excellence</h3>
          <p>
            We are committed to providing accurate, reliable, and up-to-date
            information to our users. CareFinder employs rigorous quality
            control measures to ensure that the information presented on our
            platform is trustworthy and relevant.
          </p>

          <h3>Get in Touch</h3>
          <p>
            Your feedback is invaluable to us! If you have any questions,
            suggestions, or concerns, please don't hesitate to reach out to our
            dedicated support team at {""}
            <a href="mailto:support@carefinder.com">support@carefinder.com</a>.
            We are here to assist you every step of the way.
          </p>

          <p>
            Thank you for choosing CareFinder as your trusted partner in
            navigating the world of healthcare. We look forward to serving you
            and helping you achieve your health and wellness goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
