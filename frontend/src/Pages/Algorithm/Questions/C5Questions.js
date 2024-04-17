const C5Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nDiarrhea at night \nIron-deficiency anemia \nVomiting",
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
      "Do any of the following apply to the Soldier: \nWeight change \nFatigue \nTemperature sensitivity \nDepression",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText: "Does the Soldier have rectal bleeding?",
    choices: [
      { answerText: "Yes", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText: "Screen for rectal bleeding.",
    choices: [{ answerText: "Rectal Bleeding Screening" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for constipation: The most important step in treating constipation is to alter the diet so that it contains plenty of fiber. Fiber is that part of food which is not absorbed into the body but instead remains in the intestines and absorbs water to form the bulk of the bowel movements. Without proper bulk, the large and small intestines cannot work properly, and this causes constipation. Fiber is present in bran cereal, whole wheat bread, fresh fruits, and vegetables. Ensure that the Soldier is taking adequate water (8 glasses a day). \nLaxatives can be used on a one-time basis but should not be used repeatedly because the body can become dependent on them. After the bisacodyl, use polyethylene glycol for two weeks (1st line) or docusate sodium for one week (2nd line) to prevent recurrence. Not everyone has a bowel movement every day. Bowel movements may occur as often as three times a day or once every three days and still be normal. Discomfort and a change in pattern are more reliable guides to a diagnosis of constipation. Instruct the Soldier to return for medical assistance if abdominal pain develops, if the interval between movements is three days or longer, or if blood appears in his or her stool.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Food intolerance \nObstruction \nCancer \nHypothyroidism \nConstipation \nAssociated with Hemorrhoids",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Constipation means infrequent or difficult bowel movements. Soldiers use the word to mean many things—painful defecation, narrowing of the stools, or not having a “regular daily” bowel movement. Normal bowel habits differ from Soldier to Soldier; therefore, a wide variation exists in what Soldiers consider to be normal or to be a problem. \nBecause constipation and hemorrhoids commonly occur together, rectal bleeding may be falsely attributed to these causes. This can be a dangerous mistake. Rectal bleeding must be screened as a separate problem. Constipation not associated with rectal bleeding may be appropriately treated through minor-care. \nDP 1. These are symptoms of hypothyroidism. Soldiers that screen positive for possible hypothyroidism should be referred for further evaluation. \nDP 2. Rectal bleeding can be a sign of significant internal bleeding that requires further evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C5Questions;
