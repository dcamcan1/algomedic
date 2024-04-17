const L6Questions = [
  {
    id: 0,
    questionText:
      "Provide counseling regarding the immunization. \nDo any of the following apply to the Soldier: \nRequesting rabies immunization \nImmunization not required \nImmunization is being requested early \nContraindication for immunization exists \nMedic not trained in immunization administration",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "If requesting rabies immunization, disposition as 'Provider Now.' Otherwise, refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Immunization Protocol: If the clinic does not have the immunization requested, refer the Soldier to the appropriate location (such as, readiness clinic, immunizations, etc.). If the clinic does have the immunization and you are trained to provide it, obtain approval from your AEM. After obtaining approval, counsel the Soldier on the immunization, confirm that there are no contraindications, and provide the vaccine according to the package insert. After providing the vaccine, document the vaccination information in the appropriate databases or follow the local policy to have the information documented. Have the Soldier return to clinic if symptoms develop after the vaccination to include a rash, local redness or infection, or fever.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Not applicable",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "DP 1: Rabies immunoglobulin needs to be referred to the supervising privileged provider. Routine immunizations are normally provided only at scheduled times. If the immunization is requested early, is not on the required immunization series, is contraindication, or you are not trained to provide, then refer the Soldier to the AEM. Contraindications include history of a severe reaction to a vaccine, eggs or egg protein, neomycin, or streptomycin. Being immunocompromised, around an immunocompromised person, or pregnant are contraindications that require further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L6Questions;
