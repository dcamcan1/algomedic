const J8Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nFailed previous treatment \nWidespread scaling/spots",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Perform potassium hydroxide (KOH) examination. Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nRecurrent condition \nUnidentified condition \nAtypical presentation",
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
      "Treatment Protocol: \nMinor-Care Protocol for tinea versicolor. Treat with topical terbinafine twice a day for one week. Selenium sulfide 2.5% shampoo lathered over the affected area and left for 10 minutes once a week is also effective. Instruct the Soldier that hypo/hyperpigmentation of the area may remain for months after effective treatment. If the presentation is not classic for tinea versicolor, screen according to the appropriate protocol and discuss with the AEM. Return to the clinic for worsening symptoms, new symptoms, or presence of scale in the lesions after treatment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Seborrheic Dermatitis \nTinea Corporis \nVitiligo \nSecondary Syphilis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Tinea versicolor is a common superficial fungal infection that appears as “spots” (lighter, darker, or redder than surrounding skin) on the neck, chest, back, and arms usually with no other symptoms. The rash is typically scaly and painless. It may be noticed in the summer when affected areas fail to tan after sun exposure. \nDP 1: Tinea versicolor that has failed initial therapy or is widespread may require systemic treatment. Presence of scale in the area and a positive potassium hydroxide (KOH) test confirms treatment failure requiring systemic treatment. Refer to the supervising privileged provider for counseling and evaluation for treatment. \nDP 2: Tinea versicolor often reoccurs. When this occurs, additional counseling to the Soldier is required to help prevent further occurrences. Refer to the AEM for additional counseling and preventative measures. If it is an atypical presentation that you do not recognize, refer to the AEM for further evaluation and treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J8Questions;
