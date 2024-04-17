const B9Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Distal Pulses \nAbnormal Sensation \nDeformity",
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
      "Do any of the following apply to the Soldier: \nCalf squeeze \nUnrelated to overuse or injury",
    choices: [
      {
        answerText: "Yes: Immobilize the injured extremity before transport",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nOttowa test \nSqueeze test \nMedial injury",
    choices: [
      {
        answerText: "Yes: X-ray, crutches, and PT education",
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
      "Treatment Protocol: \nMinor-Care Protocol for Ankle Pain. The best treatment is conservative measures including a home exercise program for mobilization and strengthening and analgesics as needed. Instruct the Soldier to work the injured ankle through its range of motion at least three times each day to increase mobility. This should ideally be done after a 20-minute application of ice. The range of motion exercise should not be vigorous enough to cause pain. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough as to prevent performance of normal duties/activities, worsening, not improving within one week. \nRefer to PT if direct access to physical therapy (physical therapy sick call) is available, in accordance with local policy.",
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
      "Ankle pain is a common complaint in Soldiers from overuse or trauma. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” \nDP 1. In the setting of trauma, deformity with loss of peripheral pulses or sensation is an indication of a medical emergency. Immobilize the affected extremity prior to transport. If posterior ankle pain, have the Soldier lie on his or her stomach and squeeze the calf. The test is positive if the foot does not plantar flex with squeezing the calf indicative of a possible Achilles tendon rupture. Pain unrelated to overuse or injury could be an inflammatory process requiring further evaluation. \nDP 2. Ottawa rules are a way of screening for the likelihood of a fracture associated with an ankle sprain. Inability to bear weight after and take 4 steps, tenderness over the posterior tip of the medial or lateral malleolus, or tenderness at the proximal metatarsal are signs of a potential fracture. Squeeze test evaluates for syndesmotic sprain by compressing the fibula against the tibia at the mid-calf.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B9Questions;
