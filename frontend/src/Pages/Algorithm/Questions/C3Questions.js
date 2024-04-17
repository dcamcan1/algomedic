const C1Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Vitals \nAbdominal rigidity/rebound (bump chair) \nSevere pain \nFever with jaundice and RUQ pain \nConfirmed pregnancy \nAlcoholism \nImmunocompromised \nRLQ Pain",
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
      "Perform pregnancy screen/test, if appropriate. \nDo any of the following apply to the Soldier: \nMelena \nCoffee grind emesis \nPeriumbilical pain \nAbdominal trauma within 72 hours \n40+ years old \nChest pain and nausea",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nLoss of appetite \nFollowed by nausea Present for 1+ weeks \nTesticular Symptoms",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      {
        answerText: "No: Perform Pregnancy Screen/Test if appropriate",
        nextScenario: 5,
      },
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
      "Does the Soldier have any of the following (that have not been screened for): \nNausea/Vomiting \nDiarrhea \nFemale pelvic pain \nConstipation x3+ days \nUrinary symptoms",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 7 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText: "Screen for symptoms, as applicable.",
    choices: [
      { answerText: "Nausea/Vomiting Screening" },
      { answerText: "Diarrhea Screening" },
      { answerText: "Pelvic Pain Screening" },
      { answerText: "Constipation Screening" },
      { answerText: "Urinary Symptoms Screening" },
      { answerText: "Heartburn Screening" },
    ],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for Abdominal Pain: After significant underlying diseases have been ruled out, many causes of abdominal pain are not identified in the acute setting. Gas pain, constipation, stress are some of the potential other causes of the pain. The pain usually resolves on its own. Initial treatment includes hydration and a well-balanced, high fiber diet to help with any potential issues with constipation. A food diary looks for potential triggers. Follow-up if symptoms worsen, red flags, new symptoms, or no improvement in three days.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "MI, AAA \nAppendicitis \nPancreatitis, Hepatitis \nHeartburn \nEctopic Pregnancy \nTesticular Torsion \nPelvic Inflammatory Disease",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, jumping, riding in vehicle over uneven terrain \nAerobic activity at own pace/ distance \nAbdominal training at own intensity/rep",
  },
  {
    id: "about",
    aboutText:
      "Abdominal pain is pain between the ribs and groin in the front half of the body. Note that a cardiac problem can cause upper abdominal pain. Pain may be related to the location: right upper quadrant (RUQ) (liver, gallbladder), left upper quadrant (LUQ) (spleen), epigastric (stomach, pancreas, aorta, heart), lower (intestines, urinary tract, hernia, pelvic organs), flank (kidney). \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Unstable vitals represent a significant health risk. Abdominal rigidity and rebound or significant Soldier discomfort with bumping the Soldier's stretcher/chair are signs of peritonitis and can represent a surgical abdomen. Level of pain may represent the significance of the underlying disease. \nDP 1. Suspected melena and coffee grind emesis should be tested and referred to a privileged provider if positive. \nDP 2. Periumbilical pain that moves to the right lower quadrant (RLQ) is a sign of appendicitis. Pancreatitis and appendicitis are often associated with a loss of appetite. Women of childbearing age should have their pregnancy status verified. Abdominal pain in the setting of pregnancy or recent abdominal trauma can signify an underlying issue. Chronic abdominal pain requires further evaluation by a qualified provider. New-onset benign, functional illness in a Soldier 50 plus years old is unlikely and should be evaluated further. \nDP 3. Abdominal pain frequently accompanies nausea, diarrhea, and constipation. Soldiers should be screened for the complaint. Pelvic pain has an additional partial differential diagnosis and should be screened according to that protocol. Urinary symptoms can progress from a urinary tract infection to a bladder infection causing flank pain.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C1Questions;
