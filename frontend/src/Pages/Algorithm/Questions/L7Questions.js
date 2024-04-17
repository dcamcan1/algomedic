const L7Questions = [
  {
    id: 0,
    questionText:
      "Perform lymph node exam. \nDo any of the following apply to the Soldier: \nLymph nodes in multiple body areas \nUnexplained weight loss \nSupraclavicular \nPosterior Cervical \nNot mobile \nNot soft \nNo recent infection",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Immediately disposition Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText: "Screen for symptoms, as applicable.",
    choices: [
      { answerText: "Cold Symptoms Screening" },
      { answerText: "Headache Screening" },
      { answerText: "None Apply" },
    ],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Not applicable",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Enlarged lymph nodes are most commonly found in the neck, armpits, and groin and are locations where the body fights infection. A lymph node enlargement may result from an infection/inflammation in the area of the body drained by the node or from a systemic illness. In the former case, the enlarged nodes are likely to be confined to that area. In the latter case, lymph nodes in several areas of the body may be involved. \nDP 1: Unexplained weight loss and enlarged nodes in multiple body areas may represent a systemic illness. Supraclavicular and posterior cervical may represent a more concerning illness. Non-mobile and hard or rubbery nodes may represent nodal fibrosis. Lack a recent infection (within two weeks) or inflammation in the area of the lymph node to cause the lymph node to enlarge requires further evaluation by the supervising privileged provider. \nDP 2: Lymph nodes that are associated with an infection or inflammation should be screened according to the infection or inflammation symptoms.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L7Questions;
