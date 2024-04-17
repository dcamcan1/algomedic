const C1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nCyanosis \nAncillary muscle usage \nSpO2 <90% \nSIRS Criteria 2+ \nAirway Swelling \nHives \nAltered Mental Status (AMS)",
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
      "Do any of the following apply to the Soldier: \nIrregular pulse \nSweating \nChest, shoulder, jaw pain or pressure \nHistory of or family history of heart problems",
    choices: [
      {
        answerText:
          "Yes to Any: *** Apply oxygen, perform EKG, administer aspirin 325mg ***",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nElevated temperature \nProductive cough \nSymptoms >10 days \nHistory of asthma/wheezing",
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
      "Do any of the following apply to the Soldier: \nCold-like symptoms \nAllergy symptoms \nHistory of panic attacks",
    choices: [
      { answerText: "No", nextScenario: 4 },
      { answerText: "Yes", nextScenario: 6 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for cold symptoms: Counsel the Soldier to drink plenty of fluids and rest, cover their mouth when they cough and wash hands to prevent spread. Ibuprofen for pain, acetaminophen for elevated temperature, decongestant for nasal congestion, guaifenesin for mucous, or antihistamine for allergies. Return to clinic if not improving within one week, worsening symptoms, fever, new sinus pain, lightheadedness, or pain in the neck. \nMCP for panic attack symptoms (chest tightness, palpitations, anxious, lightheaded): Check EKG. If EKG is normal, initiate observed deep breathing exercises. Place a pulse oximeter on the Soldier's finger. Have the Soldier lay back at a 45 degree angle with legs uncrossed and initiate diaphragmatic breathing exercises with deep, slow inhalation over 4 seconds and exhalation over another 4 second count. If the SpO2 starts to drop, disposition the Soldier as “Provider Now”. Refer Soldier to Behavioral Health after initial panic attack decreases in intensity.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Asthma \nAnxiety \nMyocardial Infarction \nPulmonary Embolism \nPneumonia \nBronchitis \nDeconditioning",
  },
  {
    id: "activityMod",
    activityModText:
      "Cold Symptoms: Aerobic training at own pace/distance x 3 days, limit exposure to temperatures below <50 degrees F",
  },
  {
    id: "about",
    aboutText:
      "Dyspnea is a sensation of breathing discomfort that can be in respiratory or cardiovascular in nature. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now”. Start the Soldier on oxygen with non-rebreather mask at 10 Liters/ minute, start an IV and IVF at TKO and obtain EKG if available. They can be signs of significant underlying medical problems. \nDP 1. Tachycardia, sweating, pain or pressure in the chest, shoulder, or jaw can be symptoms of a myocardial infarction. Chest pain and tachycardia can also be signs of a pulmonary embolism. Irregular pulse identifies an arrhythmia. Do not wait to provide oxygen, give aspirin, and start IV before notifying the supervising privileged provider. \nDP 2. Screens for other medical conditions requiring further evaluation. Productive cough and elevated temperature are signs of pneumonia. Symptoms lasting longer than 10 days may not be viral. History of asthma or wheezing screens for an asthma exacerbation. \nDP 3. Identifies conditions that are self-limited or can be treated with a minor-care protocol.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C1Questions;
