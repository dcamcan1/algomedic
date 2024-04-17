import {
  React,
  useState,
  useContext,
  useEffect,
  useCallback,
  A1,
  A2,
  A3,
  A4,
  A5,
  B1,
  B2,
  B3,
  B4,
  B5,
  B6,
  B7,
  B8,
  B9,
  B10,
  B11,
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7,
  D1,
  D2,
  E1,
  E2,
  E3,
  E4,
  F1,
  F2,
  F3,
  F4,
  F5,
  F6,
  G1,
  G2,
  H1,
  H2,
  H3,
  H4,
  I1,
  I2,
  I3,
  I4,
  I5,
  I6,
  J1,
  J2,
  J3,
  J4,
  J5,
  J6,
  J7,
  J8,
  J9,
  J10,
  J11,
  J12,
  J13,
  J14,
  J15,
  J16,
  J17,
  J18,
  K1,
  K2,
  K3,
  K4,
  K5,
  K6,
  K7,
  L1,
  L2,
  L3,
  L4,
  L5,
  L6,
  L7,
  L8,
  L9,
  L10,
  L11,
  L12,
  M1,
  M2,
  useNavigate,
  PatientDataContext,
  PrevResponsesContext,
  PatientDataDisplayContext,
  ActivityModDisplayContext,
  Box,
  subCategories,
  ErrorMessage,
} from "./AlgorithmImports.js";
import "./Scenario.css";

