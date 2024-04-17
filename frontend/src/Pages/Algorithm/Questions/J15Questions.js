const J15Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nFever \nMalaise \nEpidermal Sloughing",
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
      "Do any of the following apply to the Soldier: \nFlu-like symptoms \nPainful erythematous macules \nExposure to new medications",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nLarge, open blister \nErythema \nOther signs of infection",
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
      "Treatment Protocol: \nMinor-Care Protocol for blister on the foot. Wash area with antibacterial soap. Cover a large area of surrounding undamaged skin and the treated blister with a protective dressing of moleskin with a hole in the middle cut out for the blister. An adhesive solution such as tincture of benzoin or a surgical adhesive to the skin around the blister to improve the adhesion of the moleskin. Have the Soldier return to the clinic after the blister ruptures. \nMCP for ruptured blisters on the feet. Clean the skin with Betadine. Remove the dead skin with sterile scissors. If sterile instruments are not available or personnel have not been taught to perform the procedure, skip this step. Wash area with Betadine and apply an antibacterial ointment to the blister only. Cover a large area of surrounding undamaged skin and the treated blister with a protective dressing of moleskin between treatments. An adhesive solution such as tincture of benzoin may be applied to the skin around the blister to improve the adhesion of the moleskin. Reevaluate the Soldier every 24 hours. \nInstruct the Soldier to wear two pairs of socks when wearing combat boots (for example, a thin pair of nonabsorbent, non-cotton socks under the boot socks) and to check for proper fit of boots. \nInstruct the Soldier to return for further evaluation if: the protective dressing begins to come off, develops blisters that make wearing shoes or boots difficult, significant pain, or signs of infection develop.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Corn \nStephen Johnson Syndrome \nStaphylococcal Scalded Skin Syndrome",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, rucking, or jumping \nWalk at own pace/distance",
  },
  {
    id: "about",
    aboutText:
      "Friction blisters are common and should be treated to prevent complications. \nDP 1. Serious skin conditions can present with blisters. Fever, malaise, and epidermal sloughing are signs of a more serious medical condition. \nDP 2. Large open and infected blisters can become serious health hazards and should be referred to the AEM for further evaluation and treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J15Questions;
