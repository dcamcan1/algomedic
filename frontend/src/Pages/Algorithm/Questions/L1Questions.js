const L1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nKnown Infection \nHigh Risk Contact",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Disposition the Soldier as 'Provider Now.' \nFor Soldiers who are exposed to blood or body fluids through a wound or mucous membrane, wash the area with soap and water or flush the mucous membranes with saline or water. Clean any wounds with an alcohol-based hand hygiene agent. Alcohol helps kills the HIV virus. Document the exposure with: source person and Soldier risk factors, serologic tests (HIV, Hepatitis B, Hepatitis C), type of exposure to include instrument (hollow bore needle, scalpel if indicated), time of incident, body fluid involved, body location of exposure to include depth of wound, and contact time with contaminated fluid. If the source person is known to be infected, it is important to determine the person's most recent viral load and previous treatment to include drug resistance. \n\nEnsure that the following information is documented in the Healthcare record before the Soldier leaves: \nHCP - dates of HepB immunizations, post-immunization titer, if known, previous testing (if available) for HBV and HCV, tetanus immunization status, current medications, current or underlying medical conditions that might influence use of/response to vaccination; \nExposure - date and time of exposure, nature of the exposure (non-intact skin, mucosal, percutaneous, human bite), type of fluid (blood, blood-contaminated fluid), body location of the exposure and contact time with fluid; for percutaneous injuries, a description of the injury (depth of wound, solid vs hollow needle, sharp use in source Soldier).",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nHigh-risk exposure \nExposure with HIV in a lab",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM). AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist. \nFor Soldiers who are exposed to blood or body fluids through a wound or mucous membrane, wash the area with soap and water or flush the mucous membranes with saline or water. Clean any wounds with an alcohol-based hand hygiene agent. Alcohol helps kills the HIV virus. Document the exposure with: source person and Soldier risk factors, serologic tests (HIV, Hepatitis B, Hepatitis C), type of exposure to include instrument (hollow bore needle, scalpel if indicated), time of incident, body fluid involved, body location of exposure to include depth of wound, and contact time with contaminated fluid. If the source person is known to be infected, it is important to determine the person's most recent viral load and previous treatment to include drug resistance. \n\nEnsure that the following information is documented in the Healthcare record before the Soldier leaves: \nHCP - dates of HepB immunizations, post-immunization titer, if known, previous testing (if available) for HBV and HCV, tetanus immunization status, current medications, current or underlying medical conditions that might influence use of/response to vaccination; \nExposure - date and time of exposure, nature of the exposure (non-intact skin, mucosal, percutaneous, human bite), type of fluid (blood, blood-contaminated fluid), body location of the exposure and contact time with fluid; for percutaneous injuries, a description of the injury (depth of wound, solid vs hollow needle, sharp use in source Soldier).",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText: "Low Risk Exposure \nHigh Risk Exposure",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "This protocol is to be used in locations where a local policy is not already in place for the screening of potential HIV or Hepatitis exposures. \nDP 1: Known or high risk contacts for HIV should be offered prophylaxis medications to decrease the risk of infection if they had non-intact skin, mucous membrane, blood, or at risk body fluid exposures. Prophylaxis medications should be started within 2 hours of initial exposure but no later than 72 hours. With Hepatitis B, immunoglobulin should be provided within 24 hours of exposure but no later than 1 week. With Hepatitis C, post exposure management is with early detection and treatment of an infection. \nDP 2: Feces, nasal secretions, saliva, gastric secretions, sputum, sweat, tears, and urine are not considered to be infectious without blood being present within them. Intact skin is a successful barrier to potentially infectious fluid. Note that cuts, abrasions, dermatitis are not considered intact skin. These exposures should be referred to the AEM for counseling and referral to a privileged provider if needed. Exposures that are over 7 days old are no longer within the window for prophylaxis treatment. They should be referred to the AEM for counseling and required laboratory testing.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default L1Questions;
