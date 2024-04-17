const J12Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nFever \nPus \nRedness \nSwelling",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nIncomplete wound closure",
    choices: [
      { answerText: "Yes", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText:
      "Treatment Protocol: \nRemove sutures - ensure the same number of sutures are removed that were placed. \nSuture should be removed when: \nThe wound has healed (within 5 to 10 days). \nThe suture line is clean. \nNo purulent drainage, redness, or swelling is present. Document the appearance of the wound (sutured laceration) and number and type of sutures removed. Provide bacitracin if wound edges are still healing. Counsel the Soldier on wearing sunscreen and sensitivity of the scar to the sun with resulting hyperpigmentation for the first year.",
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
      "Sutures should be removed after the skin edges have started to heal together. If sutures are left in too long, it can result in increased scar formation. If sutures are removed too early, the wound can reopen or pull apart at the edges resulting in a larger scar. \nDP 1: Fever, pus, or redness and swelling at the suture location can be a sign of a secondary infection. Refer the Soldier to the supervising privileged provider for further evaluation and treatment. \nDP 2: Incomplete closure should be referred to the AEM to determine the next step in wound care.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J12Questions;
