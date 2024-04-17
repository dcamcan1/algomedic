const E4Questions = [
  {
    id: 0,
    questionText:
      "Perform pregnancy test (if appropriate) and urinalysis (UA). \nDoes the Soldier have any of the following red flags? \nInability to void x12 hours \nFever \nCola-Colored Urine \nBlood or Clots in Urine",
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
      "Do any of the following apply to the Soldier: \nVaginal symptoms \nPost-void dribbling \nWeak stream \nDifficulty starting to urinate",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nPregnant \nMale >40 years old",
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
      "Treatment Protocol: \nMinor-Care Protocol for urethral discharge: Request an order for a gonorrhea/chlamydia urine screen. If urethral discharge is present, 2+ WBC on urinalysis, leukocyte esterase positive on urinalysis, or recent known STI exposure, treat for potential gonorrhea/chlamydia infection with ceftriaxone and azithromycin. Instruct the Soldier to abstain from intercourse for one week after treatment due to contagious risk and counsel on safe sex practices and risks of high risk sexual behavior. Notify the supervising privileged provider so that he or she can track. Refer to community health. Return to clinic if symptoms are not improving within 48 hours, development of new symptoms, or worsening symptoms. \nMCP for UTI: Instruct the Soldier about the importance of increasing fluid intake to flush out the bacteria. OTC medication: phenazopyridine as needed for pain. Instruct the Soldier that it will likely dye his or her urine orange. It may also stain contact lenses from transferring the dye from the fingers to the contacts, if worn. Antibiotics: Trimethoprim/ Sulfamethoxazole is the first line agent. Nitrofurantoin is the second line agent if the Soldier is allergic to sulfa drugs or there is local resistance to the first line agent. Return to clinic if symptoms are not improving within 24 hours, development of new symptoms, or worsening symptoms despite treatment. \nMCP for urinary incontinence. If leaking urine during episodes of increased intra-abdominal pressure (sneezing, coughing, laughing, jumping), it is stress incontinence. Instruct the Soldier on performing Kegel exercises at home. Contact the clinic if not improving and would like a referral. Return for worsening or development of new symptoms.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Urinary Obstruction \nBenign Prostatic Hypertrophy (BPH) \nUTI \nSTI \nStress Incontinence",
  },
  {
    id: "activityMod",
    activityModText: "Incontinence: \nAccess to a Restroom \nNo jumping",
  },
  {
    id: "about",
    aboutText:
      "Problems with voiding may include urinary incontinence (voiding unintentionally), difficulty initiating the urinary stream, decreased force of the stream, dribbling urination, complete inability to void. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: Inability to void can represent an obstruction of the ureter. Do to the risks to the kidneys, it is a medical emergency. \nDP 2: A man's prostate can become enlarged later in life resulting in urinary symptoms of post-void urine dribbling, a weak stream, or difficulty initiating a urinary stream that requires further evaluation and treatment by a qualified provider.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default E4Questions;
