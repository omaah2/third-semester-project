import React from "react";
import { motion } from "framer-motion";
import One from "../../../assestss/images/one.jpg";
import Two from "../../../assestss/images/two.jpg";
import doctor from "../../../assestss/images/Doctor.png";
import hospital from "../../../assestss/images/hospital.png";
import exportIcon from "../../../assestss/images/export.png";
import share from "../.././../assestss/images/share.png";
import how from "../../../assestss/images/How.png";
import logo from "../../../assestss/images/logo2.png";
import "./service.css";

interface Feature {
  id: number;
  img: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    img: doctor,
    title: "Find Specialists",
    description: "Discover Top-rated Specialists in Your Area",
  },
  {
    id: 2,
    img: hospital,
    title: "Explore Medical Centers",
    description: "Explore Leading Medical Centers Near You",
  },
  {
    id: 3,
    img: exportIcon,
    title: "Save Medical Facilities",
    description: "Save Your Favorite Medical Facilities for Later",
  },
  {
    id: 4,
    img: share,
    title: "Connect with Friends",
    description: "Share Your Medical Facility Recommendations with Friends",
  },
];

function Service() {
  return (
    <div className="service">
      <div className="serviceContainer">
        <div className="serviceWrap">
          <motion.img
            src={One}
            alt=""
            style={{
              objectFit: "cover",
              width: "20vw",
              height: "65vh",
              borderRadius: "20px",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img
            src={Two}
            alt=""
            style={{
              objectFit: "cover",
              width: "20vw",
              height: "65vh",
              borderRadius: "20px",
              alignSelf: "flex-end",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <div className="servicetxt">
          <h1>
            Welcome to <br />{" "}
            <span>
              <img src={logo} alt="" />
            </span>
          </h1>
          <p>
            Carefinder is a platform where users can search for hospitals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <button>Our Services</button>
        </div>
      </div>
      <div className="Motion">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="Content"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="Content2">
              <motion.img
                src={feature.img}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <h1 className="mb-[4vh] ">{feature.title}</h1>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="Image">
        <motion.img
          src={how}
          alt=""
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

export default Service;
