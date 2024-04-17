const F2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nSuddent Onset, Severe \nFocal Neurologic Signs \nBlown Pupil \nSevere Hypertension (sys >220, dia >110) \nFevere \nVision Change/Loss",
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
    questionText: "Does the Soldier have altered mental status (AMS)?",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nNausea \nUncontrolled (not severe) hypertension \nPrevious failed treatments \nChange in usual headache \nPregnancy",
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
      "Treatment Protocol: \nMinor-Care Protocol for headache: Provide the Soldier with ibuprofen, naproxen, or ketorolac as needed for his or her headache. Return to clinic if confusion, vision problems, nausea, or fever develop, if the pain is so severe that performance of normal duties is impossible, or the headache lasts over 24 hours. May provide physical activity modification for one day, if necessary.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Migraine Headache \nTension Headache \nCaffeine Withdrawal \nInfection/Meningitis \nIntracranial Hemorrhage",
  },
  {
    id: "activityMod",
    activityModText:
      "May wear sunglasses indoors \nLimit loud noises \nWalk at own pace/distance \nNo running, rucking, jumping",
  },
  {
    id: "about",
    aboutText:
      "In the absence of fever, severe pain, or confusion, serious disease is extremely unlikely. Migraines often present with a gradual, increasing onset of a one sided, pulsatile moderate to severe headache worse with physical activity, noise, or light and associated with nausea and may have an aura. Tension-type headache often presents as a bilateral pressure that waxes and wanes lasting from 30 min to seven days. Cluster headache is rare. It presents with a rapid onset within minutes of unilateral deep, continuous severe pain around the eye or temple often associated with tearing, congestion, runny nose, pallor, or sweating. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: Severe hypertension is a blood pressure over 220 systolic or 110 diastolic. When a Soldier has severe hypertension, have them lay down in a quiet, dark room until able to transport them to a higher level of care. A blown pupil can be a sign of increased intracranial pressure. Sudden worst headache of the Soldier's life and focal neurological sign can be a sign of an intracranial hemorrhage. Fever and inability to touch the chin the chest are signs of meningitis. Altered mental status can be a sign of a more significant problem. If there is some question as to whether or not the Soldier is confused, ask him simple questions such as his name, day of the week, the year, where he is now, or who is the President of the United States? \nDP 2: Nausea is a common symptom with a migraine headache but can also be a sign of increased intracranial pressure. Nausea requires a further evaluation to determine the most likely cause. Uncontrolled high blood pressure can result in a headache and requires additional treatment. Headaches that have failed initial treatment need to be evaluated for secondary causes and a different medication regiment. A change from a Soldier's usual headache can represent a more significant underlying medical problem or new cause of the headache. Pregnancy limits the medications that can be used, and headache in pregnancy could represent pre-eclampsia if over 20 weeks pregnant.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default F2Questions;
