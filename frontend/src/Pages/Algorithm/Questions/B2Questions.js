const B2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nBony step off/midline tenderness to palpation \nInability to flex neck \nFever \nRecent HEENT or dental infection",
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
      "Does the Soldier have a significant mechanism of injury (MOI)?",
    choices: [
      {
        answerText:
          "Yes - Immobilize head & neck if associated with trauma. Support ABCs as required.",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nRadiating pain, numbness, tingling, or weakness",
    choices: [
      { answerText: "Yes", nextScenario: 4 },
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
      "Treatment Protocol: \nMinor-Care Protocol for neck pain: Neck pain is extremely common in Soldiers. The best treatment is conservative measures including a home exercise program for mobilization and strengthening, ice and heat as needed for inflammation, and pain as needed. A temporary profile may be required. Instruct the Soldier to work the neck through its range of motion at least twice each day to preserve mobility. This should ideally be done after a 20-minute application of ice. The range of motion exercise should not be vigorous enough to cause pain. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, worsening of other symptoms, symptoms last longer than one week. \nIf direct access to physical therapy (physical therapy sick call) is available, consider direct referral to physical therapy in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Strain \nFracture \nMeningitis \nFlu \nDeep neck space infection",
  },
  {
    id: "activityMod",
    activityModText:
      "No rucking or jumping \nConsider limiting Kevlar use \nRestrict driving if limited ROM \nPerform stretching, core strengthening home regiment during PT",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Bony step off and midline tenderness can be signs of a vertebral fracture. Inability to flex the neck can be a sign of meningitis or fracture. Recent head, eyes, ears, nose, and throat (HEENT) or dental infection can have progressed to a more serious infection. \nAction 1. In the setting of trauma, immobilize the head and neck and support ABCs as required, then transfer care to a privileged provider. \nDP2. Neck pain associated with pain, numbness, or tingling running down into the shoulder or arms may represent central or peripheral nerve impingement and requires further evaluation. Refer to physical therapy if direct referral is available locally.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B2Questions;
