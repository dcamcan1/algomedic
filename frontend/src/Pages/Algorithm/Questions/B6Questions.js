const B6Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Capillary Refill \nAbnormal Distal Sensation \nPalmar Infection \nDeformity \nSignificant Burn",
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
      "Do any of the following apply to the Soldier: \nCrush injury \nHistory of punching",
    choices: [
      {
        answerText:
          "Yes: Immobilize or wrap the injured extremity before transport or referral",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nFinger catching/locking \nLaceration \nUlcers \nAbscess",
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
      "Treatment Protocol: \nMinor-Care Protocol for paronychia: Instruct the Soldier to soak the finger in warm water for 10-15 minutes three times per day and apply topical antibiotic cream after each soak. Ibuprofen (1st line) or acetaminophen (2nd line) can be provided as needed for pain. Ketorolac (3rd line) can be used once on presentation if needed for moderate pain. Return if worsening, increasing redness, abscess formation, not improving in two days. \nMinor-Care Protocol for sprained finger: Anatomically splint the finger to the adjacent finger with tape. Instruct the Soldier on activity modification as appropriate. Instruct the Soldier on the intermittent use of ice for swelling, ibuprofen (1st line) or acetaminophen (2nd line) as needed for pain. Ketorolac (3rd line) can be used once on presentation if needed for moderate pain. Return to clinic if the symptoms are getting worse, pain becomes severe enough to prevent performance of normal duties/activities, or improvement is not seen within one week.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Strain \nFracture/Dislocation \nGout \nCarpal Tunnel Syndrome \nArthritis \nTendonitis \nMuscle Strain",
  },
  {
    id: "activityMod",
    activityModText:
      "Paronychia: Keep area clean and dry \nSprained finger: May lift, push, pull up to 5 lbs; May tape or brace comfort; No contact sports",
  },
  {
    id: "about",
    aboutText:
      "Any deviation of the hand from normal function can result in significant disability. Hand and finger injury are common in Soldiers. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Abnormal distal pulse or sensation in the setting of trauma is a medical emergency requiring immediate evaluation. Significant burns of the hands are considered high risk and should be evaluated for referral to a burn center. \nDP 1. The red flags are an indication of a medical emergency. In the setting of trauma, immobilize the affected extremity prior to transport. Crush injuries and history of punching something are common causes of fractures requiring further evaluation. \nDP2. Finger catching or locking during flexion may represent trigger finger. Ulcers can represent herpetic whitlow (herpes infection). Lacerations and abscesses require further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B6Questions;
