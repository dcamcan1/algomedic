const K3Questions = [
  {
    id: 0,
    questionText:
      "Perform extremity exam. \nDoes the Soldier have any of the following red flags? \nGangrene/Necrosis \nHemorrhagic Blisters \nHypothermia \nFrostbite \nTrauma",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Remove wet clothes & rewarm the Soldier, if hypothermic. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nSevere pain \nSigns of infection",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nUnable to perform duties \nSymptoms >1 week \nPain not controlled",
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
      "Treatment Protocol: \nMinor-Care Protocol for immersion foot. Rewarm the extremity gradually with bed rest, elevation of the extremity, and air drying at room temperature. Rapid warming can increase pain, swelling, and risk of further injury in the extremity. Limit activities with affected extremity and keep elevated for three days. Soldier may have a “slapping, flat footed” gait upon starting to walk that should improve within a week. Rehydrate with warm IV fluids and provide tetanus prophylaxis if required (discuss with AEM prior to giving). Ibuprofen, amitriptyline (requires a privileged provider prescription) as needed for pain. A fan to cool the affected extremity can also help with the pain. Refer to AEM if pain is not controlled. Return to clinic if new symptoms develop, condition worsens, signs of infection.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Nonfreezing Cold Injury \nCold Urticaria \nRaynaud Phenomenon \nFrostbite",
  },
  {
    id: "activityMod",
    activityModText:
      "Limit activities for 3 days \nElevate affected extremity x 3 days",
  },
  {
    id: "about",
    aboutText:
      "Immersion foot usually results when the skin is exposed to wet, cold foot gear or from immersion at temperatures from 32oF to 59oF for over 2-3 days NFCI or immersion foot. NFCI can result in an infection acutely or cold intolerance and pain syndromes chronically. Prolonged exposure to wet environments at temperatures greater than 59oF (jungle foot) can also result in acute pain or injury but typically do not cause chronic issues. Presentation is with a white, wrinkled, numb, painless extremity. After warmed, it becomes a mottled pale blue with delayed capillary refill and start of swelling (hours to days). Progresses to a red, swollen painful extremity with blisters in areas of tissue damage (days to weeks). Can remain sensitive to cold, painful to cold, cool to touch, excessive sweating, or painful for weeks to years. \nDP 1: Frostbite, hypothermia, and signs of gangrene represent a serious medical condition that requires prompt treatment. Severe pain or signs of an infection (such as, fever, red streaks, or swollen glands) require further evaluation by a privileged provider. Hypothermia should be rewarmed once the Soldier is under shelter and able to stay warm. Do Not rub the extremity. Do Not rewarm the extremity in NFCI unless frostbite is also present. During the exam, it is important to look for other injuries, especially in the setting of trauma. \nDP 2: Symptoms lasting longer than one week will need a more in depth evaluation. If the Soldier is unable to perform duties, a profile for one week may initially be required.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K3Questions;
