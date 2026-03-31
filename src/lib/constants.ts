export const SITE_CONFIG = {
  name: 'Redemit One',
  tagline: 'Growth Marketing That Scales Revenue',
  description: 'We build and scale paid acquisition systems for brands ready to grow. Media buying, offer creation, and funnel strategy — engineered for ROI.',
  url: 'https://redemit1.com',
  email: 'david@redemit1.com',
  phone: '(555) 000-0000',
  social: {
    twitter: 'https://twitter.com/redemitone',
    linkedin: 'https://linkedin.com/company/redemit-one',
    instagram: 'https://instagram.com/redemitone',
  },
  booking: {
    url: '#contact',
    label: 'Book a Strategy Call',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
] as const

export const SERVICES = [
  {
    slug: 'media-buying',
    title: 'Media Buying',
    shortTitle: 'Media Buying',
    description: 'Paid acquisition across Meta, Google, TikTok, and YouTube — built to scale profitably.',
    longDescription: 'We manage and scale ad spend across every major platform. Our approach combines creative testing, audience development, and bid strategy to drive consistent, profitable growth. No wasted spend. No vanity metrics.',
    icon: 'BarChart3',
    features: [
      'Full-funnel campaign architecture',
      'Creative testing frameworks',
      'Audience segmentation & lookalikes',
      'Daily optimization & reporting',
      'Cross-platform budget allocation',
      'ROAS-focused scaling strategy',
    ],
    platforms: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'YouTube Ads'],
  },
  {
    slug: 'offer-creation',
    title: 'Offer Creation & Strategy',
    shortTitle: 'Offer Strategy',
    description: 'We engineer offers that convert — pricing, positioning, and packaging designed to maximize revenue per visitor.',
    longDescription: 'Your offer is the single biggest lever in your business. We help you craft irresistible offers that increase conversion rates, average order value, and lifetime customer value. This is not copywriting — this is revenue engineering.',
    icon: 'Target',
    features: [
      'Offer architecture & positioning',
      'Pricing strategy optimization',
      'Bundle & upsell design',
      'Landing page offer mapping',
      'Competitive offer analysis',
      'A/B testing roadmaps',
    ],
    platforms: [],
  },
  {
    slug: 'funnel-strategy',
    title: 'Funnel Strategy & Build',
    shortTitle: 'Funnels',
    description: 'End-to-end acquisition funnels designed to convert cold traffic into paying customers.',
    longDescription: 'We design, build, and optimize full acquisition funnels — from the first ad click to the final purchase. Every step is engineered to reduce drop-off, increase engagement, and maximize the value of every visitor you pay for.',
    icon: 'GitBranch',
    features: [
      'Full-funnel architecture design',
      'Landing page development',
      'Email & SMS sequence strategy',
      'Checkout optimization',
      'Post-purchase flows',
      'Funnel analytics & tracking',
    ],
    platforms: [],
  },
  {
    slug: 'creative-copy',
    title: 'Creative & Copywriting',
    shortTitle: 'Creative & Copy',
    description: 'Performance creative and direct-response copy that drives clicks, engagement, and conversions.',
    longDescription: 'Great ads need great creative. We produce thumb-stopping ad creative and conversion-focused copy across every touchpoint — ads, landing pages, emails, and beyond. Every word and image is tested and optimized for performance.',
    icon: 'PenTool',
    features: [
      'Ad creative production',
      'Direct-response copywriting',
      'Landing page copy',
      'Email sequence writing',
      'UGC scripting & briefs',
      'Creative performance analysis',
    ],
    platforms: [],
  },
] as const

export const RESULTS = [
  { metric: '$12M+', label: 'Ad Spend Managed' },
  { metric: '4.2x', label: 'Average ROAS' },
  { metric: '340%', label: 'Avg. Revenue Growth' },
  { metric: '50+', label: 'Brands Scaled' },
] as const

