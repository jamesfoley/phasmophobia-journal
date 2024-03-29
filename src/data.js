export const evidence = [
  {
    key: 'freezingTemperatures',
    name: 'Freezing Temperatures'
  },
  {
    key: 'spiritBox',
    name: 'Spirit Box'
  },
  {
    key: 'fingerprints',
    name: 'Fingerprints'
  },
  {
    key: 'emfLevel5',
    name: 'EMF Level 5'
  },
  {
    key: 'ghostOrb',
    name: 'Ghost Orb'
  },
  {
    key: 'ghostWriting',
    name: 'Ghost Writing'
  },
  {
    key: 'dotsProjector',
    name: 'D.O.T.S Projector'
  },
]

export const evidenceMap = {}
evidence.forEach(item => {
  evidenceMap[item.key] = item
})

export const ghosts = [
  {
    name: "Spirit",
    evidence: [
      evidenceMap.emfLevel5,
      evidenceMap.spiritBox,
      evidenceMap.ghostWriting,
    ],
    notes: [
      'Smudge sticks will stop it attacking for a long period of time.'
    ]
  },
  {
    name: "Wraith",
    evidence: [
      evidenceMap.emfLevel5,
      evidenceMap.spiritBox,
      evidenceMap.dotsProjector,
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
      evidenceMap.spiritBox,
      evidenceMap.fingerprints,
      evidenceMap.dotsProjector,
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
      evidenceMap.spiritBox,
      evidenceMap.fingerprints,
      evidenceMap.ghostWriting
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
      evidenceMap.fingerprints,
      evidenceMap.ghostOrb,
      evidenceMap.dotsProjector
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
      evidenceMap.emfLevel5,
      evidenceMap.fingerprints,
      evidenceMap.freezingTemperatures
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
      evidenceMap.spiritBox,
      evidenceMap.ghostOrb,
      evidenceMap.ghostWriting
    ],
    notes: [
      'Increased chance of attacking in the dark.',
      'Turning lights on will lower its chance to attack.'
    ]
  },
  {
    name: "Revenant",
    evidence: [
      evidenceMap.ghostOrb,
      evidenceMap.ghostWriting,
      evidenceMap.freezingTemperatures
    ],
    notes: [
      'Travels at a significantly faster speed when hunting.',
      'Hiding from it will cause it to move slowly.'
    ]
  },
  {
    name: "Shade",
    evidence: [
      evidenceMap.emfLevel5,
      evidenceMap.ghostOrb,
      evidenceMap.freezingTemperatures
    ],
    notes: [
      'Shy ghost and is harder to find.',
      'Will not hunt if multiple people are nearby.'
    ]
  },
  {
    name: "Demon",
    evidence: [
      evidenceMap.fingerprints,
      evidenceMap.ghostWriting,
      evidenceMap.freezingTemperatures
    ],
    notes: [
      'Will attack more often than any other ghost.',
      'Ouija Board will not lower sanity for successful questions.'
    ]
  },
  {
    name: "Yurei",
    evidence: [
      evidenceMap.ghostOrb,
      evidenceMap.freezingTemperatures,
      evidenceMap.dotsProjector
    ],
    notes: [
      'Strong effect on sanity.',
      'Smudging will cause it to not wander around the location for a long time.'
    ]
  },
  {
    name: "Oni",
    evidence: [
      evidenceMap.emfLevel5,
      evidenceMap.freezingTemperatures,
      evidenceMap.dotsProjector
    ],
    notes: [
      'More active with people nearby.',
      'Moves objects at high speed.',
      'Easy to find due to being more active.'
    ]
  },
  {
    name: "Hantu",
    evidence: [
      evidenceMap.fingerprints,
      evidenceMap.ghostOrb,
      evidenceMap.freezingTemperatures
    ],
    notes: [
      'Fast in lower temperatures.',
      'Slow in higher temperatures.'
    ]
  },
  {
    name: "Yokai",
    evidence: [
      evidenceMap.spiritBox,
      evidenceMap.ghostOrb,
      evidenceMap.dotsProjector
    ],
    notes: [
      'Talking near a Yokai will anger it and increase its chance of attacking.',
      'When hunting a Yokai can only hear voices close to it.'
    ]
  },
  {
    name: "Goryo",
    evidence: [
      evidenceMap.emfLevel5,
      evidenceMap.fingerprints,
      evidenceMap.dotsProjector
    ],
    notes: [
      'Only show itself on camera if no people nearby.',
      'Rarely seen far from place of death.'
    ]
  },
  {
    name: "Myling",
    evidence: [
      evidenceMap.emfLevel5,
      evidenceMap.fingerprints,
      evidenceMap.ghostWriting
    ],
    notes: [
      'Quieter when hunting.',
      'Frequently make paranormal sounds.'
    ]
  }
]