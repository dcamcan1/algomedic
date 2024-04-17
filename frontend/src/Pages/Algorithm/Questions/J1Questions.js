const J1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAirway Compromise \nAirway Swelling",
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
      "Do any of the following apply to the Soldier: \nNew medication \nFever \nPainful skin (not sunburn) \nFailed previous treatment or worsening condition",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nChange in skin color \nOozing blood or fluid \nPresent >4 weeks",
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
      "Treatment Protocol: \nMinor-Care Protocol for unidentified skin disorder. If the Soldier is already on a treatment for this issue, has not finished the current treatment, and the issue is not getting worse, then instruct the Soldier to continue with the current treatment for the full course. Some skin issues can take two to three weeks or potentially longer for them to work. Confirm with your supervising NCO or supervising privileged provider before returning the Soldier to work. If you recognize the skin lesion, then screen according to the identified skin condition. If you do not recognize the skin lesion, refer the Soldier to the AEM for further evaluation.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Eczema \nHives \nContact Dermatitis \nAthlete's Foot \nHeat Rash \nDrug Reaction",
  },
  {
    id: "activityMod",
    activityModText: "Keep area clean and dry",
  },
  {
    id: "about",
    aboutText:
      "If the cause of the condition is unknown to the Soldier, this first protocol provides the category/ level of care indicated by the Soldier's symptoms. \nDP 1: Skin rash associated with a medication, fever, or is painful (but not due to a sunburn) has the potential to be very serious. Further evaluation is indicated when it has failed previous treatment or is worsening. Certain anatomical locations present with a higher risk of complications to include the face, genitals area, or inhibiting a joint function. \nDP 2: Change in a lesion or oozing of fluids require further evaluation. Skin lesions that have been present for over 4 weeks may represent a symptom of a systemic condition.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J1Questions;