export const CASE_STUDIES = [
  {
    slug: 'ecommerce-scale',
    client: 'DTC Skincare Brand',
    industry: 'E-Commerce / Beauty',
    title: 'From $40K/mo to $280K/mo in 6 Months',
    description: 'Scaled a direct-to-consumer skincare brand 7x through restructured media buying and a completely rebuilt offer stack.',
    metrics: [
      { label: 'Revenue Growth', value: '7x' },
      { label: 'ROAS', value: '4.8x' },
      { label: 'CAC Reduction', value: '-42%' },
    ],
    tags: ['Media Buying', 'Offer Strategy', 'Funnel Build'],
    image: '/images/case-study-1.jpg',
  },
  {
    slug: 'saas-acquisition',
    client: 'B2B SaaS Platform',
    industry: 'SaaS / Technology',
    title: 'Cut CAC by 60% While Tripling Trial Signups',
    description: 'Rebuilt the entire acquisition funnel for a B2B SaaS platform, reducing cost per trial from $120 to $48.',
    metrics: [
      { label: 'CAC Reduction', value: '-60%' },
      { label: 'Trial Signups', value: '3x' },
      { label: 'Activation Rate', value: '+85%' },
    ],
    tags: ['Funnel Strategy', 'Creative & Copy', 'Media Buying'],
    image: '/images/case-study-2.jpg',
  },
  {
    slug: 'info-product-launch',
    client: 'Education Company',
    industry: 'Info Products / Education',
    title: '$1.2M Launch with a 5.6x ROAS',
    description: 'Engineered the offer, built the funnel, and managed the media buy for a seven-figure course launch.',
    metrics: [
      { label: 'Launch Revenue', value: '$1.2M' },
      { label: 'ROAS', value: '5.6x' },
      { label: 'Email List Growth', value: '+18K' },
    ],
    tags: ['Offer Creation', 'Funnel Build', 'Media Buying'],
    image: '/images/case-study-3.jpg',
  },
] as const

export const TESTIMONIALS = [
  {
    quote: 'Redemit One completely transformed our ad strategy. We went from burning cash to scaling profitably in under 90 days.',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'Glow Labs',
    image: '/images/testimonial-1.jpg',
  },
  {
    quote: 'They don\'t just run ads — they rebuilt our entire acquisition engine. The offer work alone doubled our conversion rate.',
    name: 'Marcus Rivera',
    role: 'Founder',
    company: 'ScaleUp Academy',
    image: '/images/testimonial-2.jpg',
  },
  {
    quote: 'Most agencies send you a dashboard and call it a day. Redemit One is in the trenches with you, optimizing daily.',
    name: 'Jessica Park',
    role: 'VP Marketing',
    company: 'NovaTech',
    image: '/images/testimonial-3.jpg',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Diagnose',
    description: 'We audit your current acquisition system — ads, offers, funnels, and tracking. We find what\'s leaking money and where the biggest opportunities are.',
    duration: 'Week 1',
  },
  {
    step: 2,
    title: 'Architect',
    description: 'We design a complete growth plan — the right offer, the right funnel, and the right media strategy to hit your revenue targets.',
    duration: 'Week 2',
  },
  {
    step: 3,
    title: 'Build & Launch',
    description: 'We build everything — creative, landing pages, email sequences, and campaign structure. Then we launch and start driving results.',
    duration: 'Weeks 3-4',
  },
  {
    step: 4,
    title: 'Scale & Optimize',
    description: 'Once we find winners, we scale them aggressively. Daily optimization, creative refreshes, and strategic testing to compound growth.',
    duration: 'Ongoing',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What kind of businesses do you work with?',
    answer: 'We work with brands already generating revenue that are ready to scale their paid acquisition. Typically e-commerce brands, SaaS companies, and info-product businesses spending $10K+/month on ads or ready to start.',
  },
  {
    question: 'How is Redemit One different from other agencies?',
    answer: 'Most agencies just manage your ad accounts. We engineer your entire acquisition system — the offer, the funnel, the creative, and the media buy. Everything works together because we build it all.',
  },
  {
    question: 'What platforms do you run ads on?',
    answer: 'Primarily Meta (Facebook & Instagram), Google, TikTok, and YouTube. We go where your customers are and where the math works for your business.',
  },
  {
    question: 'How long before we see results?',
    answer: 'Most clients see meaningful improvements within the first 30 days. Full-scale optimization typically takes 60-90 days as we test, refine, and scale what works.',
  },
  {
    question: 'What\'s the minimum ad spend you work with?',
    answer: 'We typically work with brands spending $10K/month or more on paid acquisition. If you\'re below that, our Resources section has free guides to help you get there.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'We work on 90-day engagement cycles. No long-term lock-ins — we earn your business every quarter through results.',
  },
] as const
