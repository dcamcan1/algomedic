const J2Questions = [
  {
    id: 0,
    questionText:
      "Check hCG, if applicable. \nDo any of the following apply to the Soldier: \nRequesting birth control \nPositive hCG \nHyperandrogenism signs \nDraining lesion \nAcute onset \nRequiring limitations in protective equipment",
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
      "Do any of the following apply to the Soldier: \nAcne interferes with wearing equipment \nModerate to severe inflammatory acne \nScarring or hyperpigmentation \nFailed intial treatment \nAppears very self-conscious",
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
      "Treatment Protocol: \nMinor-Care Protocol for acne. All Soldiers with acne should be instructed to wash the affected area with mild soap and water without scrubbing twice a day and pat dry. Avoid creams and lotions to the area. \nNon-inflammatory acne with closed comedones (white heads) or open comedones (black heads) can be treated with a topical retinoid. Retinoids should not be prescribed during pregnancy or if have fish allergy. Instruct Soldier to apply a pea sized amount of medication to a dry face at night. Treat the whole area (don’t spot treat) due to its preventative effect on acne. Don’t combine use with harsh soaps or other acne treatments. If skin irritation occurs, decrease use to every other night. \nMild to moderate inflammatory acne with papules can be treated with the addition of topical benzoyl peroxide with an antibiotic in the morning. Benzoyl peroxide should not be applied at the same time as a retinoid due to decreasing the retinoid’s effectiveness. \nInstruct to return to clinic if not improving within two weeks, getting worse, or side-effects from the medications are occurring.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Acne Vulgaris \nPseudofolliculitis Barbae \nFolliculitis \nAcne Rosacea \nHyperandrogenism",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Acne is caused by plugged oil glands. The oily material may form a ‘whitehead” or develop a dark colored “blackhead” when exposed to the air. Pimples develop when these plugged glands become inflamed and bacteria begin breaking down the oil-producing irritating substances as by-products. Acne is a common condition occurring primarily in the late teens and early twenties. Acne may be extremely upsetting to the young Soldier. The seriousness of this condition or its importance to the Soldier must not be underestimated. With proper treatment, acne can be improved thus avoiding scarring. \nDP 1: Birth control and a positive hCG requires additional counseling that should be provided by the supervising privileged provider. Hyperandrogenism requires additional evaluation. Draining lesions requires more aggressive therapy. Acute onset of acne symptoms for the first time after age 18 requires further evaluation. \nDP 2: Moderate to severe acne or acne on the back or interferes with wearing equipment requires evaluation for oral medications and temporary profile. Scarring and hyperpigmentation requires more aggressive therapy to avoid further permanent scarring. There can be psychological effects from acne. It is important to identify Soldiers that are very self-conscious and escalating the treatment regimen to quickly control the acne.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J2Questions;
