const H3Questions = [
  {
    id: 0,
    questionText:
      "Perform Visual Eye Exam \nDoes the Soldier have any of the following red flags? \nTrauma \nRecent Surgery \nChemical Exposure \nFluid Level over Iris/Pupil \nNeurological Deficits",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Apply fox shield/protective cover. \nFor head trauma: stabilize neck. \nImmediately disposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nObserved foreign body \nPartial visual field affected",
    choices: [
      { answerText: "Yes to Any", nextScenario: 1 },
      { answerText: "No", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nContact wearer \nOnset within 7 days \nEye pain \nEye redness \nHeadache",
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
      "Treatment Protocol: \nMinor-Care Protocol for decreased vision. Visual acuity worse than 20/40 requires a referral to optometry for evaluation for glasses. Worsening of the vision is gradual and often occurs in both eyes. Noticing the issue may occur with a specific activity like trying to read a sign, seeing a target at the range, or Soldier may present requesting an evaluation or been screened during a yearly readiness screening. (Note: protective mask inserts are not usually provided to personnel with uncorrected vision of 20/40 or better). Floaters are clumps of material in the gel-like substance in the back of your eye. They are common, benign and move around in your field of vision. They are not fixed to a particular location in the field of view or significantly obstruct the field of view.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Trauma \nMigraine \nHemorrhage \nInfection \nIschemia \nStroke",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Decreased vision can mean that images are less distinct or that a portion of the visual field is “blacked out.” The Soldier may refer to the spots as stars, flashes, or floaters. \nDP 1. Perform an eye exam with visual acuity. Decreased visual acuity following trauma may indicate a serious injury that requires immediate treatment. Retinal detachment is often preceded by flashes of light, new floaters, and black spots, these symptoms should prompt a dilated retinal exam as soon as possible by an eye care provider. A foreign body seen on exam should not be removed. Cover the eye with a protective fox shield or cup and discuss with the supervising privileged provider. A privileged provider order is necessary prior to irrigation of a foreign body except when immediate irrigation is required for a chemical exposure. A white or red layered fluid level over the iris is a sign of a hypopyon or hyphema, respectively, and requires emergent referral. If the decreased vision involves a distinct part of the visual field which includes a black spot that moves with your eye, the cause may be serious. \nDP 2. Wearing contacts increases the risk of keratitis and corneal abrasion. Fluorescein exam is the next step to evaluate for these causes. Visual acuity of contact wearer should be performed with and without glasses to evaluate for a change in vision not related to the contacts. Acute onset and pain are signs of a more concerning cause than the need for glasses. Migraine can be associated with temporary decreased vision or seeing spots prior to a headache (an aura).",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default H3Questions;
