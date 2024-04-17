const L2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nExposed Pulp \nAvulsed Tooth \nSevere Pain \nTrauma \nChest Pain \nShortness of Breath",
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
      "Do any of the following apply to the Soldier: \nLoose tooth \nAbscess \nInfection \nGingivitis \nPeriodontitis",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nBroken tooth \nJaw pain not from trauma \nIssue not related to furry tongue, white plaque (leukoplakia), or bad breath",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
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
      "Treatment Protocol: \nMinor-Care Protocol for furry tongue: Benign condition often due to antibiotic use, tobacco use or poor oral hygiene. Treatment is to brush the area with toothpaste and a soft toothbrush three times per day. White patches on the oral mucosa (leukoplakia) is a benign condition often due to smokeless tobacco use or mechanical irritation (such as, braces, chewing). Instruct on importance of surveillance during dental visits, because there is a risk that it could progress to cancer over the next 10 years. If an area is indurated, refer to a dentist now to be evaluated to determine if a biopsy is necessary. \nMCP for bad breath. Mostly commonly from poor oral hygiene and caused by bacteria on material between the teeth and on the back third of the tongue. It can also be related to eating certain types of food/ beverages, smoking, low saliva flow states (such as, sleeping, dry mouth), or infection/inflammation (such as, tonsils, sinuses, bronchitis). After obtaining a history, refer to a PCC or dentist, if indicated. Otherwise, instruct on the likely cause and importance of proper oral hygiene with brushing three times per day and flossing daily. Return to clinic if symptoms are not improving within one week or additional symptoms develop.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Tooth Cavity \nPoor Dental Hygiene \nTempromandibular Joint Pain \nInfection \nHeart Attack",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Problems with the teeth are usually self-evident. Symptom of dental pain may be a result of a non-dental source such as myofascial inflammation, migraine headache, maxillary sinusitis, ear issues, temporomandibular joint pain, or nerve pain. Always inquire about other complaints before referring the Soldier to a dentist. \nDP 1: Exposed pulp (that is, feathery material in middle of tooth), knocked out tooth with tooth present, severe pain, signs of oral infection (such as, redness, gum bleeding, swelling) should be referred to the dentist. Trauma with associated jaw pain, sinus problems with tooth pain, heart symptoms with jaw pain (such as, shortness of breath, sweating, lightheaded, chest pain/pressure), signs of face infection, or if the dentist is not available should be referred to the supervising privileged provider. \nDP 2: AEM can provide temporary pain medications and treatment for a broken tooth (pulp is not showing). Jaw pain not from trauma can be further evaluated by the AEM for temporomandibular joint dysfunction or infection.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L2Questions;
