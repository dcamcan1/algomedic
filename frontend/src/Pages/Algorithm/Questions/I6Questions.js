const I6Questions = [
  {
    id: 0,
    questionText:
      "Check hCG. \nDo any of the following apply to the Soldier: \nPregnant \nMedication side-effects \nHistory of recent unprotected sex",
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
      "Discuss effectiveness of each type of contraceptive \nDiscuss contraceptive preferences \nDiscuss additional benefits",
    choices: [{ answerText: "Schedule appointment or referral" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Not Applicable",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Contraception provides prevention of unintended pregnancy. There are many different types of contraception depending on the Soldier's goals. \nDP 1: Determine date of last menstrual cycle. Check a pregnancy test if the Soldier's menstrual cycle is late. Determine history of previous contraceptive use. If the Soldier is having side-effects from her current birth control or has had recent unprotected sex, refer for further evaluation. \nDP 2: Long acting contraceptives are the most effective (surgical/permanent, IUD, implantable). Injectable, oral, patch, vaginal ring effectiveness is partially based on consistent, correct use. Condoms and behavioral modification are least effective. Choose the most effective method that the Soldier will be able to use successfully. If male, discuss the permanent nature of the procedure, discuss with AEM, and follow local protocol for referral. Estrogen-progesterone decrease menstrual symptoms, acne, and hirsutism. Progesterone and IUDs decrease menstrual symptoms. Longer term contraception to include injectable types have a risk of irregular bleeding, spotting. Discuss Soldier preferences and history with AEM. Check hCG if requesting Depo-Provera. Schedule accordingly: routine appointment (injectable, oral, patch, ring) or procedural appointment or referral based on supervising privileged provider preferences (implantable, IUD).",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default I6Questions;
