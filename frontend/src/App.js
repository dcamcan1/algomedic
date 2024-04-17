import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Scenario from "./Pages/Algorithm/Scenario";
import Result from "./Pages/Result/Result";
import Previous from "./Pages/Previous/Previous";
import DataEntry from "./Pages/DataEntry/DataEntry";
import Details from "./Pages/Result/Details";
import React, { useState, useContext, useEffect } from "react";
import {
  PatientDataContext,
  PrevResponsesContext,
  PatientDataDisplayContext,
  ActivityModDisplayContext,
} from "./components/PatientDataContext";
import { Box } from "@mui/system";

function App() {
  const [prevResponses, setPrevResponses] = useState("");
  const [dispo, setDispo] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [patientData, setPatientData] = useState({
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

  const PatientDataDisplay = () => {
    const { patientData } = useContext(PatientDataContext);
    const location = useLocation();

    const clear = () => {
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
    };

    useEffect(() => {
      if (location.pathname === "/") {
        setDispo("");
        clear();
        setSelectedSubCategory("");
        setPrevResponses("");
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
      }
      if (location.pathname === "/dataentry") {
        setDispo("");
        setSelectedSubCategory("");
        setPrevResponses("");
      }
    }, [location]);

    return (
      <Box
        p={2}
        bgcolor={"dark-gray"}
        color="#D3D3D3"
        fontSize={"medium"}
        marginTop={4}
      >
        <h4 style={{ marginBottom: 20, color: "green" }}>
          Patient Information
        </h4>
        <p>
          <strong>First Name:</strong> {patientData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {patientData.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {patientData.gender}
        </p>
        <p>
          <strong>MRN:</strong> {patientData.mrn}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {patientData.dob && patientData.dob.format("MM/DD/YYYY")}
        </p>
        <p>
          <strong>Phone:</strong> {patientData.phone}
        </p>
        <p>
          <strong>Unit:</strong> {patientData.armyUnit}
        </p>
      </Box>
    );
  };

  const ActivityModDisplay = () => {
    const { patientData = { activity: "" } } = useContext(PatientDataContext);
    return (
      <Box
        p={2}
        bgcolor={"dark-gray"}
        color="#D3D3D3"
        fontSize={"medium"}
        marginTop={2}
      >
        <h4 style={{ marginBottom: 20, color: "green" }}>
          Activity Modification
        </h4>
        {selectedSubCategory && selectedSubCategory !== "" ? (
          patientData && patientData.activity ? (
            patientData.activity
              .split("\n")
              .map((line, index) => <p key={index}>{line}</p>)
          ) : null
        ) : (
          <p>Please Make Your Selections</p>
        )}
      </Box>
    );
  };

  return (
    <BrowserRouter>
      <PatientDataContext.Provider value={{ patientData, setPatientData }}>
        <PrevResponsesContext.Provider
          value={{ prevResponses, setPrevResponses }}
        >
          <PatientDataDisplayContext.Provider value={PatientDataDisplay}>
            <ActivityModDisplayContext.Provider value={ActivityModDisplay}>
              <div className="App">
                <Header />
                <p></p>

                <Routes>
                  <Route
                    exact
                    path="/"
                    element={
                      <Home setSelectedSubCategory={setSelectedSubCategory} />
                    }
                  />
                  <Route
                    exact
                    path="/dataentry"
                    element={
                      <DataEntry
                        setDispo={setDispo}
                        setSelectedSubCategory={setSelectedSubCategory}
                      />
                    }
                  />
                  <Route
                    exact
                    path="/algorithm"
                    element={
                      <Scenario
                        setDispo={setDispo}
                        selectedSubCategory={selectedSubCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                        dispo={dispo}
                      />
                    }
                  />
                  <Route
                    exact
                    path="/result"
                    element={
                      <Result
                        dispo={dispo}
                        selectedSubCategory={selectedSubCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                        setDispo={setDispo}
                        setPrevResponses={setPrevResponses}
                      />
                    }
                  />
                  <Route
                    exact
                    path="/details"
                    element={
                      <Details
                        dispo={dispo}
                        selectedSubCategory={selectedSubCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                        setDispo={setDispo}
                        setPrevResponses={setPrevResponses}
                      />
                    }
                  />
                  <Route
                    exact
                    path="/previous"
                    element={
                      <Previous
                        setSelectedSubCategory={setSelectedSubCategory}
                        setDispo={setDispo}
                        setPrevResponses={setPrevResponses}
                      />
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </ActivityModDisplayContext.Provider>
          </PatientDataDisplayContext.Provider>
        </PrevResponsesContext.Provider>
      </PatientDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
