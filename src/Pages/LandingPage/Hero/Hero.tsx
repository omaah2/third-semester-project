import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router
import hero from "../.././../assestss/images/hero-card.jpg";
import right from "../.././../assestss/images/arrow-right.png";
import "animate.css";
import "./Hero.css";

const Hero: React.FC = () => {
  // Define variants for the animation
  const textVariants = {
    animate: {
      scale: [0.9, 1.1, 0.9],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div className="Banner">
      <div className="Cont">
        <div className="Bannertxt">
          <h1 className="txt">
            Discover Your Perfect Care <br />
            <motion.span
              initial={{ scale: 0 }}
              variants={textVariants} // Use variants for continuous animation
              animate="animate" // Start the animation
            >
              {Array.from("Find the Nearest").map((letter, index) => (
                <motion.span
                  key={index}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>{" "}
            Hospital <br />
            24/7, Everywhere!
          </h1>
          <p>
            Your health is precious. <br />
            Find the best care tailored to your needs.
          </p>
          <button className="Btn">
            <a href="/auth">Get Started</a>
          </button>
          {/* Link to Auth page */}
          <Link to="/about" className="Link">
            Learn more <img src={right} alt="" className="ArrowRight" />
          </Link>{" "}
          {/* Link to About page */}
        </div>
        <div className="animate__animated  animate__backInRight">
          <img src={hero} alt="" className="HeroImage" />
        </div>
      </div>
      <div className="Find">
        <h3 className="Findtxt">Find a nearby hospital</h3>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for a hospital"
        />
      </div>
    </div>
  );
};

export default Hero;
