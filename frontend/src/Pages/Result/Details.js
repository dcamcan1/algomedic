import React, { useContext, useEffect } from "react";
import "./Details.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import {
  PatientDataContext,
  PrevResponsesContext,
  PatientDataDisplayContext,
  ActivityModDisplayContext,
} from "../../components/PatientDataContext";
import { useLocation } from "react-router-dom";

const Details = ({
  dispo,
  setSelectedSubCategory,
  setDispo,
  setPrevResponses,
}) => {
  const { prevResponses } = useContext(PrevResponsesContext);
  const PatientDataDisplay = useContext(PatientDataDisplayContext);
  const lines = prevResponses.split("\n");
  const { setPatientData, patientData } = useContext(PatientDataContext);
  const ActivityModDisplay = useContext(ActivityModDisplayContext);
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state.date;

  const formattedDate = `${new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })} at ${new Date(date).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  useEffect(() => {
    if (patientData.firstName === "" || patientData.firstName === null) {
      window.confirm(
        "System error. Please inform developer that he should find a new job."
      );
      navigate("/previous");
    } else {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = "";
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [navigate, patientData.firstName]);

  const DispoDisplay = () => {
    return (
      <Box
        p={2}
        bgcolor={"dark-gray"}
        color="#D3D3D3"
        fontSize={"medium"}
        marginTop={1}
      >
        <h4 style={{ marginBottom: 20, color: "green" }}>Disposition</h4>
        {dispo.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Box>
    );
  };

  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={400}
        flexGrow={1}
      >
        <PatientDataDisplay />
        <DispoDisplay />
        <ActivityModDisplay />
      </Box>
      <Box flexGrow={2} maxWidth={800}>
        <div className="content">
          <span
            style={{
              fontSize: 35,
              marginTop: 30,
              marginBottom: 30,
              color: "green",
            }}
          >
            Previous Encounter Details
          </span>
          <p style={{ fontSize: 21 }}>{formattedDate}</p>
          <button
            className="btn btn-success"
            id="returnButton"
            onClick={() => {
              setPatientData({
                firstName: "",
                lastName: "",
                gender: "",
                mrn: "",
                dob: null,
                phone: "",
                armyUnit: "",
                hpi: "",
                activity: "",
              });
              navigate("/previous");
              setSelectedSubCategory("");
              setDispo("");
              setPrevResponses("");
            }}
          >
            Return to Previous Encounters
          </button>
          <p />
          {lines.map((line, index) => (
            <p key={index} style={{ color: "#D3D3D3" }}>
              {line}
            </p>
          ))}
          {lines.length > 40 ? (
            <button
              className="btn btn-success"
              id="homeButton"
              onClick={() => navigate("/")}
            >
              Return Home
            </button>
          ) : null}
        </div>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={400}
        flexGrow={1}
        marginLeft={16}
      >
        <Box p={2} fontSize={"medium"} marginTop={4}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
          >
            <h4 style={{ color: "green", marginRight: 10 }}>
              History of Present Illness
            </h4>
          </div>
          <p>{patientData.hpi}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
