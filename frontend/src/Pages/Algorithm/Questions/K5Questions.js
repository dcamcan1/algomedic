const K5Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nWhite or greyish-yellow color \nHard or waxy to touch \nBlisters, cyanosis after rewarming \nHypothermia",
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
      "Screen for immersion foot. \nPad or splint affected area. \nMove Soldier to a warm area, remove wet clothing. \nRewarm using body heat and space/hypothermia blanket. \nDo not rub area, place near heating element, or rewarm area if chance of refreezing. \nPerform tetanus prophylaxis.",
    choices: [{ answerText: "Immersion Foot Screening" }],
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
      "Frostbite results from the skin (usually on the toes, fingers, or face) being exposed to extreme cold for an extended period of time. Lower temperatures and high winds result in shorter times to injury. Immediate evaluation is required. \nDP 1: Presentation includes complaints of a cold, numb, and clumsy affected area. Area may appear white or grayish-yellow and be hard or waxy to the touch. Blisters or cyanosis will be present after rewarming. \nDP 2: If not hypothermia or frostbite, screen for trench foot (algorithm K-3).",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K5Questions;
