const C6Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAirway compromise \nCoughing, choking when swallowing",
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
      "Do any of the following apply to the Soldier: \nSudden onset during eating \nInability to swallow (drooling)",
    choices: [
      {
        answerText:
          "Yes to Any: Include Glucagon if unable to transport within 24 hours of onset",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText: "Did the Soldier have a sore throat prior to the dysphagia?",
    choices: [
      { answerText: "Yes", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText: "Screen for sore throat.",
    choices: [{ answerText: "Sore Throat Screening" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Food intolerance \nFood bolus obstruction \nEsopghagitis \nRing, Web, Achalasia \nThroat Infection",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Dysphagia means difficulty or pain when swallowing. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Airway compromise is an emergency. Coughing, choking, or nasal regurgitation when initiating a swallow is a sign of decreased ability to maintain the airway. The Soldier is at risk for aspiration. \nDP 1. Most common cause of dysphagia in an adult is an acute food obstruction. It is often due to swallowing a piece of meat that has not been fully chewed. Food obstruction will present with a feeling of something stuck in the throat and decreased or inability to swallow. The obstruction must be removed promptly. Complete obstruction should undergo an emergent endoscopy. A partial obstruction should undergo endoscopy within 24 hours. The esophagus can start to ulcerate and the risk of esophageal perforation increases after 24 hours. If endoscopic evaluation/ treatment is not available within 24 hours, see the treatment protocol below. \nDP 2. Other causes of dysphagia not related to a sore throat should be evaluated by the AEM. \nDP 3. Dysphagia frequently accompanies a severe sore throat. However, MAKE CERTAIN that dysphagia did not precede the sore throat. Causes of dysphagia not associated with a sore throat may require a more extensive evaluation.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C6Questions;
