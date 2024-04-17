const F1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Vital Signs \nIrregular Pulse \nWitnessed or history of seizure \nSevere Headache \nHeat Injury",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "For hypotension: start IV fluids. \nFor irregular pulse: perform EKG. \nFor heat exposure: cooling methods. \nDisposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nSuspect drugs/alcohol \nAltered mental status (AMS) \nUnstable gait \nDiabetic",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nVertigo \nAppears anxious \nPrevent normal duties",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for syncope. Common reflex syncope situations include prolonged standing in formation, seeing/ giving blood, or especially stressful situation. Have the Soldier lay down in a comfortable position and elevate the legs, if possible. Continue to monitor the Soldier for 30 minutes after the symptoms have resolved. Reassure the Soldier that it is a common and benign condition. Instruct the Soldier to increase water and salt intake, watch for the prodromal signs (lightheaded, flushing/ feeling of warmth, sweating, tunnel vision/ changes in vision progressing to blindness, nausea, appearing pale), and actions to take when the symptoms start. Laying down with the legs raised or sitting when not able to lay down, clenching the fist, or leg pumping (crossing and flexing legs) or some ways that can help relieve symptoms.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Urinary Obstruction \nOrthostatic Hypotension \nVasovagal Syncope \nVertigo \nAnxiety \nHeart Arrhythmia \nIntracranial Bleed \nSeizure, Drugs, Alcohol",
  },
  {
    id: "activityMod",
    activityModText: "No driving x 72 hours",
  },
  {
    id: "about",
    aboutText:
      "It is useful to try and distinguish among different presentations of dizziness: faintness, blackouts, vertigo, confusion, malaise, muscle weakness, and other sensations. True vertigo refers to an illusion where the room seems to be spinning about or the floor seems to be moving. It may be likened to the feeling experienced immediately after getting off a fast merry-go-round and is often accompanied by nausea. Faintness or light-headedness is a feeling of unsteadiness or beginning to fall. Blackout refers to a complete loss of consciousness and observers should also be questioned about potential causes of the event and any unusual observations during the event. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: Take orthostatic blood pressure. Severe headache associated with trauma can represent an intracranial bleed. Heat injuries can be life-threatening and require prompt action. Soldier acting abnormal or intoxicated, with abnormal pupils, an unsteady gait, loss of coordination, slurred speech, or appearing unkempt should be referred for further evaluation. Hypo/hyperglycemia can also result in altered mental status and progress to a coma. \nDP 2: Anxiety with hyperventilation can result in dizziness. Soldiers with vertigo will require further evaluation and medications for treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default F1Questions;
