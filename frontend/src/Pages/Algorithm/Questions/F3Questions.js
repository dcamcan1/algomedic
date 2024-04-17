const F3Questions = [
  {
    id: 0,
    questionText:
      "Perform Finger Stick Glucose Check. \nDoes the Soldier have any of the following red flags? \nLocalized to a Region or 1-sided \nRecent Trauma \nLoss of Consciousness \nBowel/Bladder Incontinence",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "If glucose < 70: provide sugar/food if available. Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nBack pain \nSevere headache \nBlood glucose < 70 \nDiabetes insulin \nTick exposure",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Perform pregnancy test, if appropriate. \nDo any of the following apply to the Soldier: \nFever \nPrevents normal acitvities \nFirst occurrence of symptoms \nPregnant \nDepressed \n35+ years old",
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
      "Treatment Protocol: \nMinor-Care Protocol for hyperventilation (respiratory rate greater than 14 per minute). Provide reassurance to the Soldier. Have the Soldier practice relaxed breathing. If symptoms do not resolve within 10 minutes, refer to AEM. If symptoms resolve, refer to behavioral health if available. \nMCP for viral syndrome. Viral syndrome can present as fatigue described as weakness. It is a global feeling often associated with other symptoms and muscle aches. Treat in accordance with related protocol. \nMCP for sleep issues. Sleep issues can present as fatigue described as weakness. It can be a manifestation of depression or stress among other things. Provide education on sleep hygiene, consider providing diphenhydramine or melatonin nightly for three nights, consider activity modification, discuss stress management, and offer a routine referral to behavioral health asset for counseling and treatment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Viral Syndrome/Fatigue \nStroke \nNerve Compression \nHypoglycemia \nHyperventilation \nDepression \nLyme Disease",
  },
  {
    id: "activityMod",
    activityModText:
      "Insomnia: Allow for 8 hours of uninterrupted sleep in 24 hour period \nViral Syndrome: PT training at own pace/ rep/ distance x 3 days",
  },
  {
    id: "about",
    aboutText:
      "“Numbness” may be used by the Soldier to describe muscle weakness, malaise, confusion, or abnormal sensation including tingling (a “pins and needles” sensation). Paralysis/weakness is a condition that refers to a loss of muscular strength resulting in difficulty or inability to move a body part. A complete loss of muscular strength is paralysis; a partial loss is weakness. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: Localized issue is more likely to have a serious cause then generalized symptoms. Back pain can represent a herniated disc causing nerve compression. Severe headache can represent an intracranial lesion. Insulin use, or history of diabetes can present with symptomatic hypoglycemia. In hypoglycemic Soldiers, sugar or food should be provided if available. \nDP 2: Fatigue from an infectious illness can be described as weakness. First occurrence of symptoms or being 35 years old or older may indicate a higher risk for a more serious condition. Depression can also present as weakness.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default F3Questions;
