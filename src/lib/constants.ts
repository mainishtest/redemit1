export const SITE_CONFIG = {
  name: 'Redemit One',
  tagline: 'Marketing That Fills Your Schedule',
  description: 'We help local businesses get more customers through high-converting websites, paid ads, and marketing systems that actually work. Based in Idaho, serving businesses everywhere.',
  url: 'https://redemit1.com',
  email: 'david@redemit1.com',
  phone: '(208) 810-4818',
  social: {
    twitter: 'https://twitter.com/redemitone',
    linkedin: 'https://linkedin.com/company/redemit-one',
    instagram: 'https://instagram.com/redemitone',
  },
  booking: {
    url: '#contact',
    label: 'Get Your Free Audit',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
] as const

export const SERVICES = [
  {
    slug: 'local-ads',
    title: 'Local Ads That Drive Calls & Leads',
    shortTitle: 'Local Ads',
    description: 'Facebook and Google ads built specifically for local businesses — targeting real customers in your service area, ready to buy.',
    longDescription: 'We build and manage ad campaigns on Meta and Google that are hyper-targeted to your local market. No wasted spend on people outside your area. Every dollar goes toward putting your business in front of homeowners and customers who need what you offer right now.',
    icon: 'BarChart3',
    features: [
      'Geo-targeted Facebook & Instagram ads',
      'Google Local Service Ads management',
      'Lead form campaigns that drive calls',
      'Monthly reporting you can actually understand',
      'Ad creative that speaks to your market',
      'Budget optimization for maximum leads',
    ],
    platforms: ['Meta Ads', 'Google Ads', 'Google Local Service Ads'],
  },
  {
    slug: 'websites',
    title: 'Websites That Convert Visitors Into Customers',
    shortTitle: 'Websites',
    description: 'High-converting websites and landing pages designed to turn clicks into calls, form fills, and booked jobs.',
    longDescription: 'Your website is your hardest-working employee — or it should be. We build fast, mobile-first websites and landing pages designed for one thing: getting the phone to ring. No template junk. No design-school nonsense. Just clean pages that convert.',
    icon: 'Target',
    features: [
      'Mobile-first, fast-loading design',
      'Clear calls-to-action on every page',
      'Built for Google SEO from day one',
      'Click-to-call and form integration',
      'Conversion-focused landing pages',
      'Ongoing optimization and updates',
    ],
    platforms: [],
  },
  {
    slug: 'lead-systems',
    title: 'Lead Generation Systems',
    shortTitle: 'Lead Systems',
    description: 'End-to-end systems that capture leads, follow up automatically, and keep your pipeline full — so you never run dry.',
    longDescription: 'Most local businesses lose leads because nobody follows up fast enough. We build automated systems that capture inquiries, send instant responses, and nurture prospects until they book — all without you lifting a finger.',
    icon: 'GitBranch',
    features: [
      'Automated lead capture forms',
      'Instant text & email follow-up',
      'CRM setup and management',
      'Review request automation',
      'Appointment booking integration',
      'Lead tracking and reporting',
    ],
    platforms: [],
  },
  {
    slug: 'brand-content',
    title: 'Brand & Content Strategy',
    shortTitle: 'Brand & Content',
    description: 'Messaging, creative, and content that positions your business as the obvious choice in your market.',
    longDescription: 'People buy from businesses they trust. We help you build that trust through sharp messaging, professional creative, and content that shows potential customers why you\'re the best option in town.',
    icon: 'PenTool',
    features: [
      'Brand messaging and positioning',
      'Social media content creation',
      'Google Business Profile optimization',
      'Photo and video direction',
      'Email marketing campaigns',
      'Review and reputation management',
    ],
    platforms: [],
  },
] as const

export const RESULTS = [
  { metric: '150+', label: 'Local Businesses Helped' },
  { metric: '3.8x', label: 'Avg. Lead Increase' },
  { metric: '47%', label: 'Avg. Revenue Growth' },
  { metric: '$2.4M+', label: 'Revenue Generated for Clients' },
] as const

export const CASE_STUDIES = [
  {
    slug: 'roofing-lead-gen',
    client: 'Local Roofing Company',
    industry: 'Home Services / Roofing',
    title: 'From 5 Leads/Month to 40+ With a New Website & Ads',
    description: 'Built a conversion-focused landing page and ran targeted Facebook and Google ads for a local roofing company. Went from almost no online leads to a full pipeline in 60 days.',
    metrics: [
      { label: 'Lead Increase', value: '8x' },
      { label: 'Cost Per Lead', value: '$18' },
      { label: 'Revenue Growth', value: '+340%' },
    ],
    tags: ['Website Build', 'Local Ads', 'Lead System'],
    image: '/images/case-study-1.jpg',
  },
  {
    slug: 'landscaping-growth',
    client: 'Landscaping & Hardscaping Co.',
    industry: 'Home Services / Landscaping',
    title: 'Booked Solid Through Fall With Targeted Local Ads',
    description: 'Launched a local ad campaign targeting homeowners in the Treasure Valley. Within 45 days, the business went from slow months to fully booked with a waitlist.',
    metrics: [
      { label: 'Leads Per Month', value: '60+' },
      { label: 'Booking Rate', value: '72%' },
      { label: 'Schedule Status', value: 'Fully Booked' },
    ],
    tags: ['Local Ads', 'Landing Page', 'Lead System'],
    image: '/images/case-study-2.jpg',
  },
  {
    slug: 'baseball-training',
    client: 'Youth Sports Training Facility',
    industry: 'Sports / Training',
    title: '3x Player Evaluations With a Rebuilt Online Presence',
    description: 'Redesigned the website for conversions, added a lead capture system, and ran parent-targeted Facebook ads. Tripled monthly player evaluations in the first quarter.',
    metrics: [
      { label: 'Evaluation Signups', value: '3x' },
      { label: 'Website Conversions', value: '+185%' },
      { label: 'Cost Per Signup', value: '$12' },
    ],
    tags: ['Website Rebuild', 'Local Ads', 'Brand Strategy'],
    image: '/images/case-study-3.jpg',
  },
] as const

export const TESTIMONIALS = [
  {
    quote: 'We were getting maybe 2-3 calls a week. After Redemit One rebuilt our site and started running ads, we\'re getting 3-4 calls a day. Completely changed our business.',
    name: 'Jake M.',
    role: 'Owner',
    company: 'Local Roofing Co.',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: 'I wasted thousands on marketing that didn\'t work before I found these guys. They built us a simple website, set up ads, and we were booked solid within two months.',
    name: 'Maria S.',
    role: 'Owner',
    company: 'Treasure Valley Landscaping',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: 'Other agencies just wanted to post on Instagram. Redemit One actually built a system that drives real leads. Our phone rings every day now.',
    name: 'Tom H.',
    role: 'General Manager',
    company: 'Idaho HVAC Services',
    image: '/images/testimonial-3.jpg',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Free Audit',
    description: 'We look at your current website, ads, and online presence. We\'ll tell you exactly what\'s working, what\'s not, and where you\'re leaving money on the table.',
    duration: 'Week 1',
  },
  {
    step: 2,
    title: 'Build Your Plan',
    description: 'We put together a clear, custom marketing plan for your business — the right website, the right ads, and the right follow-up system to fill your schedule.',
    duration: 'Week 2',
  },
  {
    step: 3,
    title: 'Launch & Drive Leads',
    description: 'We build everything, launch your campaigns, and start driving real leads to your business. You\'ll see calls and form fills within the first few weeks.',
    duration: 'Weeks 3-4',
  },
  {
    step: 4,
    title: 'Optimize & Grow',
    description: 'We track every lead, optimize what\'s working, cut what isn\'t, and help you grow month over month. No set-it-and-forget-it — we\'re in it with you.',
    duration: 'Ongoing',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What kind of businesses do you work with?',
    answer: 'We specialize in local service businesses — roofers, landscapers, HVAC companies, plumbers, electricians, contractors, fitness studios, dental offices, and more. If your customers are local and you want more of them, we can help.',
  },
  {
    question: 'How is Redemit One different from other marketing agencies?',
    answer: 'Most agencies sell you social media posts or generic SEO packages. We build complete marketing systems — a website that converts, ads that drive leads, and follow-up automation that closes them. Everything works together because we build it all.',
  },
  {
    question: 'What platforms do you run ads on?',
    answer: 'Primarily Facebook, Instagram, and Google — including Google Local Service Ads. These are the platforms where your local customers are actually searching and scrolling. We put your business in front of them at the right time.',
  },
  {
    question: 'How long before I start getting leads?',
    answer: 'Most clients start seeing leads within the first 2-3 weeks of launching. By month two, you should have a consistent, predictable flow of new inquiries coming in every week.',
  },
  {
    question: 'How much does it cost?',
    answer: 'It depends on what you need. A simple website and ad campaign starts at a few hundred per month plus ad spend. We\'ll give you a clear quote after your free audit — no hidden fees, no surprises.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. We work on month-to-month or 90-day cycles. We keep your business because we deliver results, not because you\'re locked into a contract. You can cancel anytime.',
  },
] as const
