const J7Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nDiabetes \nImmunodeficiency",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Perform potatssium hydroxide (KOH) examination. Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nItchy, red rash in the groin area \nNo improvement in 2 weeks \nRecurring infection",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Perform potatssium hydroxide (KOH) examination. \nRefer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for jock itch. Tinea cruris is far more common in men than women. Predisposing factors include copious sweating, obesity, diabetes, and immunodeficiency. \nOTC medication. Topical antifungal medication twice a day for two weeks. Instruct Soldier to keep groin area clean and dry and return to clinic if symptoms worsens, new symptoms develop, symptoms not improving within two weeks, or if the infection returns within a few weeks after using OTC Medications.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Inverse Psoriasis \nErythrasma \nSeborrheic Dermatitis \nCandidal Intertrigo",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Tinea cruris (also known as jock itch) is a dermatophyte infection involving the crural (superior medial portion of the thigh) fold. The spreading of tinea pedis is often the cause for these infections. Infection may spread to the perineum and perianal areas, into the gluteal cleft, or onto the buttocks. \nDP 1. Diabetes can affect every part of the body, including the skin. Soldiers with diabetes are more susceptible to skin conditions such as bacterial infections and fungal infections. Although common infections can be self-treated, the Soldier should see a privileged provider to rule out other more serious diabetic related skin conditions. \nDP 2. Some infections and rashes do not respond well to OTC medications and infections may not get better or may reoccur within a few weeks. These Soldiers need to be evaluated to rule out more serious skin conditions. A normal infection may respond better to a prescription strength antifungal.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J7Questions;
