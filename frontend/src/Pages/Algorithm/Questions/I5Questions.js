const I5Questions = [
  {
    id: 0,
    questionText:
      "Check hCG. \nDo any of the following apply to the Soldier: \nPregnant \nAbnormal Previous Pap \nTotal Hysterectomy",
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
      "Do any of the following apply to the Soldier: \n21+ years old: 1st pap \n21-29 years old: Pap every 3 years \n30+ years old: Pap every 3 years or pap and HPV every 5 years if tests are negative \nAdditional screening: HPV vaccine, gonorrhea/chlamydia (G/C) screening",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText: "Schedule pap appointment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText: "Do not schedule appointment, return to duty.",
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
      "A Pap test is a microscopic examination of cells to detect the presence of pre-cancerous or cancerous process. \nDP 1: If the Soldier’s menstrual cycle is late, check a pregnancy test. If the Soldier is pregnant, refer to the AEM. Look in lab results for previous pap smears. If there has been an abnormal pap lab result, look for the clinical note that details the plan of care. Determine if the plan was followed and discuss with the AEM to determine care. \nDP 2: Confirm the current USPSTF standards. Initial pap smear should be performed starting at 21 years old. From ages 21-29 years old, pap smear should be performed every three years. From age 30 and older, pap smear can be performed every three years or pap smear and HPV testing every five years if both tests are negative. HPV vaccine is recommended up to age 26. G/C screening is recommended yearly for women less than 26 y/o.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default I5Questions;
