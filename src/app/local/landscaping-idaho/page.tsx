import type { Metadata } from 'next'
import { PageContent } from './page-content'

export const metadata: Metadata = {
  title: 'Landscaping Marketing — Meridian, Boise & Nampa | Redemit One',
  description:
    'Get more landscaping leads in the Treasure Valley. Free website & marketing audit for landscaping and hardscaping businesses in Meridian, Boise, and Nampa, Idaho.',
  openGraph: {
    title: 'Landscaping Marketing — Meridian, Boise & Nampa',
    description:
      'Get more landscaping leads in the Treasure Valley. Free website & marketing audit for landscaping and hardscaping businesses.',
  },
}

export default function LandscapingIdahoPage() {
  return <PageContent />
}
