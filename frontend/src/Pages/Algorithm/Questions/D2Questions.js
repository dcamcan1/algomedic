const D2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nIrregular pulse \nHistory of or family history of heart problems \nShoulder, jaw, pain or pressure",
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
      "Perform EKG. \nDo any of the following apply to the Soldier: \nAbnormal vitals \nAbnormal EKG \nSweating \n40+ years old",
    choices: [
      {
        answerText:
          "Yes to Any: *** Apply oxygen, perform EKG, administer aspirin 325mg",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nProductive cough >7 days \nElevated temperature \nSymptoms >10 days",
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
      "Do any of the following apply to the Soldier: \nCold-like symptoms \nReproducible chest pain \nHeartburn \nHistory of panic attacks",
    choices: [
      { answerText: "No", nextScenario: 4 },
      { answerText: "Yes", nextScenario: 6 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for cold symptoms: Counsel the Soldier to drink plenty of fluids and rest, cover their mouth when they cough and wash hands to prevent spread. Ibuprofen for pain, acetaminophen for elevated temperature, decongestant for nasal congestion, guaifenesin for mucous, or antihistamine for allergies. Return to clinic if not improving within one week, worsening symptoms, fever, new sinus pain, lightheadedness, or pain in the neck. \nMCP for panic attack symptoms (chest tightness, palpitations, anxious, lightheaded): Check EKG. If EKG is normal, initiate observed deep breathing exercises. Place a pulse oximeter on the Soldier’s finger. Have the Soldier lay back at a 45 degree angle with legs uncrossed and initiate diaphragmatic breathing exercises with deep, slow inhalation over 4 seconds and exhalation over another 4 second count. If the SpO2 starts to drop, disposition the Soldier as “Provider Now”. Refer Soldier to behavioral health after initial panic attack decreases in intensity. \nMCP for musculoskeletal chest pain: Pain must be reproducible and directly correspond to a supporting history. Medications: ibuprofen as needed for muscle complaints. Return to clinic if pain increases, lasts longer than three days, shortness of breath/ dizziness/ or new symptoms develop. Must discuss with supervising privileged provider before Soldier leaves screening area.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Myocardial Infarction \nPulmonary Embolism \nPneumonia \nBronchitis \nAnxiety \nHeartburn \nMusculoskeletal",
  },
  {
    id: "activityMod",
    activityModText:
      "MSK Chest Pain: May lift, push up to 25 lbs \nCold Symptoms: Aerobic training at own pace/distance x 3 days, limit exposure to temperatures below <50 degrees F",
  },
  {
    id: "about",
    aboutText:
      "Chest pain must always be taken seriously. It is a sign of many serious conditions. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now”. Start them on oxygen with a nasal cannula at four-six liters/ minute, start an IV and IVF at TKO, give a chewable aspirin. These can be signs of significant underlying medical problems. \nDP 1. Obtain an EKG if available. Tachycardia, sweating, pain, and pressure in the chest, shoulder, or jaw can be symptoms of a myocardial infarction. Note that diabetics and women can present atypically. Chest pain and tachycardia can also be signs of a pulmonary embolism or arrhythmia. Do not wait to provide oxygen, give aspirin, and start IV before notifying the supervising privileged provider. \nDP 2. Elevated temperature and productive cough screens for pneumonia. Recent chest trauma screens for multiple etiologies to include a rib fracture. \nDP 3. Conditions that are not identified below should be referred to the AEM for further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default D2Questions;
