const J10Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nEye Pain",
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
      "Do any of the following apply to the Soldier: \nBurns \nEczema \nFever \nSevere pain",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSore throat \nHand sore \nPustule, yellow crusting",
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
      "Treatment Protocol: \nMinor-Care Protocol for fever blister: Instruct Soldier on contagious nature of HSV-1, cold sores. Soldier is contagious a little all of the time. When symptomatic or cold sores are present, the Soldier is very contagious, and the virus is spread through direct contact. Instruct the Soldier to avoid sharing drinks or kissing anyone till after it has resolved. Provide docosanol (Abreva) topical ointment to be applied to the cold sore five times a day or two doses of valacyclovir (2g), 12 hours apart. Return to clinic if symptoms are worsening, new symptoms develop, or it is not improved within 10 days.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Cold Sore \nAphthous Ulcer \nEpstein-Barr Virus \nSyphilis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Fever blisters result from an acute viral infection that frequently occurs around the mouth or on the lips. Fever blisters usually occur with multiple vesicular lesions on an erythematous base. Lesions can be painful and last for 10-14 days. Initial infection can be associated with systemic symptoms, like fever and malaise. Viral infection resides in the nerve cells after the initial infection and can reoccur when the body is under stress. Re-emergence of the cold sores is often preceded by prodromal symptoms of pain, burning, tingling, or itching for 6 hours to 2.5 days. Cold sores are contagious and spread through contact. \nDP 1: HSV-1 infection can occur at any mucosal or skin site. Although rare, eye infection with HSV causes keratitis. Eczema and burns result in breaks in the skin's natural protective barrier increasing the risk of spreading the HSV infection to these areas. \nDP 2: Elevated temperature, sore throat, sores on the hand, and moderate to severe pain increase the chance of an alternative viral infection or initial infection requiring further evaluation and possible systemic antiviral therapy. Pustules and yellow, honeycomb crusting suggest a bacterial infection requiring further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J10Questions;
