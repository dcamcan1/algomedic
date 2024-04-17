const B3Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nDistal Pulses Abnormal \nDistal Sensation Abnormal \nDeformity \nCardiac Symptoms",
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
      "Do any of the following apply to the Soldier: \nRedness/Warmth \nAbdominal Symptoms",
    choices: [
      {
        answerText:
          "Yes: Immobilize the injured extremity before transport or referral",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSymptoms >3 weeks \nNeurologic Symptoms \nLimited motion \nLaceration",
    choices: [
      {
        answerText:
          "Yes: Sling the injured extremity for comfort before transport or referral",
        nextScenario: 4,
      },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now, or a physical therapist (PT) if available. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for shoulder pain: The best treatment is conservative measures including a home exercise program for mobilization and strengthening and analgesics as needed. A temporary profile may be required. Instruct the Soldier to work the injured shoulder through its range of motion (but not vigorous enough to cause pain) at least twice each day to preserve mobility after a 20-minute application of ice. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, worsening of other symptoms, symptoms last longer than one week. \nRefer to PT if direct access to physical therapy (physical therapy sick call) is available, in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Spain/Strain \nFracture \nTendon inflammation/tear \nInstability (dislocation) \nArthritis \nFracture \nMyocardial Infarction",
  },
  {
    id: "activityMod",
    activityModText:
      "May lift, push, pull up to 5 lbs \nNo overhead lifting or repetitive activities \nPerform stretching, core strengthening home regiment during PT",
  },
  {
    id: "about",
    aboutText:
      "Anterolateral shoulder pain worsened by reaching overhead can be related to impingement syndrome, AC joint pathology, or rotator cuff injury. Posterior shoulder pain could be from rotator cuff injury, gallbladder, spleen, or neck. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Abnormal distal pulse or sensation in the setting of trauma is a medical emergency require immediate evaluation. Deformity can be a dislocated shoulder or fracture. Myocardial infarction can be associated with shoulder pain. \nDP 1. The red flags indicate a medical emergency. Immobilize the affected extremity prior to transport if associated with trauma. Immediately refer shoulder pain associated with cardiac symptoms (sweating, shortness of breath, chest or jaw pain/ pressure). A red, warm, swollen joint or pain with fever can be a sign of an infected joint requiring immediate surgical evaluation. Abdominal symptoms suggest an extrinsic cause requiring evaluation. \nDP2. Neurologic symptoms (numbness, weakness) suggest nerve impingement. Limited motion suggests a more significant injury that should be placed in a sling and require further evaluation. Laceration may require closure.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B3Questions;
