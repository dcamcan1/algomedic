const B4Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nDistal Pulses Abnormal \nDistal Sensation Abnormal \nDeformity",
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
      "Do any of the following apply to the Soldier: \nRedness/Warmth \nDiffuse Pain",
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
      "Do any of the following apply to the Soldier: \nLimited range of motion (ROM) \nSymptoms >2 weeks \nNeck or shoulder symptoms \nNeurologic Symptoms \nUlnar Hand symptoms \nSwelling",
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
      "Treatment Protocol: \nMinor-Care Protocol for elbow pain: The best treatment is conservative measures including a home exercise program for mobilization and strengthening and analgesics as needed. A temporary profile may be required. Instruct the Soldier to work the injured elbow through its range of motion at least twice each day to preserve mobility. This should ideally be done after a 20-minute application of ice. The range of motion exercise should not be vigorous enough to cause pain. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, worsening of other symptoms, symptoms last longer than one week.\nRefer to PT if direct access to physical therapy (physical therapy sick call) is available, in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Strain \nFracture \nDislocation \nTendonitis \nBursitis",
  },
  {
    id: "activityMod",
    activityModText:
      "May lift, push, pull up to 5 lbs \nNo repetitive bending of elbow or turning/bending of wrist \nPerform stretching, core strengthening home regiment during PT",
  },
  {
    id: "about",
    aboutText:
      "Elbow joint is formed by the connection of the distal humerus and the proximal radius (radial head). Epicondyles are bony prominences on the medial and lateral side of the distal humerus and are the site tendon attachment for muscles of the lower arm. Lateral elbow pain may represent tennis elbow, radiohumeral joint pain, or referred pain. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Abnormal distal pulse or sensation in the setting of trauma is a medical emergency requiring immediate evaluation. \nDP 1. Immobilize the affected extremity prior to transport if associated with trauma. A red, warm, swollen joint or pain with fever can be a sign of an infected joint requiring immediate surgical evaluation. Diffuse pain that involves multiple joints or muscles may represent a systemic cause and requires further evaluation. \nDP2. Limited ROM and swelling may represent an issue within the joint requiring further evaluation. Neck and shoulder issues may refer pain to the elbow. Ulnar nerve pain may be referred to the ulnar side of the forearm, hand, pinky, and ring finger area.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B4Questions;
