const J11Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nSIRS Criteria 2+ \nAnimal Bite or Scratch",
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
      "Do any of the following apply to the Soldier: \nFever \nRed streaks \nOozing fluid \nTetanus risk \nHigh-risk wound",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nErythema >1 inch \nIncreased warmth \nIncreased tenderness \nLaceration",
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
      "Treatment Protocol: \nGently wash the affected area with soap and water. If there is a laceration, irrigate inside the laceration using a syringe with jets of sterile saline. While washing and irrigating the wound, ensure that all foreign material has been removed from the wound. \nMinor-Care Protocol for abrasion: Cover the abrasion with an antibacterial ointment (Bacitracin). Provide the ointment for the Soldier to apply to the abrasion twice a day. Cover the abrasion with a protective, non-stick sterile dressing and have the Soldier change the dressing daily or when saturated with fluid. Keep the area clean and dry. \nMCP for laceration: If the edges of the wound can be brought together easily, bleeding is controlled, and there are no signs of infection, minor-care is appropriate. Steri-strips may be applied to keep the skin edges together. If it is a laceration, return to clinic in 24-48 hours for re-evaluation. Otherwise, return to clinic for increasing redness, bad smell, thick discharge, increasing tenderness, or other concerns to include the edges becoming separated.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Abrasion \nLaceration",
  },
  {
    id: "activityMod",
    activityModText: "Keep area clean and dry",
  },
  {
    id: "about",
    aboutText:
      "Skin abrasions are caused when the skin is rubbed raw such as when a knee or elbow is scraped. While this type of injury is painful, it normally requires only minor treatment. \nDP 1: SIRS criteria includes two of the following: heart rate over 90 bpm, respiratory rate over 20, Temp >100.4o F or <96.8o F, or WBC >12,000 cells. SIRS criteria with a source of infection is sepsis and requires prompt treatment. Fever, red streaks, and oozing wounds indicate an infection that requires further evaluation and treatment. Puncture wounds, avulsions, from crushing or burns, and wounds contaminated with dirt, saliva, or feces require tetanus if not given within last 5 years. Clean wounds require tetanus if not given within last 10 years. High risk wounds increase the risk of complications. Bite wounds have a risk of infection. Lacerations over a joint, on the face, or on the hand or foot have a higher risk of complication from the laceration. \nDP 2: Erythema, warmth, and increased tenderness are signs of inflammation or an early infection that requires further evaluation. A laceration needs to be evaluated to determine if it needs to be closed.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J11Questions;
