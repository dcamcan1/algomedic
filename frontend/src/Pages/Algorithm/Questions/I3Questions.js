const I3Questions = [
  {
    id: 0,
    questionText:
      "Check hCG. \nDoes the Soldier have any of the following red flags? \nSexual Assault \nTrauma \nSevere Pain \nPregnant",
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
      "Do any of the following apply to the Soldier: \nNon-midline pelvic pain \nPain with intercourse \nPost-menopause \nBleeding > 10 days, not on birth control",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Take note of menses history: length, severity (clots, number of pads), medications. \nDo any of the following apply to the Soldier: \nMenstrual problem is new \nFailed previous self-care \nMenstrual pain onset after 25 years old \nProgression of symptoms \nMenses <21 or >35 days \nSpotting >1 pad/2 hours \nPrevents normal duties",
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
      "Treatment Protocol: \nMinor-Care Protocol for Painful Menstrual Cycles: Bothersome menstrual cramping (dysmenorrhea) usually lasts about 24 hours. It may be relieved by naproxen or ibuprofen for 5-7 days. Ketorolac can be used on presentation for moderate pain. Seldom is discomfort such that the Soldier is unable to perform normal activities. Give the Soldier symptomatic medication and instructions for use. Instruct the Soldier to return if the symptoms are worsening, new symptoms develop, or the minor-care protocol is not controlling the symptoms such that the problem is preventing performance of normal duties. A privileged provider can evaluate further and may prescribe additional medications to help decrease the symptoms during future menstrual cycles.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Heavy Menstrual Cycle \nIrregular Menstrual Cycle \nBirth Control Side Effect \nMiscarriage \nEctopic Pregnancy",
  },
  {
    id: "activityMod",
    activityModText:
      "Aerobic exercise at own pace/ distance x 3 days \nMust have access to restroom every hour",
  },
  {
    id: "about",
    aboutText:
      "This protocol is meant to cover menstrual difficulties and vaginal bleeding. If the problems are missed periods (possible pregnancy), vaginal discharge, or abdominal pain, screen according to the appropriate protocol. \nDP 1: If due to sexual assault, immediately notify the supervising privileged provider. Do not leave the victim alone. Ask if she would prefer a female medic/privileged provider if one is available. If bleeding is over one week late or the previous bleeding was spotting, it could represent a pregnancy. Bleeding during pregnancy (positive hCG) can represent a miscarriage or complication of pregnancy and needs to be seen ASAP. Non-midline pelvic pain and pain with intercourse are signs of pelvic inflammatory disease. Bleeding after menopause (period of no cycle for 12 months after 45 y/o) needs to be evaluated for possible malignancy. Massive Bleeding needs to be seen immediately. \nDP 2: Most common problems are irregular and painful periods. Menstrual pain starting after age 25, progressive worsening of symptoms, and poor relief with Ibuprofen are symptoms of a secondary cause to include adenomyosis, endometriosis, or fibroids. Spotting on Depo-Provera, Nexplanon, or IUD is not uncommon but should be examined further. Menses lasting for over five days, more often than every 21 days or less often than 35 days, or bleeding in between menses is considered abnormal. Soaking a pad or tampon more often than every two hours or interferes with daily activities is considered heavy.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default I3Questions;
