const J14Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nTrouble Breathing \nAltered Mental Status (AMS), \nDrowsy \nHigh Risk Location \nCircumfrential Burn",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Provide emergency stabilization (oxygen, IVF, airway management)/resuscitation, as appropriate, prior to transport if necessary. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nDeep 2nd/3rd degree burns \nBurn over >10% of body \nTrauma \nSevere pain",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \n2nd degree burn \nSecondary infection \nSunburn >25% of body \nExhaustion \nUnable to perform duties",
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
      "Treatment Protocol: \nMinor-Care Protocol for burns. Superficial burns only include the epidermal layer of skin. They are red and painful but do not blister. The pain and redness typically resolves within three days, and they heal without scarring. Apply cold packs to the affected area as needed for comfort. Leave the area uncovered. Provide acetaminophen or ibuprofen as needed for pain. For sunburn, instruct the Soldier on the importance of using sunscreen, reapplying it every hour, and risks of cancer with repetitive sun damage to the skin. May recommend OTC aloe vera for additional pain relief. Return to clinic for worsening symptoms, new symptoms, or if not improving within three days.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Burn \nIrritant Contact Dermatitis",
  },
  {
    id: "activityMod",
    activityModText: "Keep area clean \nAvoid additional heat exposure to area",
  },
  {
    id: "about",
    aboutText:
      "A burn is defined as any injury to the outer layer of skin or deeper tissue caused by heat, chemicals, or electricity. Minor burns are characterized by redness, pain, and tenderness. More severe burns may not have these symptoms. Sunburn is generalized redness of the skin produced by overexposure to sunlight. Sunburns should be avoided due to repeat occurrences increasing the risk of permanent injury to the skin and increased risk of skin cancer. \nDP 1: A Soldier with any potential for airway involvement or smoke inhalation causing symptoms should be immediately transported to the nearest qualified or privileged provider. High risk locations for burns include the head, neck, hand, feet, female breast, genitalia, perineum, major joints, and circumferential burns and should be evaluated for referral to a burn center. Partial thickness burns >10% of body surface area, chemical burns, full thickness burns, electrical burns, and burns with associated trauma have a higher risk and should also be evaluated for a burn center. Deep partial thickness (second degree) are painful to pressure only, appear waxy or wet, and do not blanch with pressure. They typically heal within two months. \nDP 2: Limited partial thickness (second degree) burns present with red, painful skin that may weep and blisters within 24 hours. These burns typically heal within 3 weeks but require additional management due to risk of secondary infection. Secondary infection (for example, warmth, thick discharge, smell, increasing redness) is a potential complication that should be referred to the AEM. Sunburn of greater than 25% of the Soldier's body surface area or symptoms of exhaustion should be evaluated for a heat injury.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J14Questions;
