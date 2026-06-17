import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import Services from '@/components/Services'
import MidPageCTA from '@/components/MidPageCTA'
import SystemsShowcase from '@/components/SystemsShowcase'
import ToolsSection from '@/components/ToolsSection'
import OfferSection from '@/components/OfferSection'
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
      <Reveal><ProblemSection /></Reveal>
      <Reveal delay={100}><Services /></Reveal>
      <MidPageCTA />
      <Reveal delay={100}><SystemsShowcase /></Reveal>
      <ToolsSection />
      <Reveal delay={100}><OfferSection /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal delay={100}><CTA /></Reveal>
      <Footer />
      <BackToTop />
    </>
  )
}
