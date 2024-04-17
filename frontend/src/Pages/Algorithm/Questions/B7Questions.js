const B7Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Pulse/Motor/Strength \nDeformity \nHigh Energy Trauma \nSuspect Stress Fracture (increased with weight bearing or during exercise, endurance training, change in exercise routine) \nSevere Pain",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Immobilize the hip or femur as indicated if associated with trauma. \nStress injury: crutches (toe touch) & follow Bone Stress Injury (BSI) Policy \nImmediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nParesthesia \nNot worse with direct pressure & hip flexion \nLimited range of motion (ROM)",
    choices: [
      { answerText: "Yes", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now, or a physical therapist (PT) if available. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for Hip Pain. The best treatment is conservative measures including a home exercise program for mobilization and strengthening and analgesics as needed. Instruct the Soldier to work the injured wrist through its range of motion (but not vigorous enough to cause pain) at least twice each day to preserve mobility after a 20-minute application of ice. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, pain with weight bearing or exercise develops, worsening of symptoms, symptoms last longer than 3 days. \nIf direct access to physical therapy (physical therapy sick call) is available, consider direct referral to physical therapy in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Strain \nArthritis \nStress Fracture \nTrochanteric Bursitis \nTendonitis \nMuscle Strain \nHernia \nReferred Pain",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, jumping but may walk up to ¼ mile at own pace/ distance and stand up to 20min \nMay Lift, carry, push, pull up to 25 lbs \nNo repetitive lifting from floor \nPerform stretching, core strengthening home regiment during PT",
  },
  {
    id: "about",
    aboutText:
      "Lateral pain worse with direct pressure may represent trochanteric bursitis. Anterior hip or groin pain may represent the hip joint injury, fracture (stress fracture), or non-hip issue like inguinal hernia. Femoral stress fractures are more common in initial entry training. They can result in permanent disability if not properly identified and treated. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Abnormal distal pulse or sensation in the setting of trauma is a medical emergency requiring immediate evaluation. \nDP1. Significant force of trauma to include car accident can cause a hip fracture. Immobilize the affected extremity prior to transport. Pain with weight bearing or starts after a certain point during exercise can be a sign of a stress injury. Increase in exercise, long endurance training, or recent modification to training can be risk factors of a stress injury. Place the Soldier on crutches with toe touch weight bearing until a bone stress injury is ruled out. \nDP2. Lateral hip pain with paresthesia is the classic presentation for lateral femoral cutaneous nerve entrapment. Abdominal pathology, testicular pathology, inguinal hernia may present with anterior hip pain that is not worse with palpation, flexion, or weight bearing.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B7Questions;
