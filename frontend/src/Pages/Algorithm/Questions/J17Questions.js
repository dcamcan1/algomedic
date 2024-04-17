const J17Questions = [
  {
    id: 0,
    questionText:
      "Perform a skin exam. \nDo any of the following apply to the Soldier: \nBleeding \nSensitive area >10 warts \nUpcoming mission limiting treatment \nSigns of infection or inflammation \nTreatment >12 weeks",
    choices: [
      { answerText: "Yes to any", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \n>3 warts \nTreatment >4 weeks \nMedic not trained \nComplication from treatment",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for cutaneous wart. Discuss the Soldier and your treatment plan with the AEM and obtain the supervising privileged provider approval prior to starting treatment. Medic must be trained and have had his or her procedure competency validated prior to performing a procedure. All procedures will be directly supervised. \nDiscuss the treatment options and their risks, benefits, and alternative that warts will often go away without treatment after several years with the Soldier. After the consent has been obtained and procedure approved by the supervising privileged provider, perform a final timeout. Clean the wart and surrounding skin. Pare down the callous over the wart but not to the point of bleeding or pain. Then apply the treatment option that the Soldier chose. Treatment options include salicylic acid, cryotherapy, or a combination of both. Cryotherapy includes 2 freeze thaw cycles that cover the wart and 2mm around the wart that takes 30-60 seconds to thaw. Instruct the Soldier that a blister, loss of skin pigmentation to the area, and pain may develop over the site. Salicylic acid may be applied to the wart after freezing and covered with a bandage or without freezing and covered with tape. Soldier can reapply salicylic acid and replace the tape or bandage every two days. Soldier should return in two weeks for re-evaluation and retreatment if needed. It is common for warts to require ongoing treatment for up to 12 weeks. Return earlier if new symptoms or complications from the treatment develop.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Cutaneous Wart \nCorn \nCallous \nSkin Cancer",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, rucking, or jumping \nWalk at own pace/distance",
  },
  {
    id: "about",
    aboutText:
      "A cutaneous wart is a benign growth of skin caused by a virus. Common and plantar warts often have thrombosed capillaries within them that look like black dots or 'seeds'. \nDP 1: Bleeding may indicate that the lesion is something other than a wart and requires further evaluation. Higher risk locations include the face, breast, perineum, anus, and genital regions. Greater than 10 lesions will require multiple repeat visits and other treatment options can be considered. If treatment would limit or prevent the Soldier from conducting an upcoming mission/task, refer to the supervising privileged provider to determine the best timing of treatment. If signs of an infection or inflammation are present around the wart, refer to the supervising privileged provider for treatment. \nDP 2: More than three warts will likely require a follow-up visit. AEM should see the Soldier if he or she returns for complications of the wart treatment or a repeat treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default J17Questions;
