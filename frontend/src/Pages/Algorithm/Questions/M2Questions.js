const M2Questions = [
  {
    id: 0,
    questionText:
      "If the Soldier is acutely ill and you haven't already, rescreen with appropriate algorithm (click restart algorithm, screen appropriately, and return to this algorithm after completion, if necessary). \nDo any of the following apply to the Soldier: \nCondition worsening \nNot improving",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
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
    questionText:
      "Was the Soldier previously seen by Provider or Specialty Clinic requesting Soldier to follow-up?",
    choices: [
      { answerText: "Yes", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Schedule appointment after discussing with Advanced Enlisted Medic (AEM). AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue", nextScenario: 10 }],
    isFinal: true,
  },
  {
    id: 4,
    questionText: "This is not the appropriate algorithm.",
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
      "This refers to a Soldier who returns for further care not part of a scheduled follow-up. Soldier should NOT be screened to a minor-care protocol. As a follow-up visit, the Soldier should receive a more detailed evaluation and be seen by the privileged provider or AEM (if treated with a minor care protocol at the previous visit). \nDP 1: If the Soldier is worsening on treatment or failed the previous treatment regimen, he or she should be referred to the supervising privileged provider. \nDP 2: Soldier should not be screened to below the AEM level when he or she returns to the clinic for the same issue that was previously treated with minor-care. Soldier has the option to elevate his or her disposition to the next higher level (Provider Now) if he or she feels uncomfortable with seeing an AEM.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default M2Questions;
