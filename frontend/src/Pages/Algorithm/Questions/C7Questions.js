const C7Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nVomiting Blood or Coffee Grinds \nMelena \nAngina \nShortness of Breath \nRadiation to Back",
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
      "Do any of the following apply to the Soldier: \nTachycardia \nSweating \nShoulder, jaw pain",
    choices: [
      {
        answerText:
          "Yes to Any: *** Apply oxygen, perform EKG, and administer aspirin ***",
        nextScenario: 1,
      },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nSymptoms >2 weeks \nHistory of ulcer \nUnexplained weight loss \nAnorexia \nVomiting \nDysphagia \nOdynophagia",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      {
        answerText: "No",
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
      "Are other classic symptoms of heartburn present? (nausea, sore throat)",
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
      { answerText: "Sore Throat Screening" },
    ],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for gastroesophageal reflux. It occurs due to the passage of gastric contents into the esophagus. It is a normal physiologic process that can result in brief episodes of heartburn. Overeating, tobacco, alcohol, overweight, stress, certain foods can act as triggers to increase the frequency of heartburn. \nInstruct Soldier on lifestyle modifications: weight loss if overweight, smoking cessation if indicated, and elevation of head of bed, avoidance of chocolate/caffeine/spicy foods/ alcohol/other foods that exacerbate symptoms. Ranitidine (histamine 2 receptor antagonist) as needed for symptoms. Ranitidine reaches peak of action about 2.5 hours after taking and lasts around 8 hours. Return if symptoms are not controlled with minor-care measures, new symptoms arise, or Soldier is having to take the over the counter medication more than once per week.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Medication \nGastroesophageal Reflux \nMyocardial Infarction \nStomach/Duodenal Ulcer \nCancer \nPancreatitis",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Heartburn is a common finding but can also be a sign of a more serious condition like a gastric ulcer or heart attack. \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” These can be signs of significant underlying medical problems. \nDP 1. Angina (substernal chest pressure, worse with exercise), shortness of breath, tachycardia, lightheaded, sweating, shoulder or jaw pain can be signs and symptoms of a myocardial infarction. Obtain an EKG and give aspirin (if no signs of bleeding). Do not wait to provide oxygen, give aspirin, and start IV before notifying the supervising privileged provider. Vomiting blood or coffee grinds and melena are signs of a bleeding ulcer. Tearing pain that radiates to the back is a sign of a dissecting aortic aneurysm. \nDP 2. These are symptoms that suggest a more chronic condition than just heartburn. History of an ulcer suggests gastritis or another ulcer. Unexplained weight loss is a sign of cancer. Anorexia and vomiting are signs of pancreatitis. Dysphagia and odynophagia are signs of esophagitis and chronic gastroesophageal reflux disease. \nDP 3. Soldier without the previous concerning symptoms and classic heartburn symptoms can be treated with over the counter medications and lifestyle changes. If other symptoms are present, he or she should be screened for those symptoms.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default C7Questions;
