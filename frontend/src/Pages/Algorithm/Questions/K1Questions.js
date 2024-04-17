const K1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAltered mental status: delirious, confused, or unresponsive \nDry skin \nAbnormal vital signs: temperature greater than 103 F",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "1. Apply ice sheets/douse the Soldier with water. \n2. Start an IV as ordered by the doctor or PA. \n3. Monitor rectal body temperature. \n4. Transport to emergency treatment area. \nImmediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nSweating profusely \nHeadache \nWeakness \nDizziness \nNausea \nPainful extremity/abdominal cramping",
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
      "Treatment Protocol: \nMinor-Care Protocol for mild heat injury. COOL: Place the Soldier in a cool or shaded place. HYDRATE: Give the Soldier at least one liter of cool water to drink in the first 30 minutes and then at least one liter of water per hour the next 2 hours. Advise the Soldier to decrease his activity for the next 24 hours. REASSESS: If the Soldier's symptoms do not begin to resolve themselves within 30 minutes, if they get worse, or if the Soldier's temperature exceeds 100.3OF, refer the Soldier to the supervising privileged provider.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Heatstroke \nHeat Cramps \nHeat Exhaustion \nFever/Infection \nDehydration \nHyperthyroidism",
  },
  {
    id: "activityMod",
    activityModText:
      "No significant exercise x 48 hours \nLimit exposure to hot environments",
  },
  {
    id: "about",
    aboutText:
      "Heat injury results from an excessive loss of water and salt from the body or a breakdown of the body's cooling mechanism. Risks include inadequate acclimatization, illness, blood donation, poor physical fitness, obesity, using drugs such as antihistamines (Benadryl®, Atarax®, CTM®), decongestants (Sudafed®), high Blood Pressure (diuretics, beta blockers) and psychiatrics (tricyclic antidepressants, antipsychotics). \nDP 1. A “yes” response to any of the questions may indicate heatstroke with a breakdown of the body's heat regulating mechanism. Heatstroke is characterized by high body temperature (>l03oF), altered mental status (that is, confusion, delirium, syncope and/or coma) and, in most cases, an absence of sweating. This condition has a high mortality rate and is a MEDICAL EMERGENCY. Lowering the body temperature is the most important treatment. Placing icepacks/ice sheets in the groin, arm pits and behind the neck, along with ice sheers under and on top the Soldier allows for rapid cooling. An alternative is dousing the Soldier with water and gently fanning to allow for evaporative cooling. Start an intravenous infusion. Monitor the Soldier's body (rectal) temperature. Transport to an emergency treatment location, if available. \nDP 2. A “yes” response to questions may indicate heat exhaustion which occurs as a result of an excessive loss of water and salt from the body. The syndrome is characterized by profuse perspiration, pallor, and perhaps low blood pressure. The mortality rate from this disorder, if treated, is extremely low. Moving the Soldier to a cool area for rest and the administration of fluids (orally or intravenous infusion, depending on severity of symptoms) will result in prompt recovery. Untreated heat exhaustion may progress to heatstroke. \nDP 3. A “yes” response to these questions indicates heat cramps. These are painful cramps of voluntary muscles which result from excessive loss of salt from the body. Muscles of the extremities and the abdominal wall are usually involved. Body temperature is normal. Heat cramps can be promptly relieved by replacing salt and fluid orally and placing the individual in a cool environment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K1Questions;
