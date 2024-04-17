const L8Questions = [
  {
    id: 0,
    questionText:
      "Check blood pressure. \nDo any of the following apply to the Soldier: \nGreater than 150/90 \nLower than 90 systolic \nDifference >15mmHg between arms",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Lay Soldier in dark, quiet room if BP is elevated. Disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nLast day of 5-day BP check \nOrthostatic hypotension",
    choices: [
      { answerText: "Yes to Any", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
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
      "if the Soldier is completing 5-day BP checks, remind the Soldier to return for his or her next check. If not other complaints, return to duty.",
    choices: [{ answerText: "Continue" }],
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
      "Systolic blood pressure is the top number which is the pressure in the blood vessels when the heart is pumping blood to the body. Diastolic blood pressure is the bottom number which is the pressure in the blood vessels when the heart is filling with blood between pumps. A normal blood pressure is 120/70. Blood pressure can result in medical problems when it is elevated over a long period of time. It can also result in acute problems when it is very low or very high. \nDP 1: If the blood pressure is greater than 150/90, recheck the blood pressure after five minutes. If it is still greater than 150/90 or was lower than 90 systolic refer the Soldier to a privileged provider for evaluation. Blood pressure over 180/120 is considered severe (hypertensive urgency) and requires prompt treatment. Severe hypertension can cause permanent end organ damage. Have the Soldier lay down in a dark, quiet room while awaiting for transport or to be seen by the privileged provider. A difference of greater than 15mmHg between arms suggests an arterial issue. \nDP 2: On the last day of the blood pressure check, refer the Soldier to the AEM to evaluate the recorded blood pressures. If it is not the last blood pressure check, remind the Soldier to return for his or her next check. Orthostatic hypotension is usually associated with feeling lightheaded upon standing and systolic blood pressure drops by 20, diastolic blood pressure drops by 10, or heart rate increases by 20 with standing.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L8Questions;
