const B8Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Pulse/Motor/Sensory \nDeformity \nHigh Energy Trauma",
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
      "Do any of the following apply to the Soldier: \nRedness/Warmth \nImmediate Swelling After Trauma \nNo mechanism of injury (MOI)",
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
      "Do any of the following apply to the Soldier: \nSwelling \nDecreased range of motion (ROM) \nPrevious knee injury",
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
      "Treatment Protocol: \nMinor-Care Protocol forKnee Pain. The best treatment is conservative measures including a home exercise program for mobilization and strengthening and analgesics as needed. Instruct the Soldier to work the injured knee through its range of motion (but not vigorous enough to cause pain) three times a day to preserve mobility after a 20-minute application of ice. Follow established local protocols for home exercise. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, worsening of symptoms, knee catches/ locks up or gives out, or symptoms last longer than a week. \nIf direct access to physical therapy (physical therapy sick call) is available, consider direct referral to physical therapy in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Strain \nLigament or Cartilage Injury \nArthritis \nOveruse Injury \nInfection/Inflammation \nBursitis",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, jumping but may walk up to ¼ mile at own pace/ distance and stand up to 15min \nNo repetitive squatting but may Lift, carry, push, pull up to 25 lbs \nPerform stretching, core strengthening home regiment during PT \nMay wear a brace or wrap",
  },
  {
    id: "about",
    aboutText:
      "Knee pain is a common complaint in Soldiers with a complex differential that includes evaluating for trauma, overuse, swelling, and referred pain. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” \nDP 1. In the setting of trauma, deformity with loss of peripheral pulses or sensation is an indication of a medical emergency. High energy trauma to include car accident, skiing injury, or fall from a height should be assumed to have a serious injury until ruled out. Immobilize the affected extremity prior to transport. Red, warm joint could represent inflammation or infection. Swelling immediately after a traumatic event can be a sign of bleeding into the knee joint. Closer the pain and swelling are related to the traumatic event, the more likely there is a significant injury. Lack of an identifiable cause or relation to activity suggests an inflammatory cause that requires further evaluation. \nDP2. Swelling, decreased range of motion, and a previous knee injury increases the likelihood of a more significant injury like a knee injury reoccurrence or complication of the prior injury.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B8Questions;
