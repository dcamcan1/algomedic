const B10Questions = [
  {
    id: 0,
    questionText:
      "Does the Soldier have any of the following red flags? \nAbnormal Distal Pulse \nAbnormal Sensation \nDeformity \nSuspect Stress Fracture \nConstant Pain \nUnrelated to overuse or injury (increased with weight bearing or during exercise, endurance training, change in exercise routine)",
    choices: [
      { answerText: "Yes", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Immobilize the injured extremity before transport. \nStress injury: crutches (toe touch) & follow Bone Stress Injury (BSI) Policy \nDisposition the Soldier as 'Provider Now.'",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Do any of the following apply to the Soldier: \nNumbness \nRedness/Warmth \nAbscess",
    choices: [
      { answerText: "Yes", nextScenario: 3 },
      { answerText: "No", nextScenario: 4 },
    ],
    isFinal: false,
  },
  {
    id: 3,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now, or a physical therapist (PT) if appropriate. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 4,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol (MCP) for ingrown toenail. Soak in antibacterial soap and water for 20min three times per day. Place cotton under the nail to push it way from the affected lateral nail fold. Consult the supervising privileged provider for toenail removal evaluation (J-18) if moderate to severe. \nMCP for subungual hematoma: After discussion and concurrence by supervisor, treat by puncturing the nail allowing for trapped blood and pressure to be relieved. Keep the affected toe clean. Soak it in antibacterial soap and water twice a day for 3 days. \nMCP for plantar fasciitis or foot pain: Home exercise program (stretch, strengthen) and icing of the affected arch. Arch support may assist in preventing recurrence. \nMCP for blisters, callus: Wash area with antibacterial soap. Cover a large area of surrounding undamaged skin and the treated blister with a protective dressing of moleskin with a hole in the middle cut out for the blister. An adhesive solution such as tincture of benzoin or a surgical adhesive to the skin around the blister to improve the adhesion of the moleskin. Have the Soldier return to the clinic after the blister ruptures. Use moleskin and activity modification.\nMCP for plantar wart: Soak the Soldier’s foot in warm water for 20 minutes. Paring down a callous/corn: The performing medic must have training in the procedure and have the training documented. After the risks and benefits of the procedure have been explained to the Soldier, Soldier has signed the consent form, and a final timeout has been performed, pare down the callous or corn with a scalpel blade. Reduce the hard skin until the lesion is flexible or the Soldier can stand/bear weight without discomfort. Do not remove skin to the point of bleeding. Discuss with your supervising NCO. \n\nAll MCPs for feet Issues: Medication: ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed. Instruct the Soldier to seek medical assistance if symptoms worsen, pain becomes severe enough as to prevent performance of normal duties/activities, not improving within one week of minor-care.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Injury \nOveruse \nPlantar Fasciitis \nTarsal Tunnel Syndrome \nAchilles Tendinopathy \nIngrown Toenail \nBunion",
  },
  {
    id: "activityMod",
    activityModText:
      "No running, jumping but may walk up to ¼ mile at own pace/distance and stand up to 20min \nMay lift, carry, push, pull up to 25 lbs \nNo repetitive lifting from floor \nPerform stretching, core strengthening home regiment during PT",
  },
  {
    id: "about",
    aboutText:
      "Common anterior foot pains include around the big toe (bunion, sprain, arthritis, sesamoiditis, ingrown toenail, subungual hematoma) and below the 2nd and 3rd metatarsals (metatarsalgia, Morton's neuroma, and plantar wart). \nred flags. If the Soldier presents with any of the red flags, immediately disposition the Soldier as “Provider Now.” \nDP 1. In the setting of trauma, deformity with loss of peripheral pulses or sensation is an indication of a medical emergency. Immobilize the affected extremity prior to transport. Constant pain can be a sign of a more serious injury. Unrelated to overuse or injury can be a sign of inflammation requiring further evaluation. \nDP 2. Numbness is often a sign of nerve compression. Refer to PT if direct access is available. Red, warm, and abscess can be signs of infection requiring further evaluation and treatment.",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default B10Questions;
