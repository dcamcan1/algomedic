const J9Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nLocation over Tailbone \nSIR Criteria 2+ \nWorsening on Antibiotics \nLocated on Palm of Hand \n Located over Joint \nBlack Eschar",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "If provider requests it, prepare informed consent, timeout, and I&D set-up. Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nFever \nRapid progression \nCellulitis \nIndwelling medical device",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nFluctuant mass \nMultiple abscesses \nDrained abscess >5cm in diameter",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "If provider requests it, prepare informed consent, timeout, and I&D set-up. Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for skin infection. Prior to abscess formation, the skin normally becomes indurated from the inflammation. The skin appears to be warm, red, and tender with a hard area where the inflammation is present. Treatment is minor-care. An abscess may form within a couple of days requiring further treatment. \nApply a moist, warm compress over the area for 20 minutes every four hours. It will increase blood flow to the area, allowing the Soldier's immune system to fight the infection. Instruct the Soldier to return to the clinic after the abscess forms for drainage. Return sooner, if symptoms worsen (for example, fevers, chills, increased pain or redness, red streaks, increased swelling, or re-accumulation of pus, if it has already drained).",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Acne \nFolliculitis \nAbscess \nEpidermal Cyst \nHidradenitis Suppurativa \nSeptic Joint",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "A boil is usually caused by bacteria that enters through a hair follicle. A painful nodule enclosing a core of pus forms in the skin. Tenderness, warmth, swelling, and firm area, and pain may be present around the area of inflammation. An extremely large boil or numerous boils can produce fever. Boils are also known as furuncles if they have single cores or carbuncles if they have multiple cores. \nDP 1: Pilonidal abscesses (over the tail bone) can be much larger than they appear and should be referred to a privileged provider for evaluation. Systemic inflammatory response syndrome (SIRS) criteria, fever, black eschar, rapid progression over hours, and worsening on oral antibiotics are signs of a more significant infection that may require hospitalization. Hand infection, infection over a joint, indwelling medical device, and associated cellulitis increases the risks of serious complications. \nDP 2: An abscess should be drained to allow it to heal, and an abscess with a diameter of greater than 5 cm will need to be packed. Military population is at risk for community transmission of staphylococcus aureus and should be evaluated for the addition of antibiotic therapy.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J9Questions;
