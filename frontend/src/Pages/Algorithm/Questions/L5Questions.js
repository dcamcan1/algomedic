const L5Questions = [
  {
    id: 0,
    questionText:
      "Counseling should be provided to the Soldier prior to scheduling an appointment with the PCM or placing a Secure Message or T-con for a referral. \nDo any of the following apply to the Soldier: \nNot stable relationship \nNo children \nUnder 30 years old \nPrimary care clinic (PCC) is able to perform",
    choices: [
      { answerText: "Yes to any", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText: "Schedule appointment with primary care clinic.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText: "Message provider or follow local policy.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Not applicable",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Counseling should be provided to the Soldier prior to scheduling an appointment with the PCM or placing a Secure Message or T-con for a referral. Counseling should include a discussion on contraception, brief overview of the procedure, and emphasis on the permanent nature of the procedure. \nVasectomy is an outSoldier procedure. It is often performed in an office or procedure room with local anesthesia and a sedating medication to help the Soldier relax. The skin of the scrotum is cut or punctured, a section of the vas deferens is removed, and the vas deferens ends are closed. After the procedure, the Soldier rests for two to four days with support of the scrotum and application of an ice pack to the area. Soldier doesn't return to full duty for about 2 weeks. \nA vasectomy is a permanent method of birth control. Reversal of the procedure is only about 50% effective and decreases with time. A vasectomy is not effective until after all of the sperm have been removed from the system. Lack of sperm needs to be confirmed by a lab test around three months. Alternate birth control will need to be used until the lack of sperm is confirmed. Pregnancy can still occur after vasectomy in 2% of people. Condoms are required to protect from STIs, if not in a committed monogamous relationship. \nDP 1: Vasectomy is for permanent birth control. If the Soldier is not in a stable relationship with acceptance of the other person, doesn't already have kids, or is under 30 years old, then refer to the privileged provider for counseling prior to referring the Soldier for a vasectomy. If the privileged provider performs vasectomies, the privileged provider will need to counsel the Soldier before the procedure. \nDP 2: Process to schedule a vasectomy varies by location. Message the privileged provider (secure messaging, T-con, etc.) to request a referral for the procedure or follow local process if different.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L5Questions;
