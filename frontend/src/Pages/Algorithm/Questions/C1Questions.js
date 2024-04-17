const C1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nVomiting Blood or Coffee Grinds, Melena \nNeurologic Symptoms \nChest Pain \nAbdominal Pain followed by Nausea \nAbdominal Distention",
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
      "Do any of the following apply to the Soldier: \nChemotherapy \nBMI <18 \nDiabetes \nRecent head trauma within 72 hours",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSymptoms >72 hours \nSigns of fluid depletion, orhtostatic hypotension \nUnable to maintain oral intake",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      {
        answerText: "No: Perform Pregnancy Screen/Test if appropriate",
        nextScenario: 5,
      },
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
      "Does the Soldier have any of the following (that have not been screened for): \nHeadache/migraine \nHeartburn \nDizziness \nPregnancy",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 7 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText: "Screen for symptoms, as applicable.",
    choices: [
      { answerText: "Headache Screening" },
      { answerText: "Heartburn Screening" },
      { answerText: "Dizziness Screening" },
      { answerText: "Pregnancy Screening" },
    ],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for nausea/vomiting. Handwashing is important to prevent spread of disease. Due to contagion risk, activity modification is important for food handlers and multiple cases or when DFAC food is suspected must be reported to the supervising NCO due to the potential of an outbreak. Diet control is very important in treating nausea and vomiting. Ice chips should be used initially. Once vomiting is controlled, advance to clear liquids (broth, fruit juice, sports drink and caffeine free soda). Start with small sips and slowly advance. Once the Soldier has been able to tolerate liquids for 24 hours, advance to a BRAT (bread, rice, apple sauce, toast) diet of simple carbohydrates. The Soldier with severe or persistent vomiting that is unable to tolerate liquids will require IV fluids. Advise the Soldier to return for medical assistance if the symptoms last more than two days, if blood appears in his vomit or in his stools, or if he becomes dizzy and/or faints upon standing. Vomiting that is severe enough to prevent the Soldier from keeping clear liquids down for 24 hours, severe abdominal pain, or worsening symptoms are also causes for a prompt return visit.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Medication \nInfection \nIntense Pain \nPregnancy \nConcussion \nHeartburn",
  },
  {
    id: "activityMod",
    activityModText:
      "No food handling, if work in a DFAC, until symptoms have resolved x 48 hours",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Vomiting blood/coffee grinds and melena can be signs of an intestinal bleed. Neurologic symptoms can be a sign of increased intracranial pressure. Myocardial infarction can present with nausea. \nDP 1. These represent the possibility of more significant underlying medical conditions. A common side effect of chemotherapy treatment is nausea and vomiting that is sometimes difficult to control. BMI less than 18 can be a sign of an eating disorder like bulimia or another significant medical condition. Uncontrolled diabetes and gastroparesis due to diabetes can also present with nausea and vomiting. \nDP 2. These are symptoms that are related to volume depletion. Fluid depletion is a risk of significant nausea and vomiting. If a Soldier is not able to maintain fluid intake due to his or her nausea and vomiting, then short term hospitalization has to be considered until the nausea and vomiting can be controlled. Nausea and vomiting, especially in the mornings, is a common symptom in pregnancy. If a Soldier has a positive pregnancy test or symptoms of nausea during pregnancy, she will require a longer-term plan than the minor-care protocol can accommodate. \nDP 3. There are many other symptoms that can be associated with nausea and vomiting to include dizziness (vertigo), headaches (migraines) and heartburn. Reflux and regurgitation (return of gastric contents to hypopharynx with little effort) can be seen with heartburn and do not require treatment unless symptomatic.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C1Questions;
