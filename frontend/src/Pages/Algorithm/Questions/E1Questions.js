const E1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nSystemic Inflammatory Response Syndrome \nFlank Pain \nSevere Abdominal Pain \nGross Hematuria or Passing Blood Clots",
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
      "Perform pregnancy test, if appropriate. \nDo any of the following apply to the Soldier: \nFever >100.4F \nHistory of diabetes \nNausea and vomiting \nVaginal symptoms \nVulvar ulcer \nPain with intercourse \nCola-colored urine",
    choices: [
      {
        answerText:
          "Yes to Any: Perform urinalysis and urine culture, if possible.",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nMale \nHistory of kidney stones \nPregnant \n3+ UTIs in 12 months \nRecent urinary catheter \nRed urine, not menstrual cycle-related",
    choices: [
      {
        answerText:
          "Yes to Any: Perform urinalysis and urine culture, if possible.",
        nextScenario: 4,
      },
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
      "Treatment Protocol: \nMinor-Care Protocol for UTI. Instruct the Soldier about the importance of increasing fluid intake to flush out the bacteria. OTC medication: phenazopyridine as needed for pain. Instruct the Soldier that it will likely dye his or her urine orange. It may also stain contact lenses from transferring the dye from the fingers to the contacts, if worn. Antibiotics: Trimethoprim/ Sulfamethoxazole is the first line agent. Nitrofurantoin is the second line agent if the Soldier is allergic to sulfa drugs or there is local resistance to the first line agent. Return to clinic if symptoms are not improving within 24 hours, development of new symptoms, or worsening symptoms despite treatment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Kidney Infection \nUTI \nKidney Stone \nUncontrolled Diabetes \nBenign Prostatic Hypertrophy (BPH) \nSTI \nVaginitis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Painful urination is most commonly a sign of a urinary tract infection, kidney stone, sexually transmitted infection, or yeast infection. Frequent urination can be associated with these but can also be one of the initial signs of hyperglycemia from diabetes. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1. Urinary tract infections can get worse if not promptly treated. Urinary tract infection can progress to a kidney infection and then a systemic infection through the blood. Uncontrolled diabetes can present with increased urination and nausea with vomiting. Complaints requiring an invasive exam are referred to the supervising privileged provider. \nDP 2. Urinary complaints in a male are more likely to be something other than a urinary tract infection. Recurrent urinary tract infections (UTIs), recent urinary catheterization, and immunocompromised are more likely to have an atypical bacterial infection.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default E1Questions;
