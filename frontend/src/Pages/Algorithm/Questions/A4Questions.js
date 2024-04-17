const A4Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAltered Mental Status \nFocal Neurological Symptom or Sign \nDizziness",
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
      "Do any of the following apply to the Soldier: \nRinging >24 hours \nRinging without MOI \nDizziness \nVisual trauma \nDecreased hearing",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nLoud noise exposure or trauma within 24 hours \nEar drainage \nEar pain",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "Perform Otoscope Exam. \nDo any of the following apply to the Soldier: \nTM Opacification, immobility, or rupture \nEar Canal foreign body \nWax buildup",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 5,
    questionText:
      "Do any of the following apply to the Soldier: \nEar pain \nCold symptoms",
    choices: [
      { answerText: "Yes", nextScenario: 7 },
      { answerText: "No", nextScenario: 8 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText:
      "Perform ear irrigation if wax and TM are intact. Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 7,
    questionText: "Screen for cold symptoms or ear pain, as applicable.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
    //REDIRECT TO APPROPRIATE PAGE
  },
  {
    id: 8,
    questionText:
      "Treatment Protocol: \nTinnitus due to recent noise exposure should show improvement over the next 24 hours. Stress the importance of utilizing correct fitting hearing protection. Instruct the Soldier to return for medical assistance if ringing does not improve or if dizziness, ear pain, or hearing loss develops. Temporary sensation of hearing loss can be due to colds or ear infections. Soldiers with upper respiratory infection symptoms should be screened according to those protocols.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Cerumen Impaction \nOtitis Media \nOtosclerosis \nRuptured Ear Drum \nEustachian Tube Dysfunction \nHearing Loss \nDisorders of the Jaw Joint \nSevere Anxiety \nNeck Injuries",
  },
  {
    id: "activityMod",
    activityModText: "Avoid loud noise exposure x48 hours",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Altered mental status is a sign of a more serious underlying problem. Ear trauma can also result in a concussion that needs to be evaluated further. Focal neurological symptom/sign require further evaluation. \nDP1. Ringing greater than 24 hours or related to an event requires further evaluation. Vertigo or “room-spinning dizziness” can be a symptom of inner ear problems and is often associated with nausea. Distinguish vertigo from light-headedness which is screened separately. \nDP2. Trauma and blast injuries can result in Tympanic Membrane or inner ear problems. Foreign body or excessive wax within the ear canal can result in reversible hearing loss. If excessive wax is present, discuss removal with supervisor. \nDP3. If the ringing noise is an associated symptom of a cold or flu, it should be screened by the protocol that addresses that primary complaint. Ringing in the ears, if without loss of balance, is not uncommon especially following recent exposure to loud noises from situations such as weapons firing or riding in mechanized vehicles or aircraft. Generally, the ringing in the ears associated with such noises subsides within 24 hours, but may persist in persons who have long histories of exposure. Further examination is indicated in the absence of exposure to excessive noise or for symptoms lasting longer than 24 hours. Ringing in the ears, if without loss of balance, can be associated with certain medications such as aspirin, nonsteroidal anti-inflammatory agents, some diuretics, etc. It is also important to check for hearing on the follow-up visit.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default A4Questions;
