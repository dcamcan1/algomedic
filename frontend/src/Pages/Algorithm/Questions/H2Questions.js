const H2Questions = [
  {
    id: 0,
    questionText:
      "Perform Visual Eye Exam \nDoes the Soldier have any of the following red flags? \nOpen Globe \nHigh Risk Laceration \nDecreased Visual Acuity \nDouble Vision",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Apply fox shield/protective cover. \nFor head trauma: stabilize neck. \nImmediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nFixed pupil \nModerate to severe pain",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSignificant redness or swelling \nRash >1 week",
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
      "Treatment Protocol: \nMinor-Care Protocol for stye: Presents with redness, tenderness, and swelling of the eyelid. Initial treatment should be a warm compress placed on the area for 15 min four times per day with massage of the area after the warm compress. Return to clinic if becomes significantly painful, redness and swelling spreads, or not improving within one week. \nMCP for chalazion: Presents with painless swelling of the eyelid. It is treated the same way as a stye and usually resolves within a couple of weeks. \nMCP for blepharitis: Presents with bilateral crusting of the eye in the morning and may be associated with red, swollen eyelids, and dry eyes that improve with blinking. Treatment is washing of the eyelashes daily with washcloth using warm water and non-tearing baby shampoo, warm compresses, lid massage. Instruct to avoid lotions, creams, make-up to the affected area. RTC if worsening or not improving within one week. \nMCP for contact dermatitis: Skin reaction from an irritant. In a female, make-up is the most common cause. Evaluate for any new exposures, other areas involved. Instruct to avoid the most likely contact/cause and any lotions, creams, or soaps with perfumes, hair dyes, new shampoos, and eye make-up. Use hydrocortisone cream with precautions to avoid getting it in the eye.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Stye \nBlepharitis \nAllergies \nDermatitis \nInfection \nEyelid Laceration",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Eyelid problems include serious effects of trauma to simple conditions of inflammation. \nDP 1. Assess for life-threatening injuries (head, neck, airway) before performing an eye exam with visual acuity. Access for signs of an open globe. Laceration of full thickness of eyelid, with orbital fat prolapse, through lid margin, involving lateral/medial/tear duct/or muscles, or associate with avulsion or malalignment requires referral. Decreased visual acuity and double vision along with pain, fixed pupil, and swelling around the eye are signs of a potential internal eye injury. Orbital compartment syndrome can develop which is a medical emergency requiring immediate treatment. \nDP 2. Significant redness and swelling can be signs of cellulitis. Cellulitis is a relatively common complication of a stye. It requires further evaluation and treatment with oral antibiotics. Dermatitis and some systemic diseases can also present with an eyelid rash requiring further evaluation and treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default H2Questions;
