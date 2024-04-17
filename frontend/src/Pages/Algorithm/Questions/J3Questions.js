const J3Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nFacial Cellulitis",
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
      "Do any of the following apply to the Soldier: \nAbscess requiring draining on face or neck \nSigns of scarring \nRequiring limitations on protective equipment",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nFailed conservative therapy \nRequesting profile",
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
      "Treatment Protocol: \nMinor-Care Protocol for shaving problem: Shaving routine modifications are the first line in treatment. The following adjustments can help reduce the penetration of the inter-follicular skin by the hair shaft. Instruct the Soldier to wash the face in a circular motion with soap and warm water once a day to free any embedded hairs. Use a warm compress or warm water on the face before shaving and apply generous amounts of shaving cream for 5 minutes before shaving to soften the hair. Use a single blade razor, shave in the direction of hair growth, and avoid stretching the skin during shaving to reduce the production of very short hairs. Medication can be used in conjunction with the shaving routine modifications. A topical retinoid at night with or without the combination of a low potency topical steroid. Bumps associated with pseudofolliculitis barbae can remain for a few months after treatment has been started. Instruct the Soldier to return if the symptoms are worsening, new symptoms develop, or the minor-care protocol does not appear to be helping after a few weeks.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Acne \nPseudofolliculitis Barbae \nFolliculitis \nTinea Barbae \nAcne Keloidalis Nuchae",
  },
  {
    id: "activityMod",
    activityModText: "Shaving profile in eProfile",
  },
  {
    id: "about",
    aboutText:
      "Pseudofolliculitis barbae is a chronic condition of the beard area resulting from the reentry of the growing hair into the upper layer of the skin or facial hairs becoming trapped in the upper layer of the skin. The genetic predisposition of the African-American male to tight coiling hair makes him highly susceptible to this condition. The most common locations for lesions are the face and neck. The lesions can be painful and interfere with shaving although they rarely become secondarily infected. Permanent scarring is possible. \nDP 1: Facial cellulitis or a draining abscess are signs of a skin infection and not pseudofolliculitis barbae. These conditions require further evaluation and treatment. Cellulitis of the face can have life threatening complications. \nDP 2: After failure of conservative therapy and lifestyle modifications, a permanent profile may need to be considered. Refer to the AEM for counseling prior to initiating the next step in therapy.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J3Questions;
