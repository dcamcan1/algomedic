const J18Questions = [
  {
    id: 0,
    questionText:
      "Perform foot exam. \nDoes the Soldier have any of the following red flags? \nRed Streaks up Foot \nGangrene \nBlack Eschar",
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
      "Do any of the following apply to the Soldier: \nCellulitis \nImmunocompromised \nDiabetic \nSevere infection \nRecurrent ingrown nail \nSevere pain, limping",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nModerate infection \nLimitations to duty",
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
      "Treatment Protocol: \nMinor-Care Protocol for ingrown toenail. Mild lesions can be treated with conservative measures. Signs include minimal to moderate discomfort, some redness, and no discharge or pus. Educate the Soldier on not cutting the toenail below the lateral fold, allowing the toenail to grow out past the lateral fold before trimming, and importance of well-fitting shoes. Poorly fitting shoes can predispose the Soldier to ingrown toenails. Soak the affected foot in warm, soapy water for 15 minutes three times per day. While the foot is soaking, push the nail fold away from the nail. After soaking and drying the area, place a piece of cotton or dental floss under the lateral edge of the nail to separate it from the nail fold. Hydrocortisone cream 1% can also be applied to the inflamed area after each soaking to further decrease inflammation. Consider duty limitation for up to 3 days as needed. \nReturn to clinic in one week if still having symptoms or sooner if symptoms are worsening to include spreading or increasing redness, formation of pus or discharge, or increasing discomfort.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Paronychia \nIngrown Toenail \nTrauma \nCellulitis",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, rucking, or jumping \nWalk at own pace/distance",
  },
  {
    id: "about",
    aboutText:
      "An ingrown toenail is a nail that extends into the flesh of the toe along its lateral margins (nail fold). It can range from inflammation and tenderness to a significant infection. \nDP 1: Severe lesions are characterized with signs of spreading infection to include red streaks, cellulitis, or ingrown toenails along both nail folds. red flags, cellulitis, diabetes, and immunocompromised may indicate or increase the risk of a more severe infection requiring antibiotics. Recurrent ingrown toenails need to be evaluated by the supervising privileged provider to determine if permanent nail ablation is required. \nDP 2: Moderate lesions are characterized with substantial erythema and pus. Toenail removal (partial or complete) requires an order for the procedure by a privileged provider. Task must be trained, validated, and documented with the competency assessment file for a medic to be able to perform it. After toenail removal (partial or complete), have the Soldier return in three days to evaluate for healing and for spicule reformation with nail regrowth.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J18Questions;
