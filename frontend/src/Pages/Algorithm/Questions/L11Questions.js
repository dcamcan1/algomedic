const L11Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nAppears sick or uncomfortable \nAltered mental status (AMS) \nHR >100 \nRR >20 \nBP >150/90 \nModerate to Severe Pain",
    choices: [
      { answerText: "Yes to any", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText: "Does the complaint apply to another algorithm on the list?",
    choices: [
      { answerText: "No", nextScenario: 3 },
      { answerText: "Yes", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM). AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText: "Screen for symptoms.",
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
      "Any Soldier with a complaint not covered in this screening manual requires further evaluation. \nDP 1: if the Soldier appears sick or unstable (such as, pale, sweaty, dazed look in eyes), confused or has an altered mental status, uncomfortable (can't stop moving or refusing to move due to pain), has abnormal vital signs, or describes pain as five or higher, refer to the supervising privileged provider now for further evaluation and treatment. All of these scenarios may represent a more significant illness or injury. \nDP 2: If the complaint is not on the list, does not fit under another protocol, and the Soldier appears stable with normal vital signs, refer to the AEM for further evaluation, treatment, and disposition. If the complaint is not on the list but you recognize it as being under a protocol on the list or another way of saying a complaint that is on the list, screen according to the protocol that the Soldier's complaint refers to.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L11Questions;
