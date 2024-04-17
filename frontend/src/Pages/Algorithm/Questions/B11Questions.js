const B11Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Distal Pulse \nAbnormal Sensation \nDeformity \nCola Colored Urine \nInability to Urinate \nSevere Pain Suspected Stress Fracture \nSwelling/Erythema",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Immobilize the injured extremity before transport. \nSuspected rhabdomyolysis: Start IV \nStress injury: crutches (toe touch) & follow Bone Stress Injury (BSI) Policy \nDisposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nAbnormal joint function, limited range of motion or loss of strength \nLaceration \nPain >1 week",
    choices: [
      { answerText: "Yes: provide crutches if needed", nextScenario: 3 },
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
      "Treatment Protocol: \nMinor-Care Protocol (MCP) for overuse injuries: Exercise modification should be done to limit the use of the area that is involved. Instruct the Soldier to stretch the injured area for at least a minute 4 times per day. Home exercise program can be used to strengthen the area. Follow established local protocols for home exercise. Intermittent ice and heat can be used for inflammation. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes so severe as to prevent performance of normal duties/activities, worsening, development of significant swelling or skin color change, soreness in uninjured areas, or not improving within one week. \nIf direct access to physical therapy (physical therapy sick call) is available, consider direct referral to physical therapy in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Fracture \nLaceration \nBruise \nStress Reaction",
  },
  {
    id: "activityMod",
    activityModText: "None - perform a more targeted algorithm if appropriate.",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” \nDP 1. In the setting of trauma, deformity with loss of peripheral pulses or sensation is an indication of a medical emergency. Immobilize the affected extremity prior to transport. Cola colored urine or inability to urinate after exercise can be a sign of rhabdomyolysis. Bolus 1 liter of normal saline to help flush the myoglobin out of the kidneys. Severe pain can be a sign of compartment syndrome and may require emergent surgical decompression. Pain with weight bearing or starts after a certain point during exercise can be a sign of a stress injury. Increase in exercise, long endurance training, or recent modification to training can be risk factors of a stress injury. Place the Soldier on crutches until a bone stress injury is ruled out. Swelling or erythema can be signs of an infection or a venous blood clot. \nDP 2. Limited motion or loss of strength can be a sign of a muscle tear or rupture. Laceration needs to be evaluated for possible closure.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B11Questions;
