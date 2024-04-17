const K2Questions = [
  {
    id: 0,
    questionText:
      "Perform rectal temperature. \nDoes the Soldier have any of the following red flags? \nTemperature <96 degrees F \nAltered Mental Status \nAbnormal Vital Signs \nFrostbite \nTrauma",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Support ABCs, IVs, Transport Horizontal on Stretcher, Start Warming. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nNeurological symptoms \nInfection",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nHistory of psych meds or narcotics \nHistory of alcohol abuse \nSevere pain",
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
    questionText: "Does the Soldier have immersion foot?",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 7 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText: "Screen for immersion foot.",
    choices: [{ answerText: "Immersion Foot Screening" }],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for coldness without criteria for hypothermia: Move Soldier to warm area. Remove wet clothing. Rewarm through utilizing body heat and space/hypothermia blanket. Do not place numb area by heat source (risk of burns).",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Environmental Exposure \nExhaustion and Malnutrition \nHypothyroidism \nSepsis",
  },
  {
    id: "activityMod",
    activityModText: "Limit exposure to cold environments",
  },
  {
    id: "about",
    aboutText:
      "Hypothermia, or a lower than normal body temperature, can be the result of heat loss from exposure to cold or wet environments, inadequate heat production due to poor nutrition or exhaustion, or inaccurate heat regulation from using drugs such as nicotine, alcohol, and medications with anticholinergic side effects. \nDP 1. Mild hypothermia presents with T 90-95oF, normal mental status, tachycardia, tachypnea, and shivering. Moderate hypothermia presents with T 82-90oF, lethargy, bradycardia with arrhythmias, and hypoventilation without shivering. Severe hypothermia presents with T <82oF, coma, asystole, and apnea so that the Soldier may appear dead but resuscitation is still possible. Note any discrepancy between the extent of an abnormal vital sign and the degree of hypothermia may represent an underlying alternate cause for the vital sign abnormality like a head injury for confusion or hypovolemia for tachycardia. Frostbite may appear white or grayish-yellow and be hard or waxy to the touch. Support the Soldier’s airway, breathing, circulation, start two large bore IVs with warmed fluids, remove wet clothes, use body heat, blankets, and space/hypothermia blanket to rewarm, and transport horizontally. Low exertion of peripheral muscles can result in further drop in temperature. \nDP 2. Symptoms of hypothermia with a normal temperature suggests an alternative diagnosis. Opioids, behavioral health medications, and alcohol can include medications for anxiety, depression, antipsychotics can impair thermoregulation. Severe pain associated with a nonfreezing cold injury requires further evaluation and management. \nDP 3. See Protocol K-3 for immersion foot. Immersion foot usually results when the skin is exposed to wet, cold foot gear or from immersion at temperatures from 32oF to 59oF for over two to three days (nonfreezing cold injury (NFCI) or immersion foot) and presents with a white, wrinkled, numb, painless extremity.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K2Questions;
