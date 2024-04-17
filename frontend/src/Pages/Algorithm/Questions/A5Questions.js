const A5Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAirway Compromise \nOrthostatic Hypotension \nBleeding from Gums \nInability to Move Eye",
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
      "Stop the Bleeding: \n1. Tilt head forward \n2. Blow nose gently \n3. Two sprays of Oxmetazoline \n4. Pinch nose for 5 minutes with index finger and thumb \n\nDid the bleeding stop?",
    choices: [
      { answerText: "No", nextScenario: 1 },
      { answerText: "Yes", nextScenario: 3 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Do any of the following apply to the Soldier: \nCut or deformity \nAnticoagulation \nIntra-nasal meds \nHigh blood pressure \nPurulent discharge \nRecurrent w/o cold",
    choices: [
      { answerText: "Yes", nextScenario: 4 },
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
      "Do any of the following apply to the Soldier: \nCurrent cold \nRunny nose \nAllergy symptoms",
    choices: [
      { answerText: "Yes", nextScenario: 6 },
      { answerText: "No", nextScenario: 7 },
    ],
    isFinal: false,
  },
  {
    id: 6,
    questionText: "Screen for cold symptoms.",
    choices: [{ answerText: "Cold Symptoms Screening" }],
    isFinal: true,
  },
  {
    id: 7,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for nosebleed: Once the bleeding is controlled, tell the Soldier to avoid vigorous blowing of the nose. If the room air is dry a humidifier or vaporizer often helps. Instruct the Soldier to return for medical assistance if the bleeding recurs and is not able to be controlled with tilting the head forward and applying external pressure with the thumb and index finger for 5 minutes or if the amount of blood lost at one time is enough to soak a wash cloth (ask the Soldier to bring in his wash cloth). Saline nasal spray can be used to prevent future nosebleeds if the air is dry after the initial nosebleed has resolved. Decongestant (Oxymetazoline) can be used to constrict the blood vessels.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Cerumen Impaction \nOtitis Media \nOtosclerosis \nRuptured Ear Drum \nEustachian Tube Dysfunction \nHearing Loss \nDisorders of the Jaw Joint \nSevere Anxiety \nNeck Injuries",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "red flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” Orthostatic hypotension is a sign of volume depletion and can represent a significant amount of blood loss. \nAction1. Nosebleeds normally result from the rupture of small blood vessels inside the nose related to mucosal trauma (nose picking) or irritation (dry climate, blowing nose). 90% occur in the front of septum in the nose and can be controlled by applying external pressure. If the bleeding does not stop, then the nosebleed likely is coming from the back of the nose and needs to be controlled by a privileged provider. \nDP2. Soldiers who have had trauma to the nose with an associated nosebleed require further screening. A misaligned broken nose can affect the upper airway and increase the risk of future sinus infections. Other injuries can be associated with the force that caused the trauma and nosebleed. Nosebleed while on anticoagulants can make it more difficult to stop a nosebleed and be a sign that the anticoagulation level is too high. Purulent discharge can be related to a retained foreign body or a concurrent infection that requires additional treatment. Recurrent nosebleeds not associated with a cold can be a sign of a bleeding disorder. \nDP3. Cold symptoms often result in nosebleeds from recurrent blowing of the nose, rubbing the nose with a tissue after blowing it, picking the nose from congestion, and prominent blood vessels from allergies or inflammation. Soldiers with symptoms of runny nose, congestion, or allergies should be screened with the cold symptoms protocol.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default A5Questions;
