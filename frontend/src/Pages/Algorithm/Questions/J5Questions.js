const J5Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nNew medication \nLacks hair follicles \nSmooth, circular hair loss",
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
      "Do any of the following apply to the Soldier: \nTinea capitis \nPapules or pustules \nErythema",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
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
      "Treatment Protocol: \nMinor-Care Protocol for traction hair loss: Hair loss associated with traction being applied to hair for an extended period of time from tight hair styles often over the frontal and temporal areas. It is associated with traction folliculitis which includes erythema, papules, and sterile pustules. Instruct Soldier to avoid tight hair styles, chemical straighteners, and heating the hair follicle (for example, curling iron, straight iron) until it has resolved. Refer to AEM if signs of inflammation are present to evaluate for treatment with a high potency topical steroid or intra-lesion steroid inject. \nMCP for male/female pattern hair loss: Male pattern hair loss often occurs after age 30 with hair loss over the frontal, temporal, and top of the head. On examination, hair follicles with a decreased caliber will be seen. Female pattern hair loss occurs over the front and top of the head. It most often occurs after menopause. Instruct the Soldier on the diagnosis. \nRefer to AEM if does not meet either of the above patterns. Return to clinic if symptoms worsen or new symptoms develop.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Alopecia \nTraction Hair Loss \nAlopecia Areata \nTinea Capitis \nAcne Keloidalis Nuchae",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "While most hair loss is natural and hereditary, any hair loss that is sudden or extreme in nature may have resulted from a fungal infection or other forms of illness or as a result of using certain medications. When treated promptly and properly, hair growth typically resumes. \nDP 1: Examples of medications that can result in hair loss are propranolol, ketoconazole, isotretinoin, colchicine, and cholesterol medications. If hair follicules are not present on exam, then scarring hair loss is more likely requiring a referral to dermatology. Alopecia areata is described as smooth, circular discrete hair loss that occurs over a couple of weeks. Refer to a privileged provider for consideration of intra-lesion steroid injections. \nDP 2: Tinea capitis is a fungal infection of the scalp that presents with itching, scaling, and hair loss. It is common in kids but can occur in adults. Treatment is with an oral antifungal. Papules, pustules, and erythema are signs of inflammation which require further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J5Questions;
