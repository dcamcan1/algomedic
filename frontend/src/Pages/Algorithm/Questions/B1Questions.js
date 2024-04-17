const B1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nFever \nSaddle Anesthesia \nUrinary Retention/Incontinence \nFecal Incontinence \nMotor Deficits \nTrauma with Vertebral Tenderness or Neuropathy \nDysuria/Frequency \nChest/Abdominal Pain",
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
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText: "Does the Soldier have radicular symptoms below the knee?",
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
      "Treatment Protocol: \nMinor-Care Protocol for low back pain (LBP): LBP is extremely common in Soldiers. The best treatment is conservative measures including a home exercise program for mobilization and strengthening, ice and heat as needed for inflammation, and pain control with analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain. Follow established local protocols for home exercise that focus on stretching the lower back and hamstrings multiple times per day, strengthening the core muscles daily, and pain control as needed. Often obesity is a factor in low back pain and Soldiers should be encouraged to lose weight. Instruct the Soldier to seek medical assistance if pain becomes severe enough to prevent performance of normal duties/activities, worsening of other symptoms, symptoms last longer than one week. \nIf direct access to physical therapy (physical therapy sick call) is available, consider direct referral to physical therapy in accordance with local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Muscle Spain/Strain \nFracture \nInfection \nRenal Stone/UTI \nArthritis \nCauda Equina Syndrome",
  },
  {
    id: "activityMod",
    activityModText:
      "No repetitive bending or lifting but may lift/ carry up to 40lbs \nPerform stretching, core strengthening home regiment during PT \nNo ruck marching, running, or jumping but may walk, bike, or swim for cardio",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” \nDP1. A focused history and physical exam is essential to localizing a Soldier's complaint of back pain and identifying its source. The HPI should include an OPQRST evaluation of the complaint and the ROS should specifically address red flag symptoms as well as questions related but not limited to infection, trauma, cardiopulmonary, gastrointestinal, and genitourinary, or gynecological complaints. \nDP2. Back pain associated with pain, numbness, or tingling running down into the legs may represent central or peripheral nerve impingement and requires further evaluation. Refer to a physical therapist if direct referral is available locally.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B1Questions;
