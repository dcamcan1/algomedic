const J16Questions = [
  {
    id: 0,
    questionText:
      "Perform a foot exam. \nDo any of the following apply to the Soldier: \nDiabetes Mellitus \nDecreased peripheral sensation to light touch Lesion freely bleeds with paring",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nPlantar wart \nCondition interferes with normal duty \nBunion \nMallet or hammer toe \nDecreased toe motion",
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
      "Treatment Protocol: \nMinor-Care Protocol for corns on feet. Soak the Soldier's foot in warm water for 20 minutes. Paring down a callous/corn: The performing medic must have training in the procedure and have the training documented. After the risks and benefits of the procedure have been explained to the Soldier, Soldier has signed the consent form, and a final timeout has been performed, pare down the callous or corn with a scalpel blade. Reduce the hard skin until the lesion is flexible or the Soldier can stand/bear weight without discomfort. Do not remove skin to the point of bleeding. \nInstruct the Soldier on weekly self-debridement. Minor-care can be given using a pumice stone. Refer to AEM if special insole is needed to be constructed for the Soldier’s shoe. Instruct the Soldier to return if the symptoms are worsening, new symptoms develop, or the minor-care protocol does not resolve the symptoms.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Callus \nPlantar Wart \nCorn \nBunion",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, rucking, or jumping \nWalk at own pace/distance",
  },
  {
    id: "about",
    aboutText:
      "A callus is a thickened outermost layer of skin from repeated friction or pressure. A corn has a centralized hyperkeratotic area that is often painful on the sole of the foot or toe. Tenderness occurs especially during weight-bearing on the foot. \nDP 1: No red flags. Diabetes mellitus or a decreased peripheral sensation increases the risk to the Soldier with a peripheral wound; so evaluation and treatment of a corn should be referred to a privileged provider. \nDP 2: Plantar warts requires additional treatment. Warts disrupt the normal skin markings so skin lines are not evident and have several dark specks within middle of the wart. One treatment option is using liquid nitrogen to freeze the wart in the clinic. An order from a privileged provider is required prior to treating with liquid nitrogen. Bunions are located on the medial side of the base of the first metacarpal with the big toe deviated inward. Bunions may need to be referred to podiatry.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J16Questions;
