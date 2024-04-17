const J13Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAirway Swelling \nWheezing \nAnaphylaxis",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Provide emergency stabilization (oxygen, IVF, airway management, epinephrine auto-injector) prior to transport if necessary. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nBlistering \nOral involvement \nPetechiae \nFever",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nNo new medication within 2 weeks \nItchy rash with other symptoms",
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
      "Treatment Protocol: \nMinor-Care Protocol for hives (urticarial). Caused by the release of histamine from mast cells often related to an allergic reaction and present with circumscribed, raised, red rash with central pallor that moves around. Treatment is avoidance of the irritating substance, if it can be identified. Benadryl at bedtime can help with the symptoms and allow the Soldier to sleep. Provide up to a three day course of the medication. \nMCP for irritant contact dermatitis. Presents with burning, redness, and may progress to fissures of the skin. Treatment is with avoidance of the irritating substance. Skin lotion to help the skin retain moisture and heal. Hydrocortisone ointment PRN inflammation. \nMCP for allergic contact dermatitis. Presents with red, itchy well demarcated area with vesicles, bumps, or scaly skin. Treatment is with avoidance of the irritating substance. Hydrocortisone cream or Burrow’s solution compresses can help with the irritation and itching.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Hives \nContact Dermatitis \nViral Exanthem \nDrug Rash",
  },
  {
    id: "activityMod",
    activityModText:
      "Avoidance of offending agent \nUse latex free gloves or moisturizing soap",
  },
  {
    id: "about",
    aboutText:
      "Drugs can cause an acute rash of small red spots over the entire body in individuals who are sensitivity to them, like antibiotics or sulfonamides. Contact dermatitis results when the skin comes in contact with anything in the environment that causes an inflammatory reaction, like shoe materials, watchbands, earrings, and poison ivy. Contact area can present with burning, itching, redness, and fissures or vesicles. Poison ivy is the most common example of this group and related to an oil in the plant’s leaves. Symptoms usually develop within 24 to 48 hours of contact. \nDP 1: An allergic reaction can include swelling within the airway, wheezing and breathing problems, to anaphylaxis. Immediate stabilization and treatment is required. Blistering over the body and oral involvement are signs of a more serious drug reaction. Petechial rash and fever are signs of vasculitis (palpable purpura). \nDP 2: If the Soldier has not started a medication within the last two weeks, then the rash may not be from a medication. Further evaluation by the AEM is required. Itchy rash (likely hives) with other symptoms needs to be seen by the AEM for evaluation of a more serious reaction.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J13Questions;
