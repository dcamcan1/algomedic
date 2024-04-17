import { useNavigate } from "react-router";
import "./Home.css";
import { PatientDataContext } from "../../components/PatientDataContext";
import React, { useContext, useState } from "react";

const Home = ({ setSelectedSubCategory }) => {
  const navigate = useNavigate();
  const { setPatientData } = useContext(PatientDataContext);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div
        className="homeContent"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-success btn-lg"
            type="button"
            id="homeNewButton"
            onClick={() => {
              navigate("/dataentry");
              setSelectedSubCategory("");
              setPatientData({
                firstName: "",
                lastName: "",
                gender: "",
                mrn: "",
                dob: null,
                phone: "",
                armyUnit: "",
                hpi: "",
              });
            }}
          >
            Start New Encounter
          </button>
          <button
            className="btn btn-secondary btn-lg"
            id="previous"
            type="button"
            onClick={() => {
              navigate("/previous");
            }}
          >
            View Previous Encounters
          </button>
          <br />
          <button
            className="btn btn-dark"
            id="aboutButton3"
            onClick={handleShowMore}
          >
            {showMore ? "Hide" : "About algoMedic"}
          </button>
        </div>
        <div>
          <img id="adtmcpic" src="/undraw_injured_9757.svg" alt="ADTMC" />
        </div>
      </div>
      <div id="about" style={{ display: "flex", justifyContent: "left" }}>
        {showMore && (
          <>
            <div
              id="about"
              style={{ maxWidth: "1000px", textAlign: "left", marginLeft: 80 }}
            >
              <h1>About Our Application</h1>
              <p>
                This application is a digital adaptation of the
                Algorithm-Directed Troop Medical Care (ADTMC) manual. The ADTMC
                is a comprehensive guide that provides medical algorithms to
                guide healthcare professionals in providing high-quality care to
                military personnel.
              </p>
              <p>
                The ADTMC manual serves as a guide for healthcare professionals
                during medical evaluations, helping them to categorize service
                members' health issues and direct them to the suitable level of
                care. It also offers a set of limited treatment protocols for
                conditions that resolve on their own. Additionally, it
                facilitates regular healthcare services, such as general
                check-ups, immunizations, and contraceptive services.
              </p>
              <p>
                The ADTMC system empowers healthcare providers to swiftly assess
                the urgency of each soldier's health concerns, promptly pinpoint
                the most suitable healthcare provider to handle the situation,
                and ensure that soldiers seeking medical attention are promptly
                directed to the right level of care.
              </p>
              <h2>Our Mission</h2>
              <p>
                Our mission is to digitize the ADTMC manual and provide an
                intuitive, user-friendly interface that allows Army medics
                (68Ws) to quickly find and understand the information they need.
                By doing so, we aim to enhance the delivery of medical care,
                improve health outcomes, and ultimately save lives.
              </p>
              <h2>Features</h2>
              <p>
                Each algorithm displays differential diagnoses, suggested
                activity modifications, and patient information in the margins.
                If you need more information about an algorith, simply click
                "About this Algorithm." <p />
                Please note, this application is purely demonstrational and not
                currently meant to be used in the stead of standard operating
                procedures.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or feedback, please don't hesitate to
                contact us at tryalgomedic@gmail.com.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
