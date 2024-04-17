const B5Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nDistal Pulses Abnormal \nDistal Sensation Abnormal \nDeformity \nOpen Fracture",
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
      "Do any of the following apply to the Soldier: \nRedness/Warmth \nTrauma/FOOSH \nNo mechanism of injury (MOI)",
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
      "Do any of the following apply to the Soldier: \nIndex or thumb symptoms \nClicking or popping \nMobile mass over tendon \nLaceration \nInability to do job",
    choices: [
      {
        answerText: "Yes",
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
      "Treatment Protocol: \nMinor-Care Protocol for wrist pain: The best treatment is conservative measures including a home exercise program for mobilization and strengthening and analgesics as needed. Instruct the Soldier to work the injured wrist through its range of motion (but not vigorous enough to cause pain) at least twice each day to preserve mobility after a 20-minute application of ice. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, worsening of other symptoms, symptoms last longer than one week.\nRefer to PT if direct access to physical therapy (physical therapy sick call) is available, in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Strain \nFracture \nCarpal Tunnel \nArthritis \nBursitis \nTendonitis \nMuscle Strain",
  },
  {
    id: "activityMod",
    activityModText:
      "May lift, push, pull up to 5 lbs \nMay wrap or wear a brace for comfort \nNo repetitive bending of wrist \nPerform stretching, core strengthening home regiment during PT",
  },
  {
    id: "about",
    aboutText:
      "Wrist pain usually occurs from trauma or overuse. Falling on an outstretched hand can result in a scaphoid (falling forward) or lunate/ triquetrum (falling back) injury. Ulnar side of wrist may involve tendinopathy, triangular fibrocartilage complex injury, or fracture. Radial side of wrist may involve tendinopathy, ligamentous injury, or fracture. Dorsal pain may involve a wrist sprain or fracture. Volar pain may involve fracture, ganglion, or carpal tunnel syndrome. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Abnormal distal pulse or sensation in the setting of trauma is a medical emergency requiring immediate evaluation. \nDP 1. In the setting of trauma, the red flags are an indicator of a medical emergency. Immobilize the affected extremity prior to transport. A red, warm, swollen joint or pain with fever can be a sign of an infected joint requiring immediate surgical evaluation. Trauma and Pain without recent trauma or overuse injury may represent a systemic problem to include rheumatoid arthritis or Lyme disease. \nDP2. Index finger or thumb numbness, pain, or weakness are symptoms of carpal tunnel syndrome. Clicking or popping with pain can be a sign of tendon instability. Ganglion is a mobile mass over a tendon that can be referred for drainage and treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B5Questions;
