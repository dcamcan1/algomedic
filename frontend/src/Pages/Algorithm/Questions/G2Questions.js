const G2Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nHeat Injury \nStiff Neck \nLight Sensitivity \nPregnant \nSeizure \nLightheaded",
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
      "Do any of the following apply to the Soldier: \nAbnormal vitals \nHIV positive \nImmunosuppression \nOverseas travel within 6 months \nTick or mosquito bite \nMalaria area \nAnimal exposure \nIV drug use",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nCold symptoms \nSore throat \nEar pain \nDiarrhea \nPain with urination",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
    ],
    isFinal: false,
  },
  {
    id: 4,
    questionText: "Screen for symptoms, as applicable.",
    choices: [
      { answerText: "Cold Symptoms Screening" },
      { answerText: "Sore Throat Screening" },
      { answerText: "Ear Pain Screening" },
      { answerText: "Diarrhea Screening" },
      { answerText: "Urinary Symptoms Screening" },
    ],
    isFinal: true,
  },
  {
    id: 5,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for elevated temperature: Instruct the Soldier to stay well hydrated and get plenty of rest. He or she should drink fluids to keep their urine mostly clear and obtain at least eight hours of rest per day. Take acetaminophen as needed for temperature above 98.4°F (No more than eight tablets within 24 hours. No other medications with acetaminophen in them. No alcohol.) \nSoldier is contagious while he or she has an elevated temperature. He or she should avoid contact with healthy Soldiers as much as possible. If in training, refer to local SOP. Soldier may need to be placed in quarters. Return for medical assistance if symptoms do not improve with acetaminophen, other symptoms develop, or a fever develops (T > 100.4).",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Sleep Debt \nMalaisea \nCold Symptoms \nSore Throat \nEar Pain \nHeat/Cold Injury \nDiarrhea \nPain with Urination",
  },
  {
    id: "activityMod",
    activityModText:
      "For Fever: Consider Quarters x 24-48 hours (must discuss with supervising privileged provider)",
  },
  {
    id: "about",
    aboutText:
      "Fever/chills are usually associated with an acute illness with other obvious symptoms. \nDP 1. If the Soldier's temperature is greater than 100.4°F, has symptoms for more than 48 hours, HIV infection, or immunosuppression, then there is a greater risk of the fever being caused by a bacterial infection. Overseas travel, tick or mosquito bite, animal exposure, and malaria endemic area, increase the risk of a zoonotic or malaria infection. IV drug use increases the risk of endocarditis. \nDP 2. Before assuming the Soldier has isolated fever/chills, be sure to ask him/her specifically about other symptoms such as upper respiratory infection symptoms, cough, sore throat, ear pain, diarrhea, dysuria, rash, and muscle aches. If no associated symptoms can be identified, over half of Soldiers' fever will resolve on its own without an underlying issue being identified.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default G2Questions;
