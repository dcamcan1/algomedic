const J4Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nScaling with Visible Inflammation \nAbnormal Sensation \nPainful Erosions",
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
      "Do any of the following apply to the Soldier: \nSoldier has 2nd complaint \nMedicated shampoo not working \nDeveloped new/worsening symptoms",
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
      "Treatment Protocol: \nMinor-Care Protocol for dandruff. There are some risk factors that make a Soldier more susceptible. Some risk factors include if the Soldier is male, Soldier has excessively oily skin and hair and/or if the Soldier suffers from certain diseases (for example, Parkinson's disease, HIV). \nOTC medication: Antifungal shampoo used daily (2-3 times per week minimal) for several weeks and remission is achieved. Manage stress levels, spend time (a few minutes) outdoors in the sun (DO NOT sunbathe). OTC medication: Antifungal shampoo used daily (2-3 times per week minimal) for several weeks and remission is achieved. Instruct the Soldier to seek medical assistance if mild dandruff is still present and not improving after three to four weeks of antifungal shampoo use, symptoms worsen, or new symptoms begin.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Pemphigus Foliaceous \nTinea Capitis \nPsoriasis \nAllergic Contact Dermatitis \nSeborrheic Dermatitis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Dandruff which is also known as pityriasis sicca, is the mildest and most common form of scalp seborrheic dermatitis. White scales or flakes on the head or hair with mild itching are the most common symptoms. \nDP 1. Visible inflammation with patchy, orange to salmon-colored or grayish plaques covered with yellowish, greasy scales, concretions of scale around hair shafts, lesions consisting of fissures, oozing, and crusting, are all signs of a more severe form of scalp seborrheic dermatitis. \nDP 2. Dandruff, can be a chronic relapsing condition even in its mild form. All antifungal shampoos are not the same and Soldiers may have different responses to them. OTC treatment may take some trial and error to find the shampoo that is right for the Soldier. Inflammation, lesions with oozing and crusting are signs that the symptoms are getting worse and the Soldier needs to be evaluated inside of a clinic setting.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J4Questions;
