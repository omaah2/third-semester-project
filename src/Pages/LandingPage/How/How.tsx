import React, { Key } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { COOPERATIVE, FAQs, PARTNERS } from "../../../utils/constant";
import Section from "../../../utils/section";
import { RxCross1 } from "react-icons/rx";
import "./How.css"; // Import the CSS file

interface Partner {
  image: string;
  alt: string;
}

interface CustomStyle {
  "--yellow": string;
  "--background": string;
  "--button": string;
  "--text": string;
  "--span": string;
  "--card": string;
  "--boxShadow": string;
  "--purpleCard": string;
  "--smboxShadow": string;
}

const How: React.FC = () => {
  const customStyle: CustomStyle = {
    "--yellow": "#f5c32c",
    "--background": "#f5dabb",
    "--button": "#c66d2e",
    "--text": "#c66d2e",
    "--span": "#ed8c47",
    "--card": "#c66d2e",
    "--boxShadow": "0 0 40px 20px rgba(43, 43, 43, 0.26)",
    "--purpleCard": "rgba(252, 166, 31, 0.45)",
    "--smboxShadow": "-79px 51px 60px rgba(0, 0, 0, 0.08)",
  };

  return (
    <div>
      <div className="external-css-styles" style={customStyle as React.CSSProperties}>
        {/* <Navbar /> */}
        <main className="main-content">
          {/* PARTNERS Section */}
          <div
            className="partners-section"
            style={{ backgroundColor: "var(--background)" }}
          >
            <p className="partners-text">
              We're proud to partner with leading healthcare organizations.
            </p>
            <ul className="partners-list">
              {PARTNERS.map((item: Partner, i: Key) => (
                <li className="partner-item" key={i}>
                  <img src={item.image} alt={item.alt} />
                </li>
              ))}
            </ul>
          </div>



          {/* COOPERATIVE Section */}
          <div className="coop-section">
            <div className="coop-content">
              <div className="coop-left">
                <h3 className="coop-heading">Exclusive Benefits</h3>
                <p className="coop-paragraph">
                  Carefinder provides exclusive benefits to its users, including
                  access to discounted healthcare services, special offers on
                  wellness products, and personalized recommendations tailored
                  to your healthcare needs.
                </p>
              </div>
              <div className="coop-divider"></div>
              <div className="coop-right">
                <ul className="coop-list">
                  {COOPERATIVE.map((item, i) => (
                    <li key={i} className="coop-item">
                      <span className="cross-icon">
                        <RxCross1 />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            {FAQs && FAQs.length > 0 && (
              <div className="faq-content">
                <Section
                  tag="FAQ’S"
                  header="Got questions?"
                  paragraph="Get the answers to your questions about Carefinder."
                />
                <Accordion className="accordion" allowToggle>
                  {FAQs.map((item, idx) => (
                    <AccordionItem key={idx} className="accordion-item">
                      <h2>
                        <AccordionButton className="accordion-button">
                          <Box
                            className="accordion-label"
                            as="span"
                            flex="1"
                            textAlign="left"
                          >
                            {item.question}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel className="accordion-panel" pb={4}>
                        {item.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default How;
