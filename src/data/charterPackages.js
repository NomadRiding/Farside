export const charterPackages = [
  {
    id: 'half-day',
    category: 'Off-shore',
    name: 'Half Day Charter',
    duration: '4 hours',
    description: 'Perfect for families and first-timers. Offshore fishing with all gear included.',
    price: 1000,
    maxParty: 6,
    bookingUrl:
      'https://book.squareup.com/appointments/dh80r9r3o5w1kf/location/LAT51S1T60TGM/services/YKNHZNUVQWAZV2M7XYTGS73O',
  },
  {
    id: '3/4-day',
    category: 'Off-shore',
    name: '3/4 Day Charter',
    duration: '6 hours',
    description: '3/4-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1250,
    maxParty: 6,
    bookingUrl:
      'https://book.squareup.com/appointments/dh80r9r3o5w1kf/location/LAT51S1T60TGM/services/FUHQV53JOAHWJOGN5VOOFAOJ',
  },
  {
    id: 'full-day',
    category: 'Off-shore',
    name: 'Full Day Charter',
    duration: '8 hours',
    description: 'Full-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1500,
    maxParty: 6,
    bookingUrl:
      'https://book.squareup.com/appointments/dh80r9r3o5w1kf/location/LAT51S1T60TGM/services/XKKKCL7K26XCORVH32XT5HK4',
  },
  {
    id: 'swordfishing',
    category: 'Swordfish Special',
    name: 'Swordfishing Charter',
    duration: '8 hours',
    description: 'Swordfishing adventure. Lunch and drinks included.',
    price: 3000,
    maxParty: 6,
    bookingUrl:
      'https://book.squareup.com/appointments/dh80r9r3o5w1kf/location/LAT51S1T60TGM/services/DLQLZVQYI4QKUHBGBNHYV5VH',
  },
]

export const charterPackageGroups = charterPackages.reduce((groups, pkg) => {
  const existingGroup = groups.find((group) => group.label === pkg.category)

  if (existingGroup) {
    existingGroup.packages.push(pkg)
    return groups
  }

  groups.push({
    label: pkg.category,
    packages: [pkg],
  })

  return groups
}, [])
