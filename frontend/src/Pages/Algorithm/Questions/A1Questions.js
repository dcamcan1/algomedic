const A1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nShortness of Breath \nStridor \nDeviated Uvula \nDrooling \nTrouble Swallowing \nStiff Neck",
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
      "Do any of the following apply to the Soldier: \nSymptoms >10 days \nImmunosuppression \nInhaled steroid \nFever",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nFever \nNo cough \nTonsillar Exudate \nSwollen anterior cervical nodes",
    choices: [
      { answerText: "Yes to 3+", nextScenario: 4 },
      { answerText: "Yes to 0-2", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "Perform Rapid Strep +Culture Test if the Soldier has risk factors: \nBarracks \nPositive close contact \nImmunosuppressed contact \nHistory of acute respiratory failure (ARF)",
    choices: [
      {
        answerText: "Test was negative or Soldier has no risk factors",
        nextScenario: 5,
      },
      { answerText: "Test was positive", nextScenario: 8 },
    ],
    isFinal: false,
  },
  {
    id: 5,
    questionText: "Does the Soldier have cold symptoms or ear pain?",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 7 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText: "Screen for cold symptoms or ear pain, as applicable.",
    choices: [
      { answerText: "Cold Symptoms Screening" },
      { answerText: "Ear Pain Screening" },
    ],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for sore throat: A sore throat is often due to a viral infection. Minor-care consist of pain control, measures to decrease inflammation, getting plenty of rest and drinking plenty of fluids (water). Return for signs of the infection getting worse or progressing. \nMinor-Care Protocol for hoarseness: Hoarseness is often due to a virus or irritant. Minor-care consists of resting the vocal cords and avoidance of irritants (cigarette smoking, yelling, heartburn, post-nasal drip). This is a good opportunity to discuss the negative effects of tobacco use and encourage the Soldier to quit using tobacco, if applicable.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 8,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Viral Infections \nBacterial Infections \nMeningitis \nNeck Deep Tissue Infection \nCandida Infection \nStrep Throat",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "A sore throat is often due to a viral infection. Bacterial infections and other causes need to also be considered. \nDP1. Symptoms greater than 10 days, immunosuppression, inhaled steroid medications are related to diseases that are unlikely to go away without treatment. Hoarseness longer than 2 weeks requires a full laryngeal exam. \nDP2. 4 questions that look at the chance of having a Group A Streptococcal (GAS) infection. If 3 of the questions are positive, there is 32% chance of having GAS and a rapid antigen test (RADT) should be performed. The RADT is effective for ruling out GAS in adults but some Soldiers with GAS are missed. Culture test is performed when the RADT is negative and Soldiers or their contacts are at higher risk for complications from a GAS infection. Culture generally takes 24-48 hours for the results to return.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default A1Questions;
