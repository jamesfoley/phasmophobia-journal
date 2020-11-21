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
    name: "Spirit",
    evidence: [
      evidence.spiritBox,
      evidence.fingerprints,
      evidence.ghostWriting,
    ],
    notes: [
      'Smudge sticks will stop it attacking for a long period of time.'
    ]
  },
  {
    name: "Wraith",
    evidence: [
      evidence.fingerprints,
      evidence.freezingTemperatures,
      evidence.spiritBox,
    ],
    notes: [
      'Known to travel through walls.',
      'Almost never touches the ground so can\'t be tracked by footsteps.',
      'Toxic reaction to salt.'
    ]
  },
  {
    name: "Phantom",
    evidence: [
      evidence.emfLevel5,
      evidence.ghostOrb,
      evidence.freezingTemperatures,
    ],
    notes: [
      'Commonly summoned by a Ouija Board.',
      'Looking at it will considerably drop your sanity.',
      'Taking a photo of it will make it temporarily disappear.'
    ]
  },
  {
    name: "Poltergeist",
    evidence: [
      evidence.spiritBox,
      evidence.fingerprints,
      evidence.ghostOrb
    ],
    notes: [
      'Can manipulate objects around it.',
      'Throw multiple objects at once.',
      'Ineffective in an empty room.'
    ]
  },
  {
    name: "Banshee",
    evidence: [
      evidence.emfLevel5,
      evidence.fingerprints,
      evidence.freezingTemperatures
    ],
    notes: [
      'Stalks prey one at a time until making a kill.',
      'Targets one person at a time.',
      'Fears Crucifix and is less aggressive near one.'
    ]
  },
  {
    name: "Jinn",
    evidence: [
      evidence.spiritBox,
      evidence.ghostOrb,
      evidence.emfLevel5
    ],
    notes: [
      'Travels at significant speed.',
      'Will travel faster if victim is far away.',
      'Turning off power source will prevent it from using its ability.'
    ]
  },
  {
    name: "Mare",
    evidence: [
      evidence.spiritBox,
      evidence.ghostOrb,
      evidence.freezingTemperatures
    ],
    notes: [
      'Increased chance of attacking in the dark.',
      'Turning lights on will lower its chance to attack.'
    ]
  },
  {
    name: "Revenant",
    evidence: [
      evidence.emfLevel5,
      evidence.fingerprints,
      evidence.ghostWriting
    ],
    notes: [
      'Travels at a significantly faster speed when hunting.',
      'Hiding from it will cause it to move slowly'
    ]
  },
  {
    name: "Shade",
    evidence: [
      evidence.emfLevel5,
      evidence.ghostOrb,
      evidence.ghostWriting
    ],
    notes: [
      'Shy ghost and is harder to find.',
      'Will not hunt if multiple people are nearby.'
    ]
  },
  {
    name: "Demon",
    evidence: [
      evidence.spiritBox,
      evidence.ghostWriting,
      evidence.freezingTemperatures
    ],
    notes: [
      'Will attack more often than any other ghost.',
      'Ouija Board will not lower sanity for successful questions.'
    ]
  },
  {
    name: "Yurei",
    evidence: [
      evidence.ghostOrb,
      evidence.ghostWriting,
      evidence.freezingTemperatures
    ],
    notes: [
      'Strong effect on sanity.',
      'Smudging will cause it to not wander around the location for a long time.'
    ]
  },
  {
    name: "Oni",
    evidence: [
      evidence.emfLevel5,
      evidence.spiritBox,
      evidence.ghostWriting
    ],
    notes: [
      'More active with people nearby.',
      'Moves objects at high speed.',
      'Easy to find due to being more active.'
    ]
  }
]