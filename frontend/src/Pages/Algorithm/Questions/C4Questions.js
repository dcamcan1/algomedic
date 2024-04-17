const C4Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nToilet FULL of Blood \nVomiting Blood or Coffee Grinds \nMelena \nLightheaded",
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
      "Do any of the following apply to the Soldier: \nWeight loss \nNight sweats \nFamily history of early GI cancer \nChange in stool \nMucous with stool",
    choices: [
      {
        answerText:
          "Yes to Any OR Positive Hemocult/Unable to obtain stool sample",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nHistory of anal sex \nLow back problems",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      {
        answerText: "No",
        nextScenario: 5,
      },
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
      "Treatment Protocol: \nMinor-Care Protocol for hemorrhoids and anal fissures: To decrease the amount of irritation, the stool needs to be soft. Advise the Soldier to ensure adequate intake of fluids (8 glasses a day), eat foods high in fiber like bran cereal and fresh fruits and vegetables, and spend less than five minutes on the toilet at a time. Increase fiber slowly as too much fiber at once may cause stomach cramping and gas. Tell the Soldier that the area should be kept clean by washing with warm water and blotting (rather than wiping) dry. Sitting in warm water can improve healing. Polyethylene glycol (1st line) or docusate sodium (2nd line) can be used to help keep the stool soft. Hydrocortisone and pramoxine cream (3rd line) can be used if needed for inflammation and pain. Instruct the Soldier in its use and to return for evaluation if the symptoms worsen, new symptoms develop, or symptoms last longer than one week or recurs.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Food intolerance \nGI Bleed \nCancer \nInfection \nIrritable Bowel Disease \nHemorrhoid/Fissure",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Rectal pain, itching, and bleeding are often signs of hemorrhoids or an anal fissure but more serious conditions must be ruled out. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of hemodynamically significant stomach/ intestinal bleeding. \nDP 1. Feeling lightheaded and orthostatic hypotension can be signs of significant blood loss. Hemoccult stool test can identify blood in the stool. Blood only on the outside of the stool or toilet paper is more likely to be from a hemorrhoid or anal fissure. If a stool sample cannot be obtained except by a rectal exam, then refer as “Provider Now” for the rectal exam. If a hemoccult stool test is not available, then Soldiers with blood on the outside of the stool or on the toilet paper only should be considered as negative. Blood mixed in with the stool should be treated as positive. If you are unsure, consider it positive. \nDP 2. These are symptoms of more concerning disease processes to include cancer with a family history of colon cancer before 45 years old, inflammatory bowel disease, and invasive gastroenteritis.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C4Questions;
