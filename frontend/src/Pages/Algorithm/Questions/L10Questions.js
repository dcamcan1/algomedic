const L10Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nEnrolled in ABCP \nBMI >30 and non-muscular build \nStruggling with weight for >6 months \nHistory of failing Height/Weight/Tape",
    choices: [
      { answerText: "Yes to any", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Perform screening labs (TSH, lipids, fasting glucose, and liver function tests) and offer referrals to Integrated Behavioral Health (IBHC) and the dietician. Schedule appointment with provider.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nNew issue \nBMI > or equal to 25 \nRecent profile",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText: "Refer to the Wellness Center or the dietician.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText: "Return to duty.",
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
      "Individuals who come on sick call requesting assistance with weight control or diet therapy to reduce their weight should be seen by a dietitian if there are no medical problems that require evaluation. \nDP 1: Soldiers who are enrolled in the Army Body Composition Program (AR 600-9) are required to meet with a dietician or privileged provider if a dietician is not available. The privileged provider should screen the Soldier for medical causes of his or her weight gain. Screening labs include TSH, lipids, fasting glucose, and liver function tests. Hypothyroidism can cause weight gain and should be screened for with a TSH. Obesity is associated with diabetes, high cholesterol, and inflammation of the liver. Cholesterol, fasting glucose, and liver function tests should be screened to look for associated medical problems. Evaluation should also include screening for sleep apnea, hypertension, polycystic ovary syndrome, osteoarthritis, heartburn, and depression by history and physical exam. Soldier should be referred to the dietician while the lab results and privileged provider appointment are pending. Integrated Behavioral Health consult should be offered and information about other poster services (wellness centered) provided. Same screening should be performed for Soldiers who’s BMI is over 30, have been struggling to maintain their weight through multiple diets for over 6 months, or have a history of being placed on the Army Body Composition Program. \nDP 2: Soldiers who are requesting assistance with weight control that is a new issue should be provided information on community resources that are available which may include the Wellness Center, access to a Dietician, an Athletic Trainer, or Strength and Conditioning Coach and offered a referral to Integrated Behavioral Health if available.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L10Questions;
