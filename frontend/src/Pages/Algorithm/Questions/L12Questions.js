const L12Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier currently have symptoms that may apply to another algorithm (and haven't been screened for)?",
    choices: [
      { answerText: "Yes", nextScenario: 3 },
      { answerText: "No", nextScenario: 1 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Is the Soldier traveling on Temporary Duty to a location without easy access to medical care?",
    choices: [
      { answerText: "Yes", nextScenario: 2 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 2,
    questionText:
      "Follow local standard operating procedure (SOP) or discuss with provider. Provide travel pack medications.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 3,
    questionText:
      "Screen for symptoms. Discuss with Advanced Enlisted Medic (AEM). AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText: "Return to duty.",
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
      "This protocol refers to Soldiers requesting specific nonprescription medications for minor-care. \nDP 1: If the Soldier has symptoms, screen the Soldier according to the protocol that represents his or her symptoms. Since nonprescription medications can be dangerous if not used properly, the Soldier should be screened first to ensure that the medications requested are appropriate for his or her current symptoms. \nDP 2: If a Soldier is traveling on temporary duty to a location where medical care is not easily accessible and local policy supports providing travel medications, he or she may request a travel pack of medications. Evaluate for the risk of malaria and other diseases. Discuss the request with the supervising privileged provider. Provide travel medications as authorized by your supervising privileged provider and local policy. \nExample medications include ibuprofen (pain), diphenhydramine (allergies/ reaction), pseudoephedrine (congestion), loperamide and ciprofloxacin (diarrhea), doxycycline (malaria prophylaxis). Supervising privileged provider must approve all travel medications.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L12Questions;
