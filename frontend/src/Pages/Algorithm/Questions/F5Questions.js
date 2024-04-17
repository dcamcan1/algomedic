const F5Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nHomicidal Intent or Attempt \nSuicidal Intent or Attempt \nSelf-Injury \nAltered Mental Status",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Inform leadership. Do not leave Soldier alone. Remove means of self-harm. Immediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nPositive suicide screen \nAbnormal vital signs \nSevere emotional distress",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nPositive depression screen \nDifficulty adjusting to injury or pain \nEscorted due to safety concerns \nOther indications of depression/anxiety",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText:
      "Obtain list of all medications and amount taken. Ask if currently receiving Behavioral Health (BH) services. \nRefer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for decreased mood. Soldiers that are experiencing mood symptoms that are mild in nature and not associated with other symptoms or impairment should be offered assistance. As always, remain calm, express concern for the Soldier, and do not be judgmental or argumentative. Educate the Soldier on the many resources that are available in your area, to include: Behavioral Health, Chaplaincy, Army Community Services, Chain of Command, Military and Family Life Consultants, Military OneSource, and Army Wellness Center. Offer to walk the Soldier to the resource that they prefer. Do not allow the Soldier to leave the screening area until they have been cleared by the supervising medic.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Hypoglycemia \nDepression \nAnxiety \nHypoxia \nHypo/hyperthyroidism \nSubstance intoxication or withdrawal",
  },
  {
    id: "activityMod",
    activityModText: "Escort to Behavioral Health or Emergency Room",
  },
  {
    id: "about",
    aboutText:
      "The terms “depression, nervousness, anxiety, tension” and complaints of “nerves” or “being upset” may all be used by Soldiers to describe problems with mood. Complaints such as these are often due to situational or behavioral health factors, but may also be due to a physical condition. Everyone experiences emotional distress from time to time. However, when symptoms become continuous or interfere with daily functioning, or when suicidal or homicidal thoughts or self-harm are reported, the complaint must be taken seriously and further evaluated. \nDP 1: Ask the following questions: In the past month, have you wished you were dead or wished you could go to sleep and not wake up? Have you had any thoughts about killing yourself? If YES to the second question, ask: Have you thought of how you might do this? Have you started to work out or have worked out the details of how to kill yourself? Do you have any intention of acting on these thoughts of killing yourself? Remain calm. Express concern and do not be dismissive. Do not be judgmental or argumentative. If YES to questions about suicidality, do not leave the Soldier alone. Remove means of self-harm. Do not leave the Soldier waiting alone for a long time in a busy waiting room, as this may increase the Soldier's distress. Be aware that abnormal vital signs and/or anxiety or depression symptoms may represent an underlying medical issue. \nDP 2: Ask the following questions for a depression screen: Over the past 2 weeks, have you often been bothered by feeling down, depressed, or hopeless? Over the past 2 weeks, have you often been bothered by having littler interest or pleasure in doing things? In addition to other situational, mental health, or medical causes, emotional distress may accompany injury and/or chronic pain and may merit a referral to behavioral health services. Ask Soldier how he or she is coping with the injury and/or pain. Other indicators of emotional distress may include disheveled appearance or poor hygiene, reported change in work performance, and risk-taking behavior. Obtain a list of all medications and the amounts taken to provide to the AEM. Taking significantly more of a medication than the prescribed amount may represent a suicidal gesture and should be inquired about if reported. If the Soldier was accompanied to the screening area by an escort, it may be due to high risk behavior or safety concerns. Inquire as to reason for escort, asking escort if necessary.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default F5Questions;
