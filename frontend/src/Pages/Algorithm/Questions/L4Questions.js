const L4Questions = [
  {
    id: 0,
    questionText:
      "Is the Soldier requesting any of the following: \nNarcotics or psychiatric medications \nSleep medication \nBirth control \nChronic medication",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Place secure message or T-con for provider.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nMedication is for acute condition that failed intial treatment \nRequesting medication that requires prescription",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
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
    questionText: "Provide with acute OTC medication.",
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
      "Use this protocol for all prescription refills except birth control pills. Birth control is screened under I-6, Request for Information on Contraception. \nSome Soldiers request a refill of medication prescribed for an acute illness. Soldiers are normally given enough medication initially to cover the anticipated period of illness. If the Soldier wants additional medication, the illness may not be responding to the treatment as expected. In this case, the Soldier needs to be rescreened by his complaints. The only exception would be the Soldier who lost his original prescription. \nDP 1: Narcotics, psychiatric medications, sleeping medicines, birth control, and chronic medications should be referred to a privileged provider as a secure message or telephone consult. The privileged provider will need to determine if the underlying condition is still being adequately treated and when the next follow-up appointment is needed. \nDP 2: Acute conditions that have failed initial treatment should be referred to the AEM for further evaluation. Acute medication can be re-provided if the Soldier lost his or her medication. Prior to re-providing the medication, review the Soldier's medical record to determine how much longer he or she is supposed to be on the medication.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L4Questions;
