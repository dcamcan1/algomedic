const C2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nVomiting Blood or Coffee Grinds, Melena \nSevere abdominal pain \nSignificant weight loss",
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
      "Do any of the following apply to the Soldier: \nRecent hospital stay \nRecent antibiotics \nBloody diarrhea \nHistory of inflammatory bowel disease",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \n>6 unformed stools in 24 hours \nHypovolemia \nSymptoms >2 days",
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
      "Treatment Protocol: \nMinor-Care Protocol for Diarrhea: Start a clear liquid diet (broth, fruit juice, sports drink, caffeine free soda) for 24 hours. Advance to a BRAT (banana, rice, apple sauce, toast) diet of simple carbohydrates next. Watch for signs of dehydration. Pepto-Bismol (1st line) may be given to the Soldier for the symptomatic control of diarrhea. Discuss with the supervising provider if antibiotics are required when considering to use Imodium (2nd line). Frequent hand washing should be used after using the bathroom and before eating. Food workers must not handle food till after symptoms have resolved. Advise the Soldier to return for medical assistance if the symptoms last more than one week, if symptoms worsen, or if he becomes dizzy and/or faints upon standing.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Food intolerance \nMedication \nInfection (Viral/Bacterial) \nDizziness \nChest Pain \nEar Pain \nHeartburn",
  },
  {
    id: "activityMod",
    activityModText:
      "No food handling, if work in a DFAC, until symptoms have resolved x 48 hours \nMust have access to a restroom within 2 minutes",
  },
  {
    id: "about",
    aboutText:
      "Acute diarrhea in adults are often infectious in nature. The largest risk is due to volume depletion secondary to fluid loss. Small intestine infections often results in large, watery bowel movements associated with cramping, bloating, and gas symptoms. Large intestine infections often results in frequent regular, small bowel movements that are painful and associated with symptoms of mucous, blood, or fever. In general, diarrhea is often self-limited. Note that treatment of the symptoms by decreasing bowel movements frequency may extend the length of the disease. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Nausea/ vomiting blood or coffee grinds and melena can be signs of an intestinal bleeding. Melena is a tar like stool with a very pungent odor resulting from the digestion of blood. \nDP 1. Recent hospitalization and antibiotic use are risk factors for a clostridium difficile infection. Clostridium difficile infections often present with a strong odor and bloody diarrhea and can result in life threatening infections. Bloody diarrhea that is not just on the toilet paper from repetitive irritation or from a gastrointestinal bleed is likely the result of an invasive infection. Visibly bloody diarrhea could also be from inflammatory bowel disease or ischemic colitis. Severe abdominal pain as Soldier appearing in discomfort/distress including moaning, crying, bending over, trouble moving or pain rating of 8+/10. \nDP 2. Severe or persistent symptoms may require the use of empiric antibiotics.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C2Questions;
