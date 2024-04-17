const H1Questions = [
  {
    id: 0,
    questionText:
      "Perform Eye Exam (with Fluorescein, unless there is concern for open globe or ruptured eye). \nDoes the Soldier have any of the following red flags? \nFixed/Abnormal Pupil(s) \nVisual Acuity Change \nObserved Foreign Body \nPenetration/Rupture \nChemical Exposure \nFluid Level Over Iris/Pupil",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "For chemical exposure: irrigate eye(s). \nFor foreign body: fox shield. \nFor head trauma: stabilize neck. \nOther: cover eye(s). \nImmediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nContact lens wearer \nFluorescein uptake \nRecent eye surgery \nAssociated head trauma \nDouble vision",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nThick, yellow, or green discharge \nEye pain \nLight sensitivity \nInability to keep eye open \nTrauma \nHistory of foreign body getting better",
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
      "Treatment Protocol: \nMinor-Care Protocol for blepharitis (crusting of the eye in the morning with or without red, swollen eyelids): Treatment is washing of the eyelashes daily with washcloth using warm water and non-tearing baby shampoo, warm compresses, lid massage. Instruct to avoid lotions, creams, make-up to the affected area. RTC if worsening or not improving within one week. \nMCP for dry eyes (tearing, blurry vision that clears with blinking, and a gritty sensation): Treatment is artificial tears as needed (prn). \nMCP for viral, allergic conjunctivitis (crusting, watery discharge with burning (viral) or itching (allergic)): Viral is highly contagious. Treatment is with warm or cool compresses and topical antihistamine/decongestant drops. \nMCP for subconjunctival hemorrhage. Further evaluation is necessary when associated with trauma, is recurrent, or Soldier is on an anticoagulant.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Blepharitis \nAllergies \nConjunctivitis \nCorneal Abrasion/Trauma \nSubconjunctival Hemorrhage \nKeratitis/Iritis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Eye pain, redness, discharge, itching, and injury includes trauma to common inflammatory and infectious conditions. \nDP 1. Perform an eye exam with visual acuity. Do not perform a fluorescein exam if concerned for an open globe. Cover the eye with an unpadded protective fox shield or cup and discuss with the supervising privileged provider if a potential foreign body. A privileged provider order is required to irrigate the eye except when immediate irrigation is required for a chemical exposure. A white or red layered fluid level over the iris is a sign of a hypopyon or hyphema, respectively, requiring emergent referral. Contact lens, recent eye surgery, and fluorescein uptake increase potential of a serious condition. \nDP 2. Thick, yellow or green discharge that continues throughout the day suggests bacterial conjunctivitis. Eye pain, light sensitivity, inability to open or keep the eye open, and foreign body sensation suggests a corneal or intraocular inflammatory process. Fast moving metal or glass slivers from an explosion or welding can penetrate the eye with symptoms that rapidly disappear. A history of a foreign body that is now “getting better” should be screened as a foreign body.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default H1Questions;
