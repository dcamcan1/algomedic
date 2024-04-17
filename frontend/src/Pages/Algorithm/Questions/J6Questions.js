const J6Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nHistory of Diabetes \nSignificant erosions/ulcerations or malodor in affected area \nWeakened immune systems",
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
      "Do any of the following apply to the Soldier: \nRash with no improvement or response to medicaiton \nBlisters and ulcers",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for athlete’s foot. This type of fungal infection requires keratin for growth, which restricts the infection to the superficial skin, hair, and nails. Interdigital tinea pedis, hyperkeratotic (moccasin-type) tinea pedis and vesiculobullous (inflammatory) tinea pedis are the 3 major categories of tinea pedis infections. \nOTC medication: topical antifungal therapy can used to cure a fungal infection which has no secondary infection. Antifungal cream is applied twice a day for one week. Instruct the Soldier to return to the clinic if the fungal infection does not respond to OTC medications, symptoms worsens, new symptoms develop. Prevention measures: Athlete's foot can be spread through direct and indirect contact. Direct, skin-to-skin contact, occurs when an uninfected person touches the infected area of somebody with athlete's foot while indirect contact, is when the fungi can infect people via contaminated surfaces, clothing, socks, shoes, bed sheets, and towels. Instruct Soldier to keep his or her feet clean and dry, change socks regularly, wear well ventilated shoes and provide feet protection in public places. Use antifungal powder daily, alternate shoes and do not share shoes.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Interdigital Tinea Pedis \nHyperkeratotic (Moccasin-Type) Tinea Pedis \nVesiculobullous (Inflammatory) Tinea Pedis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Tinea pedis (athlete's foot) most commonly occurs with frequently wearing damp socks and/or tight fitting shoes. It is contagious and can be spread by contact with an infected person or contaminated surface. \nDP 1. Peeling, cracking, redness, blisters, and breakdown of the skin with itching and burning are characteristics of both dry skin and athlete’s foot. If untreated, the fungal infection can lead to a severe secondary bacterial infection. \nDP 2. Some fungal infections are unresponsive to topical medications and a systemic antifungal treatment is required. Ulcers increase the risk of a secondary bacterial infection.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J6Questions;
