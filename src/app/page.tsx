import { Hero } from '@/components/sections/hero'
import { ServicesOverview } from '@/components/sections/services-overview'
import { Process } from '@/components/sections/process'
import { CaseStudiesPreview } from '@/components/sections/case-studies-preview'
import { WhyUs } from '@/components/sections/why-us'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CaseStudiesPreview />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
    </>
  )
}
