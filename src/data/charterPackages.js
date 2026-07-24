export const charterPackages = [
  {
    id: 'half-day',
    name: 'Half Day Charter',
    duration: '4 hours',
    description: 'Perfect for families and first-timers. Offshore fishing with all gear included.',
    price: 1200,
    priceId: import.meta.env.VITE_STRIPE_PRICE_HALF_DAY || '',
    maxParty: 6,
  },
  {
    id: '3/4-day',
    name: '3/4 Day Charter',
    duration: '6 hours',
    description: '3/4-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1500,
    priceId: import.meta.env.VITE_STRIPE_PRICE_3_4_DAY || '',
    maxParty: 6,
  },
  {
    id: 'full-day',
    name: 'Full Day Charter',
    duration: '8 hours',
    description: 'Full-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1800,
    priceId: import.meta.env.VITE_STRIPE_PRICE_FULL_DAY || '',
    maxParty: 6,
  },
  {
    id: 'swordfishing',
    name: 'Swordfishing Charter',
    duration: '8 hours',
    description: 'Swordfishing adventure. Lunch and drinks included.',
    price: 3000,
    priceId: import.meta.env.VITE_STRIPE_PRICE_SWORD_FISHING || '',
    maxParty: 6,
  },  {
    id: 'reef-half-day',
    name: 'Reef Half Day Charter',
    duration: '4 hours',
    description: 'Perfect for families and first-timers. Offshore fishing with all gear included.',
    price: 1000,
    priceId: import.meta.env.VITE_STRIPE_PRICE_HALF_DAY || '',
    maxParty: 6,
  },
  {
    id: 'reef-3/4-day',
    name: 'Reef 3/4 Day Charter',
    duration: '6 hours',
    description: '3/4-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1200,
    priceId: import.meta.env.VITE_STRIPE_PRICE_3_4_DAY || '',
    maxParty: 6,
  },
  {
    id: 'reef-full-day',
    name: 'Reef Full Day Charter',
    duration: '8 hours',
    description: 'Full-day adventure with offshore and offshore options. Lunch and drinks included.',
    price: 1600,
    priceId: import.meta.env.VITE_STRIPE_PRICE_FULL_DAY || '',
    maxParty: 6,
  },
]

export const blockedDates = [
  '2026-07-04',
  '2026-12-25',
  '2026-12-31',
]

export const carouselImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    alt: 'Fishing rod over calm ocean waters at sunrise',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    alt: 'Charter boat heading out to sea',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1535591702428-a5991d0671bc?w=800&q=80',
    alt: 'Fresh catch displayed on the boat deck',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1505118380757-91f5eb5672de?w=800&q=80',
    alt: 'Deep blue ocean with fishing lines in the water',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1439793613812-9a91b9778257?w=800&q=80',
    alt: 'Angler reeling in a catch on a charter trip',
  },
]
