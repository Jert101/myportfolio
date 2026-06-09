import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SystemsShowcase from '@/components/SystemsShowcase'
import CaseStudies from '@/components/CaseStudies'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal delay={100}><SystemsShowcase /></Reveal>
      <Reveal delay={100}><CaseStudies /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal delay={100}><CTA /></Reveal>
      <Footer />
      <BackToTop />
    </>
  )
}