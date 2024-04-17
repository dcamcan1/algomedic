const L9Questions = [
  {
    id: 0,
    questionText: "Review medical record. Is the Soldier's MEDPROS red?",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Schedule appointment or refer for service.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nNon-deployable Profile \nBehavioral Health \nSpecialty Care",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText: "Schedule Appointment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText: "Fill out paper for provider to review and sign.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Not Applicable",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Soldiers on orders for overseas assignments require review of their medical records to determine if they have medical conditions that would preclude the assignment and to ensure their medical readiness is current. Record review should look for behavioral health appointments, specialty care appointments, e-profile (non-deployable profile), deployment health assessments due, pregnancy status, and MEDPROS data. MEDPROS includes hearing, dental, immunizations, HIV screen, vision screen, and PHA. \nDP 1: If MEDPROS is identified as being red, instruct the Soldier on how to correct the medical readiness deficiencies, and schedule an appointment as needed. \nDP 2: Identification of a non-deployable profile, behavioral health appointments, specialty care appointments, or a pregnant or postpartum Soldier requires a referral to the supervising privileged provider for further evaluation prior to having the form signed. If no deficiencies or issues are identified, fill out the form for the supervising privileged provider to review and sign. Instruct the Soldier to wait or return at a later specified time depending on supervising privileged provider availability and local policy.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L9Questions;
