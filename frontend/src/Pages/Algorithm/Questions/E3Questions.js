const E3Questions = [
  {
    id: 0,
    questionText:
      "Perform pregnancy test (if appropriate), STD Screen, and urinalysis (UA). \nDoes the Soldier have any of the following red flags? \nFemale Pelvic Pain with Intercourse \nPregnant \nOrthostatic Hypotension \nFever",
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
      "Do any of the following apply to the Soldier: \nWorsening despite treatment \nSevere illness \nVaginal symptoms",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSkin lesion \nRash",
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
      "Treatment Protocol: \nMinor-Care Protocol for urethral discharge. Request an order for a urinalysis and gonorrhea/chlamydia urine screen. If urethral discharge is present, 2+ WBC on urinalysis, leukocyte esterase positive on urinalysis, or recent known STI exposure, treat for potential gonorrhea/chlamydia infection with ceftriaxone and azithromycin. Instruct the Soldier to abstain from intercourse for one week after treatment due to contagious risk and counsel on safe sex practices and risks of high risk sexual behavior. Notify the supervising privileged provider so that he or she can track. Refer to community health. Return to clinic if symptoms are not improving within 48 hours, development of new symptoms, or worsening symptoms.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Testicular Torsion \nHernia \nMuscle/Tendon Strain \nStress Fracture \nHip Injury",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Soldiers frequently show concern that they may have (STIs); however, they seldom use that term. For screening purposes, focus on the symptom(s), or in the absence of symptoms, the belief that they may have been exposed to infections through sexual contact. Sexually transmitted infections include but are not limited to those traditionally classified as venereal diseases. Some are potentially life-threatening; others are not. Some infections can be cured through treatment; others cannot be cured at the present time. Sometimes symptomatic relief is available. All Soldiers, with or without symptom(s), need to be evaluated. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1: All Soldiers will be screened with a pregnancy test (if female), UA, and STI screen. STI screen will consist of a RPR, gonorrhea/chlamydia urine screen, and HIV screen. Pelvic pain with intercourse may be pelvic inflammatory disease. Orthostatic symptoms, fever, and signs of a severe illness can represent a more significant problem. Signs of a severe illness includes abnormal vital signs, appearing pale, sweaty, lethargic, or visually in pain. Failure of initial treatment may be a drug resistant organism. Females with vaginal symptoms to include discharge will be referred to a privileged provider for a pelvic examination. \nDP 2: Skin lesions/rash may represent a chancre (syphilis), HSV ulcers, genital warts (HPV), chancroid, or molluscum contagiosum. Further evaluation is necessary to determine the necessary treatment modality (freezing, medication, or referral).",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default E3Questions;
