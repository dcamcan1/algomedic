const K4Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nDiffuse symptoms \nNot exposed to dry wind \nSigns of infection",
    choices: [
      { answerText: "Yes to any", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for chapped skin. Cover the exposed area so that it is no longer exposed to the drying wind. Apply moisturizing lotion (oil based cream or ointment). Apply Vaseline or lip balm to the lips. Moisturizing cream can also protect from further wind effects.",
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
      "Chapping is the unusually rapid drying of skin due to exposure to a hot or cold dry wind which draws water out of the skin. Generally, it is not a medical problem unless cracking or fissuring with a secondary infection takes place. The involved skin heals as new skin cells develop. \nDP 1: Since exposure to dry wind causes chapping, involvement of areas other than the hands and face or not being exposed to dry wind makes this diagnosis unlikely, and the Soldier should be referred for further evaluation. Presence of inflammation other than simple skin redness warms of the possibility of infection and requires evaluation for possible antibiotics. Numbness can be a sign of a cold injury.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K4Questions;