const Scenario = ({
  setDispo,
  dispo,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  const [categorySelected, setCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [scenario, setScenario] = useState(0);
  const { prevResponses, setPrevResponses } = useContext(PrevResponsesContext);
  const PatientDataDisplay = useContext(PatientDataDisplayContext);
  const { patientData, setPatientData } = useContext(PatientDataContext);
  const ActivityModDisplay = useContext(ActivityModDisplayContext);
  const navigate = useNavigate();
  const [exportedResponses, setExportedResponses] = useState("");
  const [diffDiagnosis, setDiffDiagnosis] = useState("");
  const [error, setError] = useState(false);
  const [questionHistory, setQuestionHistory] = useState([]);
  const [iteration, setIteration] = useState(0);
  const [goBackError, setGoBackError] = useState(false);
  const [about, setAbout] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [isFinalDispo, setIsFinalDispo] = useState(false);
  const [catToSend, setCatToSend] = useState("");
  const [showAboutButton, setShowAboutButton] = useState(true);
  const [initCount, setInitCount] = useState(0);

  useEffect(() => {
    if (patientData.firstName === "" || patientData.firstName === null) {
      navigate("/");
      setDispo("");
      setSelectedCategory("");
      setSelectedSubCategory("");
    }
    window.onbeforeunload = function () {
      return "Are you sure you want to navigate away? You will lose the patient's information and data.";
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, [
    patientData.firstName,
    navigate,
    setDispo,
    setSelectedSubCategory,
    setSelectedCategory,
  ]);

  const getQuestionsByCategory = useCallback(() => {
    const category = selectedSubCategory.split(":")[0].trim();
    switch (category) {
      case "A1":
        return A1;
      case "A2":
        return A2;
      case "A3":
        return A3;
      case "A4":
        return A4;
      case "A5":
        return A5;
      case "B1":
        return B1;
      case "B2":
        return B2;
      case "B3":
        return B3;
      case "B4":
        return B4;
      case "B5":
        return B5;
      case "B6":
        return B6;
      case "B7":
        return B7;
      case "B8":
        return B8;
      case "B9":
        return B9;
      case "B10":
        return B10;
      case "B11":
        return B11;
      case "C1":
        return C1;
      case "C2":
        return C2;
      case "C3":
        return C3;
      case "C4":
        return C4;
      case "C5":
        return C5;
      case "C6":
        return C6;
      case "C7":
        return C7;
      case "D1":
        return D1;
      case "D2":
        return D2;
      case "E1":
        return E1;
      case "E2":
        return E2;
      case "E3":
        return E3;
      case "E4":
        return E4;
      case "F1":
        return F1;
      case "F2":
        return F2;
      case "F3":
        return F3;
      case "F4":
        return F4;
      case "F5":
        return F5;
      case "F6":
        return F6;
      case "G1":
        return G1;
      case "G2":
        return G2;
      case "H1":
        return H1;
      case "H2":
        return H2;
      case "H3":
        return H3;
      case "H4":
        return H4;
      case "I1":
        return I1;
      case "I2":
        return I2;
      case "I3":
        return I3;
      case "I4":
        return I4;
      case "I5":
        return I5;
      case "I6":
        return I6;
      case "J1":
        return J1;
      case "J2":
        return J2;
      case "J3":
        return J3;
      case "J4":
        return J4;
      case "J5":
        return J5;
      case "J6":
        return J6;
      case "J7":
        return J7;
      case "J8":
        return J8;
      case "J9":
        return J9;
      case "J10":
        return J10;
      case "J11":
        return J11;
      case "J12":
        return J12;
      case "J13":
        return J13;
      case "J14":
        return J14;
      case "J15":
        return J15;
      case "J16":
        return J16;
      case "J17":
        return J17;
      case "J18":
        return J18;
      case "K1":
        return K1;
      case "K2":
        return K2;
      case "K3":
        return K3;
      case "K4":
        return K4;
      case "K5":
        return K5;
      case "K6":
        return K6;
      case "K7":
        return K7;
      case "L1":
        return L1;
      case "L2":
        return L2;
      case "L3":
        return L3;
      case "L4":
        return L4;
      case "L5":
        return L5;
      case "L6":
        return L6;
      case "L7":
        return L7;
      case "L8":
        return L8;
      case "L9":
        return L9;
      case "L10":
        return L10;
      case "L11":
        return L11;
      case "L12":
        return L12;
      case "M1":
        return M1;
      case "M2":
        return M2;
      default:
        return [];
    }
  }, [selectedSubCategory]);

  const questions = getQuestionsByCategory();
  const handleAltCategoryChange = () => {
    setScenario(0);
    setIteration(1);
    setShowAbout(false);
    setShowAboutButton(true);
  };

  const handleThisChoice = (choice) => {
    if (scenario === 0 && initCount === 0) {
      setPrevResponses(
        prevResponses +
          "*****************   SELECTED ALGORITHM   ******************\n" +
          selectedSubCategory +
          "\n***********************************************************\n\n\n"
      );
    }
    setCategorySelected(true);
    setExportedResponses(
      (exportedResponses) =>
        exportedResponses +
        currentScenario.questionText +
        " - ANSWER: " +
        choice.answerText +
        ";"
    );
    if (currentScenario.isFinal) {
      if (iteration === 0) {
        setCatToSend(selectedSubCategory);
      } else {
        setCatToSend(catToSend + ", " + selectedSubCategory);
      }
      if (choice.answerText === "Cold Symptoms Screening") {
        setSelectedSubCategory("A3: Cold Symptoms/Allergies/Cough");
        handleAltCategoryChange();
      } else if (choice.answerText === "Ear Pain Screening") {
        setSelectedSubCategory("A2: Ear Pain/Drainage/Trauma");
        handleAltCategoryChange();
      } else if (choice.answerText === "Sore Throat Screening") {
        setSelectedSubCategory("A1: Sore Throat/Hoarseness");
        handleAltCategoryChange();
      } else if (choice.answerText === "Headache Screening") {
        setSelectedSubCategory("F2: Headache");
        handleAltCategoryChange();
      } else if (choice.answerText === "Pregnancy Screening") {
        setSelectedSubCategory("I2: Suspects Pregnancy");
        handleAltCategoryChange();
      } else if (choice.answerText === "Heartburn Screening") {
        setSelectedSubCategory("C7: Heartburn");
        handleAltCategoryChange();
      } else if (choice.answerText === "Dizziness Screening") {
        setSelectedSubCategory("F1: Dizziness/Faintness/Blackout");
        handleAltCategoryChange();
      } else if (choice.answerText === "Nausea/Vomiting Screening") {
        setSelectedSubCategory("C1: Nausea/Vomiting");
        handleAltCategoryChange();
      } else if (choice.answerText === "Diarrhea Screening") {
        setSelectedSubCategory("C2: Diarrhea");
        handleAltCategoryChange();
      } else if (choice.answerText === "Pelvic Pain Screening") {
        setSelectedSubCategory(
          "I4: Vaginal Discharge, Itching, Irritation, or Pain"
        );
        handleAltCategoryChange();
      } else if (choice.answerText === "Constipation Screening") {
        setSelectedSubCategory("C5: Constipation");
        handleAltCategoryChange();
      } else if (choice.answerText === "Rectal Bleeding Screening") {
        setSelectedSubCategory("C4: Rectal Pain/Itching/Bleeding");
        handleAltCategoryChange();
      } else if (choice.answerText === "Urinary Symptoms Screening") {
        setSelectedSubCategory("E1: Painful/Frequent Urination");
        handleAltCategoryChange();
      } else if (choice.answerText === "Immersion Foot Screening") {
        setSelectedSubCategory("K3: Immersion Foot");
        handleAltCategoryChange();
      } else if (choice.answerText === "None Apply") {
        handleAltCategoryChange();
      } else {
        setPrevResponses(
          (prevResponses) =>
            prevResponses +
            'DISPOSITION FOR "' +
            selectedSubCategory +
            '": \n' +
            currentScenario.questionText +
            "\n____________________________________________________\n\n\n"
        );
        const shortCat = selectedSubCategory.split(":")[0].trim();
        if (iteration === 0) {
          if (currentScenario.questionText.includes("Treatment Protocol")) {
            setDispo(shortCat + " Screening: Treatment Protocol");
          } else if (
            currentScenario.questionText.includes(
              "the Soldier as 'Provider Now.'"
            )
          ) {
            setDispo(shortCat + " Screening: Provider Now");
          } else if (
            currentScenario.questionText.includes(
              "Refer to Advanced Enlisted Medic (AEM)"
            )
          ) {
            setDispo(shortCat + " Screening: Refer to AEM");
          } else if (
            currentScenario.questionText.includes("discuss with provider")
          ) {
            setDispo(shortCat + " Screening: Discuss with Provider");
          } else {
            setDispo(shortCat + " Screening: " + currentScenario.questionText);
          }
        } else {
          if (currentScenario.questionText.includes("Treatment Protocol")) {
            setDispo(
              dispo + ",\n" + shortCat + " Screening: Treatment Protocol"
            );
          } else if (
            currentScenario.questionText.includes(
              "the Soldier as 'Provider Now.'"
            )
          ) {
            setDispo(dispo + ",\n" + shortCat + " Screening: Provider Now");
          } else if (
            currentScenario.questionText.includes(
              "Refer to Advanced Enlisted Medic (AEM)"
            )
          ) {
            setDispo(dispo + ",\n" + shortCat + " Screening: Refer to AEM");
          } else if (
            currentScenario.questionText.includes("discuss with provider")
          ) {
            setDispo(
              dispo + ",\n" + shortCat + " Screening: Discuss with Provider"
            );
          } else {
            setDispo(
              dispo +
                ",\n" +
                shortCat +
                " Screening: " +
                currentScenario.questionText
            );
          }
        }
        setScenario(10);
      }
    } else if (scenario === 10 && choice.answerText === "No") {
      setIsFinalDispo(true);
    } else if (scenario === 10 && choice.answerText === "Yes") {
      setCategorySelected(false);
      setIteration(1);
      setSelectedCategory("");
      setSelectedSubCategory("");
      setScenario(0);
    } else {
      setScenario(choice.nextScenario);
      setPrevResponses(
        (prevResponses) =>
          prevResponses +
          currentScenario.questionText +
          "\n\nANSWER: " +
          choice.answerText +
          "\n____________________________________________________\n\n"
      );
    }
    setQuestionHistory((prevHistory) => [...prevHistory, scenario]);
  };

  const goBack = () => {
    if (iteration === 1 && scenario === 0) {
      setGoBackError(true);
    } else {
      if (questionHistory.length > 0) {
        const lastScenario = questionHistory[questionHistory.length - 1];
        setQuestionHistory(questionHistory.slice(0, -1));
        setScenario(lastScenario);
        setInitCount(1);
        setPrevResponses(
          (prevResponses) =>
            prevResponses +
            "*** User selected 'Go Back' ***\n____________________________________________________\n\n"
        );
      }
    }
  };

  const handleAboutTrueChange = () => {
    setShowAbout(true);
    setShowAboutButton(false);
  };

  const handleAboutFalseChange = () => {
    setShowAbout(false);
    setShowAboutButton(true);
  };

  const currentScenario = getQuestionsByCategory().find(
    (s) => s.id === scenario
  );

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSubCategory("");
    setSelectedCategory(selectedValue);
    iteration === 0 ? setPrevResponses("") : console.log("second iteration");
  };

  useEffect(() => {
    if (categorySelected) {
      const diffDiagnosisText = questions.find(
        (s) => s.id === "diffDiagnosis"
      )?.diagnosisText;
      if (diffDiagnosisText !== diffDiagnosis) {
        setDiffDiagnosis(diffDiagnosisText || "");
      }
      const activityModText = questions.find(
        (s) => s.id === "activityMod"
      )?.activityModText;
      if (activityModText !== patientData.activity)
        setPatientData({ ...patientData, activity: activityModText || "" });
    }
    if (!currentScenario) {
      setError(true);
    } else {
      setError(false);
    }

    const dataToSend = {
      ...patientData,
      cat_selected: selectedSubCategory,
      first_name: patientData.firstName,
      last_name: patientData.lastName,
      army_unit: patientData.armyUnit,
      dispo: dispo,
      results: prevResponses,
    };

    const handleFinalSubmit = () => {
      fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    if (isFinalDispo) {
      handleFinalSubmit();
      navigate("/result");
    }
  }, [
    selectedSubCategory,
    categorySelected,
    isFinalDispo,
    getQuestionsByCategory,
    currentScenario,
    diffDiagnosis,
    scenario,
    setPatientData,
    questions,
    dispo,
    exportedResponses,
    patientData,
    navigate,
    prevResponses,
  ]);

  const handleSubCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSubCategory(selectedValue);
    if (selectedValue) {
      setCategorySelected(true);
    }
  };

  const restartAlgorithm = () => {
    if (
      window.confirm(
        "Are you sure you want to restart? You will lose ALL your progress."
      )
    ) {
      setCategorySelected(false);
      setSelectedCategory("");
      setSelectedSubCategory("");
      setScenario(0);
      setPrevResponses("");
      setShowAbout(false);
      setDispo("");
    }
  };

  const DiffDiagnosisDisplay = ({ diffDiagnosis }) => {
    return (
      <Box p={2} fontSize={"medium"} marginTop={2}>
        <h4 style={{ marginBottom: 20, color: "green" }}>
          Differential Diagnosis
        </h4>
        {diffDiagnosis && selectedSubCategory !== "" ? (
          diffDiagnosis
            .split("\n")
            .map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p>Please Make Your Selections</p>
        )}
      </Box>
    );
  };

  const AboutDisplay = () => {
    const aboutText = questions.find((s) => s.id === "about")?.aboutText;

    useEffect(() => {
      if (about !== aboutText) {
        setAbout(aboutText || "");
      }
      if (!showAboutButton) {
        setShowAboutButton(false);
      }
    }, [aboutText]);

    return (
      <Box p={2} fontSize={"medium"} marginTop={4}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <h4 style={{ color: "green", marginRight: 10 }}>
            About this Algorithm
          </h4>
          <button
            className="btn btn-secondary"
            id="aboutHide"
            onClick={() => handleAboutFalseChange()}
          >
            Hide
          </button>
        </div>
        {about ? (
          about.split("\n").map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p>Please Make Your Selections</p>
        )}
      </Box>
    );
  };

  return (
    <>
      <Box>
        {error && <ErrorMessage>Please select a category!</ErrorMessage>}
        {goBackError && scenario === 0 && (
          <ErrorMessage>
            You cannot return to a previous algorithm!
          </ErrorMessage>
        )}
      </Box>
      <Box display={"flex"} flexDirection={"row"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          flexGrow={1}
        >
          <Box flexGrow={1}>
            <PatientDataDisplay />
            <DiffDiagnosisDisplay diffDiagnosis={diffDiagnosis} />
            <ActivityModDisplay />
          </Box>
        </Box>
        <Box width={900}>
          <div
            className="card mx-auto mt-5"
            style={{
              maxWidth: "700px",
              textAlign: "center",
              fontSize: "120%",
              borderColor: "#121212",
            }}
          >
            <div
              className="card-body"
              style={{
                color: "#D3D3D3",
                backgroundColor: "#121212",
                border: "#121212",
                padding: 35,
                paddingTop: 15,
              }}
            >
              {categorySelected ? (
                currentScenario ? (
                  <>
                    <div className="card-text">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 40,
                          justifyContent: "center",
                        }}
                      >
                        <strong
                          style={{
                            color: "green",
                            fontSize: "x-large",
                            marginLeft: 10,
                            fontWeight: "bold",
                          }}
                        >
                          {selectedSubCategory}
                        </strong>
                        {showAboutButton && (
                          <button
                            className="btn btn-secondary"
                            id="aboutButton"
                            onClick={handleAboutTrueChange}
                            style={{
                              fontSize: "80%",
                              height: 40,
                              color: "#D3D3D3",
                            }}
                          >
                            About this Algorithm
                          </button>
                        )}
                      </div>{" "}
                      {currentScenario.questionText
                        .split("\n")
                        .map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                    </div>
                    <ul className="list-group" style={{ marginTop: 40 }}>
                      {currentScenario.choices.map((choice, index) => (
                        <li
                          key={index}
                          className="list-group-item"
                          style={{
                            backgroundColor: "#121212",
                            border: "#121212",
                          }}
                        >
                          <button
                            className="btn btn-primary btn-block"
                            id="choiceButton"
                            onClick={() => handleThisChoice(choice)}
                            style={{ fontSize: "large" }}
                          >
                            {choice.answerText}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {scenario !== 0 ? (
                        <button
                          className="btn btn-secondary"
                          id="goBackButton"
                          onClick={goBack}
                        >
                          Go Back
                        </button>
                      ) : null}
                      <button
                        className="btn btn-danger"
                        id="restartButton"
                        onClick={restartAlgorithm}
                      >
                        Restart Algorithm
                      </button>
                    </div>
                  </>
                ) : (
                  <ErrorMessage>
                    No questions found! Please notify developer.
                  </ErrorMessage>
                )
              ) : (
                <>
                  <label>Select a category to begin:</label>
                  <br />
                  <br />
                  <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    style={{
                      textAlign: "left",
                      color: "#D3D3D3",
                      backgroundColor: "#282c34",
                    }}
                  >
                    <option value=""></option>
                    <option value="A">
                      A: Ear, Nose, and Throat Complaints
                    </option>
                    <option value="B">B: Musculoskeletal Complaints</option>
                    <option value="C">C: Gastrointestinal Complaints</option>
                    <option value="D">D: Cardiorespiratory Complaints</option>
                    <option value="E">E: Genitourinary Complaints</option>
                    <option value="F">F: Neuropsychiatric Complaints</option>
                    <option value="G">G: Constitutional Complaints</option>
                    <option value="H">H: Eye Complaints</option>
                    <option value="I">I: Gynecological Complaints</option>
                    <option value="J">J: Dermatological Complaints</option>
                    <option value="K">
                      K: Environmental Injury Complaints
                    </option>
                    <option value="L">L: Miscellaneous Complaints</option>
                    <option value="M">
                      M: Miscellaneous Reasons for Return
                    </option>
                  </select>
                  {selectedCategory && (
                    <>
                      <br /> <br />
                      <label>Select a sub-category:</label>
                      <br />
                      <br />
                      <select
                        value={selectedSubCategory}
                        onChange={handleSubCategoryChange}
                        style={{ color: "#D3D3D3", backgroundColor: "#282c34" }}
                      >
                        <option value=""></option>
                        {selectedCategory &&
                          subCategories[selectedCategory].map((subCategory) => (
                            <option key={subCategory} value={subCategory}>
                              {subCategory}
                            </option>
                          ))}
                      </select>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </Box>
        {showAbout ? (
          <Box
            display={"flex"}
            flexDirection={"column"}
            maxWidth={400}
            flexGrow={1}
          >
            <AboutDisplay />
          </Box>
        ) : (
          <Box
            display={"flex"}
            flexDirection={"column"}
            maxWidth={400}
            flexGrow={1}
          ></Box>
        )}
      </Box>
    </>
  );
};

export default Scenario;
