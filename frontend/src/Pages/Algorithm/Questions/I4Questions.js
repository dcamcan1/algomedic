const I4Questions = [
  {
    id: 0,
    questionText:
      "Check hCG. \nDoes the Soldier have any of the following red flags? \nFever \nPregnant \nNon-midline Pelvic Pain \nPain with Intercourse",
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
      "Do any of the following apply to the Soldier: \nRecurrent vaginitis \nPresence of IUD \nVaginal discharge \nGenital lesion or ulcer \nVaginal lump or mass \nPelvic pain during exercise",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nModerate vaginal pain \nPresentation different from the treatment protocol descriptions",
    choices: [
      { answerText: "Yes to Any", nextScenario: 4 },
      { answerText: "No", nextScenario: 5 },
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
      "Treatment Protocol: \nWhen facilities for a speculum exam and/or microscopic evaluation are not available and evacuation is unfeasible, the Soldier may be treated according the history below. \nMinor-Care Protocol for yeast infection: Presents with a scant amount of thick, white (cottage cheese like) discharge that is usually odorless and may be associated with vulvar itching, soreness, and dysuria. Symptoms are often worse the week before a menstrual cycle. Vaginal pH is typically normal (pH of 4-4.5). Treat with Fluconazole. \nMCP for bacterial vaginosis: Presents with a thin, greyish discharge, vaginal pH greater than 4.5, and a fishy smell (prominent when 10% potassium chloride is added to a slide of vaginal discharge) without signs of inflammation. Symptoms are often pronounced during menstrual cycle or after intercourse. Treat with Metronidazole for seven days. Instruct the Soldier to return if the symptoms are worsening, new symptoms develop, or the minor-care protocol does not resolve the symptoms.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Bacterial Vaginosis \nYeast Infection \nTrichomonas \nPelvic Inflammatory Disease \nSTI",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "This protocol is meant to cover the majority of vaginal complaints not related to bleeding or a menstrual cycle. If a Soldier has external or vaginal discomfort along with symptoms suggesting a urinary tract infection (frequency, urgency, and internal dysuria), she should be screened as painful urination (dysuria)/frequent urination, E-1. \nDP 1: Fever, non-midline pelvic pain, and pain with intercourse are symptoms of pelvic inflammatory disease, which is a serious infection requiring further evaluation. Vaginal infections and certain medications have a higher risk during pregnancy. Recurrent infections or infections that failed initial therapy require treatment regimens and closer observation. Vaginal discharge, lesion, or ulcer requires an invasive physical exam with laboratory evaluation. If facilities for a speculum physical exam and/or microscopic evaluation are not available and evacuation is not feasible, then treat according to history in minor-care protocol section. \nDP 2: Vaginitis may have an atypical presentation. In these situations, a more detailed evaluation is required.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default I4Questions;
