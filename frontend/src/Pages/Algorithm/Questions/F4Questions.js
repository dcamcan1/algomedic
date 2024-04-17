const F4Questions = [
  {
    id: 0,
    questionText:
      "Perform Finger Stick Glucose Check. \nDoes the Soldier have any of the following red flags? \nAbnormal Vital Signs \nAltered Mental Status \nFocal Neurological Deficit \nRecent Trauma",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "If glucose < 70: provide sugar/food if available. \nIf Spo2 < 90%: start oxygen. \nHistory of alcohol abuse: administer thiamine. \nHistory of narcotics use: administer naloxone. \nDisposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nUnable to touch chin to chest \nHypoglycemia \nHistory of alcoholism \nHistory of narcotics \nHistory of seizures",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Perform blood alcohol test & urine drug screen (UDS). \nDo any of the following apply to the Soldier: \nSudden onset \nHeat exposure \nPositive UDS \nPositive blood alcohol \nMedication changes",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "If concerned with heat exposure, check rectal temperature. \nRefer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nIf drowsiness or confusion is not from a condition below, refer to AEM. \nMinor-Care Protocol for viral syndrome: Viral syndrome can present as fatigue described as drowsiness. It is a global feeling often associated with other symptoms and muscle aches. Treat with ibuprofen as needed for fatigue/body aches. Treat other symptoms in accordance with the corresponding minor-care protocol. \nMCP for sleep problems: Sleep issues can present as fatigue described as weakness. It can be a manifestation of depression or stress among other things. Provide education on sleep hygiene, consider providing diphenhydramine or melatonin nightly for three nights, consider activity modification, discuss stress management, and offer a routine referral to behavioral health asset for counseling and treatment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Hypoglycemia \nHypotension \nHypoxia \nConcussion \nInfection \nIntoxication",
  },
  {
    id: "activityMod",
    activityModText:
      "Allow for 8 Hours of uninterrupted sleep in any given 24 hour period",
  },
  {
    id: "about",
    aboutText:
      "Drowsiness and confusion are symptoms that may be observed even when the Soldier is relating other complaints. Drowsiness and confusion may be related to many underlying issues to include systemic illness, organ dysfunction, drug intoxication/ withdrawal, psychiatric illness, trauma, or neurologic illness. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: Abnormal vital signs may represent a more significant condition to include shock. Soldiers with an altered mental status should have their finger stick blood sugar checked. Hypoglycemia can cause an altered mental status. Focal neurological deficits and a recent trauma suggest intracranial pathology. Alcohol, narcotics, and other drugs can cause confusion through intoxication or withdrawal. Seizures can cause confusion even if the rhythmic jerking movements are not presenting in the Soldier. \nDP 2: Sudden onset of symptoms is more concerning. Heat exhaustion, heat injury, and heat stroke can be associated with drowsiness or confusion. If a heat exposure is of concern, then a rectal temperature must be checked. Alternative methods of checking the temperature can be inaccurate. Alcohol, drug, or medication exposure or withdrawal can cause drowsiness. Some medications that can cause drowsiness include antihistamines, sleep medications, muscle relaxants, analgesics, and psychiatric medications.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default F4Questions;
