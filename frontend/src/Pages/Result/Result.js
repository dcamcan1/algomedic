import React, { useContext, useEffect } from "react";
import "./Result.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import {
  PatientDataContext,
  PrevResponsesContext,
  PatientDataDisplayContext,
  ActivityModDisplayContext,
} from "../../components/PatientDataContext";

const Result = ({
  dispo,
  setSelectedSubCategory,
  setActivityMod,
  setDispo,
  setPrevResponses,
}) => {
  const { prevResponses } = useContext(PrevResponsesContext);
  const PatientDataDisplay = useContext(PatientDataDisplayContext);
  const lines = prevResponses.split("\n");
  const { setPatientData, patientData } = useContext(PatientDataContext);
  const ActivityModDisplay = useContext(ActivityModDisplayContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (patientData.firstName === "" || patientData.firstName === null) {
      navigate("/");
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
        <p>
          {dispo.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </p>
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
      <Box flexGrow={2} maxWidth={800} marginLeft={10}>
        <div className="content">
          <span
            style={{
              fontSize: 45,
              marginTop: 20,
              marginBottom: 30,
              color: "green",
            }}
          >
            Response Log
          </span>
          <button
            className="btn btn-success"
            id="homeButton"
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
              navigate("/");
              setSelectedSubCategory("");
              setDispo("");
              setPrevResponses("");
            }}
          >
            Return Home
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
    </Box>
  );
};

export default Result;
