const K6Questions = [
  {
    id: 0,
    questionText:
      "Do any of the following apply to the Soldier: \nSecondary infection \nNo nits or lice seen",
    choices: [
      { answerText: "Yes to any", nextScenario: 1 },
      { answerText: "No", nextScenario: 2 },
    ],
    isFinal: false,
  },
  {
    id: 1,
    questionText:
      "Refer to Advanced Enlisted Medic (AEM) now. AEMs include: Expeditionary combat medic, special operations medic, flight paramedic, or supervising NCO health care specialist or practical nurse specialist when local policy supports the delegation of authority from the supervising provider to the supervising NCO health care specialist or practical nurse specialist.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: 2,
    questionText:
      "Treatment Protocol: \nMinor-Care Protocol for lice. Wash clothes, sleeping linens, sleeping bag in hot water (above 149oF) or have them dry cleaned. If unable to wash or dry clean, place in a sealed bag for two weeks. \nMCP for body lice. Lice live on the seams of the clothing. Permethrin 5% application can also be used in addition to laundering the clothes. \nMCP for head lice. Wash the area without using conditioner and towel dry. Apply permethrin cream to saturate the affected area. Leave on for 10 minutes. Rinse with warm (not hot) water. Use a close toothed comb to remove nits (eggs from base of hair follicles). Repeat in one week if nits or lice are still present. \nMCP for pubis lice (such as, crabs). Screen for other STIs. Treat recent sexual contacts at the same time. Skin should be cool and dry. Apply Permethrin cream to all affected areas (groin, buttock, thighs, trunk, and axillae) for 10 minutes and then rinse off in warm water. Remove nits with tweezers or thin toothed comb. Follow-up in 10 days. If unable to follow-up, retreat with Permethrin cream in 10 days due to 40% of Soldiers not having cleared the infection with one treatment.",
    choices: [{ answerText: "Continue" }],
    isFinal: true,
  },
  {
    id: "diffDiagnosis",
    diagnosisText:
      "Lice \nScabies \nContact Dermatitis \nFungal Infection \nHair Casts",
  },
  {
    id: "activityMod",
    activityModText: "None",
  },
  {
    id: "about",
    aboutText:
      "Crabs/lice are tiny insects that are visible to the naked eye that infest the hairy areas of the body (such as, groin, body hair, and scalp). The insect deposits eggs (nits) and attaches them at the bases of hair shafts. The lice require a diet of human blood and will die within three days after removal from the body. The possibility of spreading infection to close associates by intimate contact or common use of clothing, beds, or toilet articles is real. \nDP 1: Secondary infection is common due associated itching. If nits and lice are not seen, then further evaluation is needed for a different diagnosis (contact dermatitis or scabies).",
  },
  {
    id: 10,
    questionText:
      "Do you need to complete another screening? \nSelect 'No' if the Soldier has red flags.",
    choices: [{ answerText: "Yes" }, { answerText: "No" }],
  },
];

export default K6Questions;
