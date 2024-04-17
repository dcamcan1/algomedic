const A3Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Vital Signs \nShortness of Breath \nStiff Neck \nAltered Mental Status \nCoughing up blood clots or frank blood",
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
      "Do any of the following apply to the Soldier: \nProductive cough >7 days \nSevere sinus pain \nSevere dental pain",
    choices: [
      { answerText: "Yes to Any (place mask on Soldier)", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSymptoms >7 days \nRebound symptoms \nPurulent discharge",
    choices: [
      { answerText: "Yes to Any (place mask on Soldier)", nextScenario: 4 },
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
      "Treatment Protocol: \nMost upper respiratory tract infection symptoms which include sore throat and ear pain are caused by a virus or allergies and do not require antibiotics. Minor-care is focused on improving the symptoms that the Soldier is having while the issue resolves on its own. \nMinor-Care Protocol for cold: Counsel the Soldier to drink plenty of fluids and rest, cover their mouth when they cough and wash hands to prevent spread. Ibuprofen for pain, acetaminophen for elevated temperature, decongestant for nasal congestion, guaifenesin for mucous, or antihistamine for allergies. Return to clinic if not improving within 1 week, worsening symptoms, fever, new sinus pain, lightheadedness, or pain in the neck.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Allergic or seasonal rhinitis \nBacterial pharyngitis or tonsillitis \nAcute bacterial rhinosinusitis \nInfluenza \nPertussis",
  },
  {
    id: "activityMod",
    activityModText: "Consider quarters/ contagious precautions while febrile",
  },
  {
    id: "about",
    aboutText:
      "If a Soldier states that they have a cold, determine what complaint to screen by asking, “What do you mean by a cold?” If his/her complaint can be screened by another protocol, use that protocol. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Shortness of breath and abnormal pulse oxygenation suggest respiratory compromise. The soldier should be immediately started on oxygen pending further evaluation. Fever with a stiff neck suggests meningitis. Quick Sequential (sepsis-related) Organ Failure Assessment (qSOFA) is comprised of a respiratory rate greater than 21, systolic blood pressure less than 101, and Glasgow coma scale less than 15. Coughing up blood clots or quarter sized amounts of blood can be a sign of bleeding within the lungs. \nDP1. Soldier with an ongoing productive cough may be contagious and needs to be evaluated for quarters. Viral symptoms that are improving and then get worse or onset of severe pain over the cheekbones/back upper teeth (sinuses) can be a sign of a sinus problem requiring prescription medications. \nDP2. Purulent material is thick, yellow/greenish, foul smelling nasal discharge. Purulent discharge can be a sign of an infection or a retained foreign body in the nose. If symptoms have been going on for over seven days, evaluate for a bacterial infection.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default A3Questions;
