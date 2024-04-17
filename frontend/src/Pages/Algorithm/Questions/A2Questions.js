const A2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nStiff Neck AND Fever \nPosterior Ear Pain \nMastoid Erythema",
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
      "Do any of the following apply to the Soldier: \nSevere Ear Pain \nEar drainage",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Perform Otoscope Exam. \nDo any of the following apply to the Soldier: \nTM redness, opacification, bulging, immobility, or rupture \nEar Canal red, swollen, or tender",
    choices: [
      {
        answerText:
          "Yes to Any (Indicates suspicion for Otitis Media or Moderate to Severe Otitis Externa)",
        nextScenario: 1,
      },
      { answerText: "No, or only mild Ear Canal redness", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "Do any of the following apply to the Soldier: \nVertigo \nGoing on for >7 days \nDecreased hearing \nForeign body in ear \nVisual trauma to ear",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 5,
    questionText: "Does the Soldier have cold symptoms or sore throat present?",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 7 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText: "Screen for cold symptoms or sore throat, as applicable.",
    choices: [
      { answerText: "Cold Symptoms Screening" },
      { answerText: "Sore Throat Screening" },
    ],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMild otitis externa, temporal-mandibular joint (TMJ) dysfunction, and ear pain with normal exam should be treated with minor-care.\nMinor-Care Protocol for otitis externa: Soak wick of a cotton ball wick with OTC ear drops. Place in the ear for 24 hours while using the drops. Remove the cotton wick and continue drops for 1 week (3 days after the symptoms have resolved). Keep the ear canal dry. Use OTC ibuprofen as needed for pain. Return to clinic if not resolved in 1 week or worsening symptoms to include pain or fever. \nMinor-Care Protocol for TMJ - another common cause of pain around the ear: Evaluation includes seeing if the pain increases with opening and closing the jaw while placing the finger on the anterior inside of the ear to feel the joint.Ensure pain is not related to the heart. \nUse OTC ibuprofen for inflammation and pain. Refer to dental if history of teeth grinding. Instruct on avoidance of triggers (excessive chewing, chewing gum). Home therapy is jaw isometric exercises: jaw is open 1 inch and jaw is pushed 1) down against a loosely fisted hand and 2) forward against a hand for 5 seconds each, each set is repeated 5 times per session with 3 sessions per day. Return if not improving within three days.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 8,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Otitis Media/Externa \nEustachian tube dysfunction \nNasopharyngeal pathology \nDeep space head/neck infections \nMeningitis \nMastoiditis \nRuptured ear drum \nTMJ Dysfunction",
  },
  {
    id: "activityMod",
    activityModText:
      "Otitis Externa: Avoidance of situations requiring utilization of ear plugs, no swimming \nEustachian Tube Dysfunction: No scuba diving",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” A stiff neck and fever are signs of meningitis, and all Soldiers with signs of meningitis should be seen by a privileged provider as soon as possible. Mastoid symptoms can be a sign of mastoiditis. \nDP1. Signs of infection. All Soldiers with otitis media or moderate to severe otitis externa should be evaluated by a privileged provider to be considered for antibiotics. \nDP2. Vertigo requires an internal ear evaluation. Longer timeline and decreased hearing can be signs of a complication from an ear infection or alternate cause requiring a qualified provider evaluation. \nDP3. Evaluate for cold symptoms and sore throat that can be associated with ear pain with their respective protocols.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default A2Questions;
