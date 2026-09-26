export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  badge?: string;
  initials: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  intensity: 'High' | 'Moderate' | 'Intense';
  duration: string;
  focus: string[];
  idealFor: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  badge?: string;
  popular?: boolean;
  priceNote: string;
  benefits: string[];
}

export const GYM_DETAILS = {
  name: 'ALPHA FITNESS',
  tagline: 'Forge Strength. Unleash Your Alpha.',
  rating: 4.9,
  reviewsCount: 349,
  phone: '089768 63040',
  phoneFormatted: '+91 89768 63040',
  rawPhone: '918976863040',
  address: {
    line1: 'Shop no: 5, Plot no: 105',
    line2: 'Jagatguru Aadi Shankracharya Marg',
    landmark: 'Opposite to NMMC Fire Brigade',
    area: 'Nerul East, Sector 27',
    city: 'Nerul, Navi Mumbai',
    pincode: '400706',
    fullAddress:
      'Shop no: 5, Plot no: 105, Jagatguru Aadi Shankracharya Marg, opposite to nmmc fire brigade, Nerul East, Sector 27, Nerul, Navi Mumbai, Maharashtra 400706',
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Alpha+fitness+Nerul+East+Sector+27+Navi+Mumbai',
  whatsappUrl:
    'https://wa.me/918976863040?text=Hi%20Alpha%20Fitness%2C%20I%20am%20interested%20in%20joining%20the%20gym.%20Please%20share%20membership%20details%20and%20trial%20session.',
  hours: {
    weekday: 'Mon – Sat: 6:00 AM – 11:00 PM',
    sunday: 'Sunday: 9:00 AM – 12:00 PM & 4:00 PM – 9:00 PM',
  },
};

export const HERO_SLIDES = [
  {
    id: 'strength',
    image: '/images/alpha_strength_gym_1790420145375.jpg',
    headline: 'DISCIPLINE IS THE BRIDGE TO ACCOMPLISHMENT',
    subheadline:
      "Nerul's premier heavy-duty strength facility. Built with commercial-grade biomechanical red & black equipment for dedicated lifters.",
    highlight: 'Commercial Strength Machines',
  },
  {
    id: 'free-weights',
    image: '/images/alpha_free_weights_1790420103024.jpg',
    headline: 'WHERE RAW IRON MEETS RELENTLESS AMBITION',
    subheadline:
      'Calibrated Olympic barbells, multi-tier dumbbells, and heavy power racks designed for progressive overload and pure performance.',
    highlight: 'Heavy Dumbbells & Olympic Racks',
  },
  {
    id: 'transformation',
    image: '/images/alpha_athlete_training_1790420118033.jpg',
    headline: 'FORGE STRENGTH. UNLEASH YOUR ALPHA.',
    subheadline:
      'Certified master trainers providing form correction, custom workout periodization, and science-backed nutrition guidance.',
    highlight: 'Certified Master Personal Training',
  },
  {
    id: 'cardio-conditioning',
    image: '/images/alpha_functional_cardio_1790420131466.jpg',
    headline: 'CONSISTENCY OVER INTENSITY. REAL RESULTS.',
    subheadline:
      'Spacious air-conditioned cardio theater, functional turf, and high-energy conditioning zones to burn fat and build stamina.',
    highlight: 'Cardio Deck & Functional Turf',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Selectorized Strength Suite',
    category: 'Strength Equipment',
    description:
      'Custom red & black heavy-duty leg extension, curl, and press stations engineered for exact muscular isolation.',
    image: '/images/alpha_strength_gym_1790420145375.jpg',
  },
  {
    id: 'gal-2',
    title: 'Olympic Free Weights Floor',
    category: 'Free Weights',
    description:
      'Multi-tier polyurethane dumbbells, adjustable heavy flat/incline benches, and Olympic lifting platforms.',
    image: '/images/alpha_free_weights_1790420103024.jpg',
  },
  {
    id: 'gal-3',
    title: 'Personal Training & Transformation',
    category: 'Training Floor',
    description:
      'Dedicated coaching zones with expert floor trainers focusing on posture, execution, and progressive overload.',
    image: '/images/alpha_athlete_training_1790420118033.jpg',
  },
  {
    id: 'gal-4',
    title: 'Cardio & Functional Turf',
    category: 'Cardio & Stamina',
    description:
      'High-performance commercial treadmills, cross trainers, battle ropes, and kettlebells for conditioning.',
    image: '/images/alpha_functional_cardio_1790420131466.jpg',
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'hypertrophy',
    title: 'Hypertrophy & Strength Training',
    subtitle: 'Build Dense Muscle & Raw Power',
    description:
      'Structured progressive overload routines focusing on compound lifts and selectorized isolation machines for maximum hypertrophy with joint safety.',
    intensity: 'Intense',
    duration: '45–60 mins',
    focus: ['Compound Lifts', 'Hypertrophy Splits', 'Progressive Overload', 'Form Correction'],
    idealFor: 'Anyone looking to build muscular density, raw strength, and athletic posture.',
  },
  {
    id: 'transformation',
    title: '1-on-1 Personal Coaching',
    subtitle: 'Tailored Transformation Journey',
    description:
      'Dedicated certified trainer with weekly body composition analysis, progressive phase adjustments, and custom Indian macro-based diet plans.',
    intensity: 'Intense',
    duration: '60 mins',
    focus: ['1-on-1 Spotting', 'Weekly Check-ins', 'Nutrition Blueprint', 'Injury Prevention'],
    idealFor: 'Individuals aiming for guaranteed physical transformation and accountability.',
  },
  {
    id: 'fatloss',
    title: 'Fat Shred & Conditioning',
    subtitle: 'Metabolic Stamina & Lean Definition',
    description:
      'High-energy hybrid routines blending functional resistance training, battle ropes, turf drills, and cardiovascular intervals to torch body fat.',
    intensity: 'High',
    duration: '45 mins',
    focus: ['HIIT Circuits', 'Calorie Burn', 'Endurance Building', 'Core Tightening'],
    idealFor: 'Targeting fat loss, cardiovascular endurance, and rapid body recomp.',
  },
  {
    id: 'beginner',
    title: 'Beginner Induction & Mastery',
    subtitle: 'Zero Intimidation Onboarding',
    description:
      'Step-by-step 14-day guided orientation on all machines, biomechanical safety, warm-up mobility, and foundation habits to lift with confidence.',
    intensity: 'Moderate',
    duration: '40 mins',
    focus: ['Machine Setup', 'Breathing Technique', 'Mobility Drills', 'Confidence Building'],
    idealFor: 'First-time gym goers or those restarting their fitness journey.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: '4.9★ Google Rating (349+ Reviews)',
    description:
      'One of the highest-rated fitness centers in Nerul, recognized for verified member satisfaction and authentic transformation results.',
  },
  {
    title: 'Heavy-Duty Biomechanical Machines',
    description:
      'Commercial-grade red & black selectorized machines and calibrated plates designed for precise resistance curve and joint longevity.',
  },
  {
    title: 'Dedicated Certified Floor Trainers',
    description:
      'Our coaches do not sit behind a desk; they are actively on the floor guiding form, adjusting machine pins, and providing safety spots.',
  },
  {
    title: 'Early 6 AM to Late 11 PM Timings',
    description:
      'Seamless access for early birds before office and night lifters who want to train peacefully after a busy workday.',
  },
  {
    title: 'Dual AC & Sanitized Hygiene',
    description:
      'Continuous air circulation, fresh oxygen flow, sanitized equipment wipe-downs, and clean locker changing spaces.',
  },
  {
    title: 'Customized Indian Nutrition Plans',
    description:
      'Realistic diet strategies tailored to Indian vegetarian and non-vegetarian routines to hit daily protein without expensive supplements.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Sameer Kulkarni',
    rating: 5,
    date: '1 week ago',
    initials: 'SK',
    badge: 'Member for 8 Months',
    comment:
      'Alpha Fitness is by far the best gym in Nerul East! The red and black machines are top notch, super smooth pulley systems and sturdy benches. Trainers are very helpful and correct your posture without pushing for PT constantly.',
  },
  {
    id: 'rev-2',
    name: 'Pooja Deshmukh',
    rating: 5,
    date: '3 weeks ago',
    initials: 'PD',
    badge: 'Transformation Winner',
    comment:
      'Lost 9 kgs in 4 months! The environment is very comfortable for women, air conditioning is always on, and the trainers genuinely care about your progress and diet plan. Highly recommended!',
  },
  {
    id: 'rev-3',
    name: 'Rahul Shetty',
    rating: 5,
    date: '1 month ago',
    initials: 'RS',
    badge: 'Lifter',
    comment:
      'The gym opens sharp at 6 AM which is perfect for my shift. Proper heavy dumbbells, calibrated Olympic bars, and spacious workout zones opposite the fire station. Great vibe and 4.9 rating is totally deserved.',
  },
  {
    id: 'rev-4',
    name: 'Aniket Shinde',
    rating: 5,
    date: '2 months ago',
    initials: 'AS',
    badge: 'Member',
    comment:
      'Great equipment quality and clean changing rooms. The owner and staff are humble and supportive. If you live around Sector 27 Nerul, this is the only gym worth your time.',
  },
  {
    id: 'rev-5',
    name: 'Neha Nair',
    rating: 5,
    date: '3 months ago',
    initials: 'NN',
    badge: 'Regular Member',
    comment:
      'Awesome energetic music and lighting. Even during peak evening hours, the crowd is disciplined and you don’t have to wait 15 minutes for a machine. 5 stars all the way!',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: '1 Month Kickstart',
    duration: '1 Month Access',
    priceNote: 'Flexible Trial Commitment',
    benefits: [
      'Full Gym Floor Access (Mon–Sun)',
      'Free Fitness & Body Fat Analysis',
      'Beginner Machine Induction Session',
      'Locker & Shower Facility Access',
      'General Trainer Floor Assistance',
    ],
  },
  {
    id: 'quarterly',
    name: '3 Months Momentum',
    duration: '3 Months Access',
    badge: 'Most Popular',
    popular: true,
    priceNote: 'Ideal for 90-Day Transformation',
    benefits: [
      'Full Gym Floor Access (Mon–Sun)',
      'Customized Workout Split Routine',
      'Macro & Nutrition Diet Blueprint',
      'Bi-Weekly Progress Body Composition Check',
      'Locker & Shower Facility Access',
      '1 Complimentary 1-on-1 PT Session',
    ],
  },
  {
    id: 'biannual',
    name: '6 Months Elite',
    duration: '6 Months Access',
    badge: 'Great Value',
    priceNote: 'Serious Long-Term Progress',
    benefits: [
      'All 3-Month Features Included',
      'Advanced Periodized Strength Programming',
      'Monthly Diet Revision for Plateau Breaking',
      '1 Free Membership Freeze Week (Travel)',
      '2 Complimentary 1-on-1 PT Sessions',
      'Alpha Member Merchandise / Shaker',
    ],
  },
  {
    id: 'annual',
    name: '12 Months Alpha Legend',
    duration: '1 Full Year Access',
    badge: 'Best Savings',
    priceNote: 'Maximum Value per Month',
    benefits: [
      'All 6-Month Elite Features Included',
      'Lowest Effective Daily Cost',
      'Up to 30 Days Membership Freeze Allowance',
      '4 Complimentary 1-on-1 PT Sessions',
      'Quarterly InBody Assessment & Consultation',
      'Priority Booking for Coaching Slots',
    ],
  },
];

export const FAQS = [
  {
    q: 'What are the exact gym timings at Alpha Fitness?',
    a: 'We are open Monday to Saturday continuously from 6:00 AM to 11:00 PM. On Sundays, we are open in two slots: 9:00 AM to 12:00 PM (Morning) and 4:00 PM to 9:00 PM (Evening).',
  },
  {
    q: 'Where is Alpha Fitness located in Nerul?',
    a: 'We are situated at Shop no. 5, Plot no. 105, Jagatguru Aadi Shankracharya Marg, directly opposite to the NMMC Fire Brigade in Nerul East, Sector 27, Navi Mumbai.',
  },
  {
    q: 'Can I get a free trial workout before joining?',
    a: 'Yes! We offer a complimentary 1-Day Trial Pass so you can experience our heavy-duty machines, trainers, and clean environment firsthand.',
  },
  {
    q: 'Are personal trainers available for beginners?',
    a: 'Absolutely. Every new member receives a complimentary machine induction and baseline assessment. We also have certified master personal trainers available for 1-on-1 transformation packages.',
  },
  {
    q: 'Do you provide parking and changing facilities?',
    a: 'Yes, we have dedicated vehicle parking space outside the facility, hygienic locker rooms, clean washrooms, and filtered drinking water.',
  },
];
