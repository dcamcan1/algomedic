const I1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nSkin Changes \nMass \nBloody Nipple Discharge",
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
      "Do any of the following apply to the Soldier: \nTemperature > 100.4F \nRed, swollen breast(s) \nFocal breast pain, but no other symptoms \nFamily history of early breast cancer",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nMale with history of testosterone supplement usage \nFemale breastfeeding \nRepeat visit",
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
      "Treatment Protocol: \nMinor-Care Protocol for breast pain. Women with a large amount of breast tissue can have discomfort associated with stretching of Cooper’s ligaments. It can be associated with shoulder, back, or neck pain and made worse with exercise. Educate the Soldier on the importance of supportive undergarments, ice compress/heat compress for inflammation, acetaminophen as needed for mild pain, and ibuprofen (1st line) or ketorolac (2nd line) as needed for moderate pain. \nMCP for chest extramammary/musculoskeletal pain. Related to the chest wall and not the breast tissue. Ice/ heat compresses as needed for inflammation. Medication: mentyl salicylate (1st line) or acetaminophen (2nd line) as needed for mild pain, and ibuprofen (1st line) or ketorolac (2nd line) as needed for moderate pain. Activity modifications should be considered as appropriate. \nMCP for diffuse breast pain. Diffuse breast pain is unlikely to be related to cancer. Provide reassurance. If the Soldier is concerned about the possibility of breast cancer after reassurance, refer to provider for consideration of an imaging study to provide reassurance. Treat discomfort with ice/heat (1st line) or acetaminophen (2nd line) as needed for mild pain and ibuprofen (1st line) or ketorolac (2nd line) as needed for moderate pain.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Cyclical Breast Pain \nMusculoskeletal Issue \nLarge Breasts \nMastitis \nAbscess \nCancer",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, jumping, rucking \nWalk at own pace/ distance \nMay lift, carry, push up to 25 lbs",
  },
  {
    id: "about",
    aboutText:
      "Breast pain can represent musculoskeletal pain, cyclic pain, or pain associated with inflammation or infection. It is rarely associated with cancer. \nDP 1: Skin changes, mass, or bloody nipple discharge are concerning symptoms that require further evaluation and imaging. Red, swollen breast can represent mastitis or an abscess that requires further evaluation and treatment. \nDP 2: Testosterone supplementation in exercise supplements can result in enlargement of breast tissue under the nipple. Enlarged breast tissue can be painful, especially when wearing body armor, further evaluation and counseling are warranted. Nursing mothers often have problems with cracked or infected nipples or have difficulty when the child is weaned, but further examination is required to rule out more concerning issues. Pain without other concerns that is not related to breastfeeding weaning, exercise, or cyclical pain with menstrual cycle requires further evaluation and may require imaging.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default I1Questions;
