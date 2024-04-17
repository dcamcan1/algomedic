const I2Questions = [
  {
    id: 0,
    questionText:
      "Check hCG. \nDoes the Soldier have any of the following red flags? \nPositive hCG AND Pelvic Pain \nHistory of Ectopic Pregnancy \nVaginal Bleeding",
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
      "Do any of the following apply to the Soldier: \nPositive hCG without other symptoms",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
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
      "Treatment Protocol: \nMinor-Care Protocol for a late cycle: There are multiple causes of a late cycle that are unrelated to pregnancy to include birth control medications, increasing exercise regimen, and stress. Average menstrual cycle is 28 days but can range from 24 to 38 days. Instruct the Soldier to avoid alcohol and NSAID medications (to include Ibuprofen, naproxen, or ketorolac). Return to the clinic in one week if she still has not had a cycle.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Cyclical Breast Pain \nIrregular Menstrual Cycle \nPregnancy",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Women who believe that their menstrual cycles are late should be evaluated with a pregnancy test. Urine human chorionic gonadotrophin (hCG) tests have improved over the years and provide results much quicker than in the past. A urine hCG obtained greater than seven to eight days after conception should be positive. \nDP 1: Check a urine hCG. If the urine hCG is negative, confirm negative with a serum hCG. Positive hCG with pelvic pain or history of a prior ectopic pregnancy increases the possibility of an ectopic pregnancy. Vaginal bleeding suggests a possible miscarriage or complication of pregnancy. \nDP 2: Refer Soldiers with a positive pregnancy test to the AEM. The Soldier will need to receive initial pregnancy counseling that includes medications and foods to avoid, importance of a daily prenatal vitamin, avoidance of alcohol, pregnancy profile, and referral to obstetrics-gynecology clinic. These services are also sometimes provided by the clinic nurse depending on local protocol.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default I2Questions;
