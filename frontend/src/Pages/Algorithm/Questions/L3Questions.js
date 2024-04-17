const L3Questions = [
  {
    id: 0,
    questionText:
      "Perform oral exam. \nDoes the Soldier have any of the following red flags? \nDiffuse Sores \nBloody Diarrhea",
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
      "Do any of the following apply to the Soldier: \nPainless sores \nAlso located in groin \nHistory of bloody diarrhea \nDiffuse rash \nCondition >2 weeks",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nCluster of ulcers \n>5 mm ulcer",
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
      "Treatment Protocol: \nMinor-Care Protocol for aphthous ulcer (canker sore). Most common oral ulcer. They present as small, painful, shallow, round or oval oral ulcers with a grayish base. Apply ¼ inch of triamcinolone oral paste to the ulcer at bedtime. It should resolve 10-14 days. Refer to the supervising privileged 3.0 if there is a history of severe stomach pain or bloody diarrhea. \nMCP for hand, foot, and mouth disease. Common in children. It presents with oval pale papules with a red rim on the palms and soles of the feet with an aphthous ulcer. Elevated temperature, feeling tired, and a sore throat often start before the lesions appear. Treatment is supportive. Provide acetaminophen as needed for elevated temperature and Ibuprofen as needed for malaise. Cepacol lozenges, salt water gargles (1/4 teaspoon of salt in 1 cup of warm water), and drinking warm fluids may also help with the sore throat. \nInstruct the Soldier to return to the clinic for further evaluation if new symptoms develop, symptoms worsen, or the symptoms are not controlled with the current regimen or resolved within 2 weeks.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Aphthous Ulcers \nHerpes Simplex Virus \nHand, Foot, and Mouth Disease \nStevens Johnson Syndrome",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Sores in the mouth are usually inflammatory or ulcerative in nature and may be associated with many upper respiratory infections or may result from trauma. Refer Soldiers with sores in the mouth to Category III care. \nDP 1: Diffuse lesions can be a sign of an inflammatory disorder (such as, Stevens-Johnson syndrome, erythema multiforme). Painless lesion can be a sign of Lupus. Lesions within the mouth and groin can represent Behcet's syndrome. Mouth sores can be a sign of Crohn's Disease requiring further evaluation by the supervising privileged provider. Lesions that have been present for over two weeks need further evaluation to rule out other causes. \nDP 2: Herpes Simplex and Herpes Zoster can both presents as a cluster of ulcers. When it is within the mouth, refer the Soldier to the AEM for further evaluation. Large oral ulcers could be from other causes or require additional treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L3Questions;
