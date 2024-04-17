const H4Questions = [
  {
    id: 0,
    questionText:
      "Perform Visual Acuity Exam \nDoes the Soldier have any of the following red flags? \nTrauma \nNeurological Deficits",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "For head trauma: stabilize neck. \nDisposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nRed eye \nAssociated pain",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nAppears intoxicated \n1 eye is shut",
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
      "Treatment Protocol: \nMinor-Care Protocol for seeing double: A long-standing history of double vision or double vision caused by new eyeglasses may well indicate a need for evaluation of the eyeglass prescription. The Soldier should be given an appointment at the optometry clinic. Soldier should not drive a vehicle, fire a weapon, or perform other duties requiring depth perception.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Intoxication \nPrescription Eyeglasses \nMuscle Weakness \nTrauma",
  },
  {
    id: "activityMod",
    activityModText:
      "No Driving \nNo Firing Weapon \nNo Duties Requiring Depth Perception",
  },
  {
    id: "about",
    aboutText:
      "Double vision means seeing two images of a single object. \nDP 1. Assess for potential life-threatening injuries (head, neck, and airway) before accessing for vision issues. If the double vision is related to a recent trauma to the head, neck, or back, then it may represent a serious injury to the brain. Neurologic deficits (trouble walking, talking) can indicate a serious problem requiring immediate evaluation. \nDP 2. Cover one of the Soldier’s eyes and then the other, assessing whether the double vision persists or not. If double vision continues despite having one eye shut or if double vision is a new issue, the Soldier will need to be referred to an eye care provider (ophthalmologist or optometrist).",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default H4Questions;
