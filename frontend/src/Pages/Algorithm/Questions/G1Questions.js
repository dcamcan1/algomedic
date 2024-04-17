const G1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nSuicidal Ideation \nHomicidal Ideation \nShortness of Breath \nStiff Neck \nMelena",
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
      "Do any of the following apply to the Soldier: \nDepression \nLoss of libido \nWeight change \nMenorrhagia/Anemia >3 weeks \nSnoring \nUPSTF \nMedical Screening/PHA Out of Date",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nCold or sore throat symptoms \nRectal bleeding",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText: "Screen for symptoms, as applicable.",
    choices: [
      { answerText: "Cold Symptoms Screening" },
      { answerText: "Sore Throat Screening" },
      { answerText: "Rectal Bleeding Screening" },
    ],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for fatigue: Advise the Soldier that vitamins are rarely helpful, that “pep pills” do not work (the rebound usually makes the problem worse), and that tranquilizers generally intensify fatigue. Taking a vacation, if possible, or undertaking new activities are often helpful. \nHelpful Actions Include: Identifying potential sources of the fatigue such as work stress, marital discord, lack of rest or sleep (either quantity or quality of sleep), or a poor/not well balanced diet. Provide information on proper sleep hygiene and refer to sleep hygiene course if locally available. If not a suicidal risk (which would require immediate referral) suggest various available options for counseling, including behavioral health, Army community services, and the chaplain. Work on the problem rather than on the symptom. \nSeek medical assistance if symptoms worsen, other symptoms develop, fatigue makes normal activities difficult, difficulty staying awake while driving, or not improved within one week. \nMCP for sleep problems: Sleep issues can present as fatigue described as weakness. It can be a manifestation of depression or stress among other things. Provide education on sleep hygiene, consider providing diphenhydramine or melatonin nightly for three nights, consider activity modification, discuss stress management, and offer a routine referral to behavioral health asset for counseling and treatment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Sleep Debt \nSleep Apnea \nAnemia \nAnxiety Disorders \nChronic Infection/Inflammation \nChronic Fatigue Syndrome \nAcute Liver Failure",
  },
  {
    id: "activityMod",
    activityModText:
      "Allow for 8 hours of uninterrupted sleep with a 24 hour period",
  },
  {
    id: "about",
    aboutText:
      "Fatigue is a state of increased demand/stress on the body or decreased efficiency. \nDP 1. While fatigue is often not caused by a specific disease, it may be a presenting symptom of a potentially serious condition. Depression may only present as fatigue. Decreased libido could be a sign of an adrenal/pituitary issue. Weight change could represent hypo/hyperthyroidism. Menorrhagia often results in anemia. Snoring can be a sign of sleep apnea. USPSTF Screening/PHA is to look at age appropriate cancer and cardiovascular screening. Infections, inflammation, liver/kidney disease, and medication/drug use can also cause fatigue. \nDP 2. If the Soldier has other specific complaints or symptoms, the Soldier should be evaluated for that complaint. Otherwise, the minor-care protocol is appropriate.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default G1Questions;
