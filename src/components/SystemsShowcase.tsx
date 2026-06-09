'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Zap, ExternalLink, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react'

const automations = [
  { file: '4 day nurture.jpg', desc: 'Multi-day nurture sequence delivering course content and building trust over 4 days.' },
  { file: 'Abandoned Checkout Recovery.jpg', desc: 'Automated recovery workflow triggered when a prospect abandons the checkout process.' },
  { file: 'Auto Course Access Grant.png', desc: 'Grants instant course access upon payment confirmation — no manual intervention needed.' },
  { file: 'Behavior-Based Automation (Advanced Funnel Logic).jpg', desc: 'Advanced funnel logic that routes leads based on their actions and engagement.' },
  { file: 'Create Opportunity on Payment.png', desc: 'Automatically creates a CRM opportunity when a payment is successfully processed.' },
  { file: 'Payment Received Notification.jpg', desc: 'Sends real-time SMS and email notifications when a payment is received.' },
  { file: 'Smart Conditional Follow-Up.jpg', desc: 'Follow-up sequences that adapt based on lead behavior, tags, and pipeline stage.' },
  { file: 'Student Activation System.jpg', desc: 'Onboarding workflow that activates new students with credentials and orientation materials.' },
  { file: 'Tag Paid Students.jpg', desc: 'Automatically tags contacts who have completed payment for segmentation and tracking.' },
  { file: 'Upsell Buyer Tagging + Segmentation.jpg', desc: 'Tags buyers based on purchase behavior for targeted upsell campaigns.' },
  { file: 'Welcome Email.jpg', desc: 'Post-purchase welcome sequence that delivers receipts, resources, and next steps.' },
]

const ASSETS_PATH = '/new automation'

export default function SystemsShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isSectionHovered, setIsSectionHovered] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (file: string) => {
    const idx = automations.findIndex(a => a.file === file)
    setCurrentIndex(idx)
    setLightbox(file)
  }

  const goTo = (dir: number) => {
    const next = (currentIndex + dir + automations.length) % automations.length
    setCurrentIndex(next)
    setLightbox(automations[next].file)
  }

  const close = () => setLightbox(null)

  const fileName = (name: string) => name.replace(/\.(png|jpg|jpeg)$/i, '')

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goTo(-1)
      if (e.key === 'ArrowRight') goTo(1)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [lightbox, currentIndex])

  return (
    <section id="systems" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
            Automation Workflows
          </span>
          <h2 className="section-title">My Automation Systems</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Real automation workflows built in GoHighLevel — from lead capture and nurturing to payment processing and student onboarding.
          </p>
        </div>
        
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          onMouseEnter={() => setIsSectionHovered(true)}
          onMouseLeave={() => { setIsSectionHovered(false); setHoveredCard(null) }}
        >
          {automations.map((item, index) => {
            const isHovered = hoveredCard === item.file

            return (
              <article
                key={item.file}
                className="card card-hover group overflow-hidden animate-slide-up relative cursor-pointer"
                style={{ animationDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredCard(item.file)}
                onClick={() => openLightbox(item.file)}
              >
                <div className="relative h-44 sm:h-48 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <Image
                    src={`${ASSETS_PATH}/${encodeURIComponent(item.file)}`}
                    alt={fileName(item.file)}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      isSectionHovered && !isHovered
                        ? 'blur-sm scale-105 brightness-50'
                        : 'group-hover:scale-105'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-300 ${
                    isSectionHovered && !isHovered ? 'opacity-100' : 'opacity-60'
                  }`} />
                  
                  {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/90 text-secondary text-sm font-medium">
                        <Maximize2 className="w-4 h-4" />
                        Click to view
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={`flex items-start gap-3 transition-opacity duration-300 ${
                  isSectionHovered && !isHovered ? 'opacity-40' : ''
                }`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center mt-0.5 transition-all duration-300 ${
                    isHovered
                      ? 'bg-primary border-primary-light text-accent'
                      : 'bg-primary/20 border-primary/30 text-primary-light'
                  }`}>
                    <Zap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-accent mb-1.5 leading-tight">
                      {fileName(item.file)}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
            Build Your Automation
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
      
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8">
          {/* Close button */}
          <button onClick={close} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white/80 hover:bg-white/20 hover:text-white transition-all" aria-label="Close">
            <X className="w-5 h-5" />
          </button>

          {/* Prev arrow */}
          <button onClick={(e) => { e.stopPropagation(); goTo(-1) }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white/80 hover:bg-white/20 hover:text-white transition-all" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next arrow */}
          <button onClick={(e) => { e.stopPropagation(); goTo(1) }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white/80 hover:bg-white/20 hover:text-white transition-all" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 text-xs text-white/60 font-mono">
            {currentIndex + 1} / {automations.length}
          </div>

          {/* Image + caption */}
          <div className="flex flex-col items-center gap-4 max-w-full max-h-full">
            <img
              src={`${ASSETS_PATH}/${encodeURIComponent(lightbox)}`}
              alt={fileName(lightbox)}
              onError={(e) => console.error('Lightbox img load error:', e.currentTarget.src)}
              className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">{fileName(lightbox)}</h3>
              <p className="text-sm text-white/60 mt-1 max-w-lg">{automations[currentIndex]?.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}