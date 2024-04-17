const K7Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nSwelling of Lips or Tongue \nTrouble Breathing \nAbnormal Vital Signs",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Use epi pen if indicated. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nWheezing \nShortness of breath \nHives \nHistory of allergic reactions \nPoisonous insect",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nNo signs of bite \nBlister, ulcer, pain",
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
      "Treatment Protocol: \nMinor-Care Protocol for Insect Bite. Remove any stinger, head of tick, or other biting apparatus left at the bite site. Clean with betadine solution. \nApply Calamine lotion or hydrocortisone 1% cream four times per day as needed for itching. Apply cold compress or ice pack as needed for swelling. \nReturn to clinic if symptoms worsen, new symptoms develop, or symptoms are not improving within 48 hours.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Insect Bite \nSkin Infection \nContact Dermatitis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Insect bites are characterized by itching, local swelling, mild pain, and redness. All of these reactions represent a local reaction to the sting of the insect. Document any history of tick bites and include the location of the bite. \nDP 1: red flags, hives, or history of severe reaction from similar insect bite (such as, bee sting allergy), have Soldier inject epinephrine pen if indicated (signs of respiratory or circulatory compromise) and refer to a privileged provider immediately. Reported poisonous insect bite (brown recluse, black widow, etc.) should also be immediately referred. \nDP 2: If no signs of an insect bite can be seen, a blister or ulcer is present, or there is moderate to severe pain, refer to the AEM for further evaluation because it may be something other than an insect bite.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K7Questions;
