export const evidence = {
  none: "None",
  freezingTemperatures: "Freezing Temperatures",
  spiritBox: "Spirit Box",
  fingerprints: "Fingerprints",
  emfLevel5: "EMF Level 5",
  ghostOrb: "Ghost Orb",
  ghostWriting: "Ghost Writing",
}

export const ghosts = [
  {
    name: "Wraith",
    evidence: [
      evidence.freezingTemperatures,
      evidence.spiritBox,
      evidence.fingerprints,
    ]
  },
  {
    name: "Phantom",
    evidence: [
      evidence.freezingTemperatures,
      evidence.emfLevel5,
      evidence.ghostOrb,
    ]
  },
  {
    name: "Poltergeist",
    evidence: [
      evidence.spiritBox,
      evidence.ghostOrb,
      evidence.fingerprints
    ]
  },
  {
    name: "Banshee",
    evidence: [
      evidence.freezingTemperatures,
      evidence.emfLevel5,
      evidence.fingerprints
    ]
  },
  {
    name: "Jinn",
    evidence: [
      evidence.emfLevel5,
      evidence.spiritBox,
      evidence.ghostOrb,
    ]
  },
  {
    name: "Mare",
    evidence: [
      evidence.freezingTemperatures,
      evidence.spiritBox,
      evidence.ghostOrb,
    ]
  },
  {
    name: "Revenant",
    evidence: [
      evidence.emfLevel5,
      evidence.ghostWriting,
      evidence.fingerprints,
    ]
  },
  {
    name: "Shade",
    evidence: [
      evidence.emfLevel5,
      evidence.ghostWriting,
      evidence.ghostOrb,
    ]
  },
  {
    name: "Demon",
    evidence: [
      evidence.freezingTemperatures,
      evidence.ghostWriting,
      evidence.spiritBox,
    ]
  },
  {
    name: "Yurei",
    evidence: [
      evidence.freezingTemperatures,
      evidence.ghostWriting,
      evidence.ghostOrb,
    ]
  },
  {
    name: "Oni",
    evidence: [
      evidence.emfLevel5,
      evidence.ghostWriting,
      evidence.spiritBox,
    ]
  }
]