const E2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nPain with testes supported \nSuspect stress fracture (increased with weight bearing or during exercise, endurance training, change in exercise routine) \nSevere Pain",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "For stress fracture: crutches with toe touching, weight bearing. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText: "Does the Soldier have nausea and vomiting?",
    choices: [
      {
        answerText: "Yes",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Perform STD screen & urinalysis. \nDoes the Soldier have hematuria?",
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
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for epididymitis. Pain is often improved with testicular support. Instruct the Soldier on the importance of wearing supportive underwear (briefs, jock strap), application of ice to decrease the swelling. Medication: ibuprofen, acetaminophen, topical muscle balm, ice and heat as needed for pain, inflammation, and swelling or ketorolac for moderate pain. Activity modification. \nMCP for muscle/tendon strain. Pain is often worse with activity. Instruct the Soldier on the home exercise program in accordance with local protocol. Medication: ibuprofen, acetaminophen, topical muscle balm, ice and heat as needed for pain, inflammation, and swelling or ketorolac for moderate pain. Activity modification. \nMCP for urethral discharge. Request an order for a urinalysis and gonorrhea/chlamydia urine screen. If urethral discharge is present, 2+ white blood cells (WBCs) on urinalysis, leukocyte esterase positive on urinalysis, or recent known STI exposure, treat for potential gonorrhea/chlamydia infection with ceftriaxone and azithromycin. Instruct the Soldier that the condition is contagious and to abstain from intercourse for 1 week after treatment. Notify the supervising privileged provider so that he or she can track. Refer to community health. Return to clinic if symptoms are not improving within 48 hours, development of new symptoms, or worsening symptoms.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Testicular Torsion \nHernia \nMuscle/Tendon Strain \nStress Fracture \nHip injury",
  },
  {
    id: "activityMod",
    activityModText:
      "Epididymitis: \nWalk at own pace/distance \nNo running, jumping, riding in military vehicle or uneven terrain \nMay stand for up to 15 minutes",
  },
  {
    id: "about",
    aboutText:
      "This term may be described as pain in the testes or groin. Look for visual cues and orient the Soldier to the pain scale prior to defining the level of pain. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: Severe pain at rest with the testes supported can be a sign of testicular torsion or a hernia. Immediate referral is needed for further evaluation and potential treatment. Pain with standing or increasing during exercise can be a sign of a stress fracture of the hip. Change in activity or endurance training are risk factors for a stress fracture. Suspected stress fractures should be toe touch weight bearing and get immediate evaluation. Nausea and vomiting could represent severe pain or be a sign of a hernia. \nDP 2: Pain that has lasted for over 2 weeks is less likely to be an acute muscle strain and could represent an injury to the hip joint requiring further evaluation. Urologic symptoms, like hematuria, require further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default E2Questions;
