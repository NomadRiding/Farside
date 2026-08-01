export const charterPackages = [
  {
    id: 'half-day',
    category: 'Off-shore',
    name: 'Half Day Charter',
    duration: '4 hours',
    description: 'Perfect for families and first-timers. Offshore fishing with all gear included.',
    price: 1200,
    priceId: import.meta.env.VITE_STRIPE_PRICE_HALF_DAY || '',
    maxParty: 6,
  },
  {
    id: '3/4-day',
    category: 'Off-shore',
    name: '3/4 Day Charter',
    duration: '6 hours',
    description: '3/4-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1500,
    priceId: import.meta.env.VITE_STRIPE_PRICE_3_4_DAY || '',
    maxParty: 6,
  },
  {
    id: 'full-day',
    category: 'Off-shore',
    name: 'Full Day Charter',
    duration: '8 hours',
    description: 'Full-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1800,
    priceId: import.meta.env.VITE_STRIPE_PRICE_FULL_DAY || '',
    maxParty: 6,
  },
  {
    id: 'swordfishing',
    category: 'Swordfish Special',
    name: 'Swordfishing Charter',
    duration: '8 hours',
    description: 'Swordfishing adventure. Lunch and drinks included.',
    price: 3000,
    priceId: import.meta.env.VITE_STRIPE_PRICE_SWORD_FISHING || '',
    maxParty: 6,
  },
  {
    id: 'reef-half-day',
    category: 'Reef Fishing',
    name: 'Reef Half Day Charter',
    duration: '4 hours',
    description: 'Perfect for families and first-timers. Offshore fishing with all gear included.',
    price: 1000,
    priceId: import.meta.env.VITE_STRIPE_PRICE_HALF_DAY || '',
    maxParty: 6,
  },
  {
    id: 'reef-3/4-day',
    category: 'Reef Fishing',
    name: 'Reef 3/4 Day Charter',
    duration: '6 hours',
    description: '3/4-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1200,
    priceId: import.meta.env.VITE_STRIPE_PRICE_3_4_DAY || '',
    maxParty: 6,
  },
  {
    id: 'reef-full-day',
    category: 'Reef Fishing',
    name: 'Reef Full Day Charter',
    duration: '8 hours',
    description: 'Full-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1600,
    priceId: import.meta.env.VITE_STRIPE_PRICE_FULL_DAY || '',
    maxParty: 6,
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

export const blockedDates = [
  '2026-07-04',
  '2026-12-25',
  '2026-12-31',
]
