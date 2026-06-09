'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Zap, ExternalLink, X, Maximize2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

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
  const [zoom, setZoom] = useState(1)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 })
  const scrollRef = useRef<HTMLDivElement>(null)

  const openLightbox = (file: string) => {
    const idx = automations.findIndex(a => a.file === file)
    setCurrentIndex(idx)
    setLightbox(file)
    setZoom(1)
    setImgSize({ w: 0, h: 0 })
  }

  const goTo = (dir: number) => {
    const next = (currentIndex + dir + automations.length) % automations.length
    setCurrentIndex(next)
    setLightbox(automations[next].file)
    setZoom(1)
    setImgSize({ w: 0, h: 0 })
    if (scrollRef.current) { scrollRef.current.scrollTop = 0; scrollRef.current.scrollLeft = 0 }
  }

  const close = () => { setLightbox(null); setZoom(1) }

  const fileName = (name: string) => name.replace(/\.(png|jpg|jpeg)$/i, '')

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goTo(-1)
      if (e.key === 'ArrowRight') goTo(1)
      if (e.key === '+' || e.key === '=') setZoom(z => Math.min(4, z + 0.25))
      if (e.key === '-') setZoom(z => Math.max(1, z - 0.25))
      if (e.key === '0') setZoom(1)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [lightbox, currentIndex])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current || zoom <= 1) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      scrollLeft: scrollRef.current.scrollLeft,
      scrollTop: scrollRef.current.scrollTop,
    })
  }, [zoom])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    const dx = e.clientX - dragStart.x
    const dy = e.clientY - dragStart.y
    scrollRef.current.scrollLeft = dragStart.scrollLeft - dx
    scrollRef.current.scrollTop = dragStart.scrollTop - dy
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

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
                <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <Image
                    src={`${ASSETS_PATH}/${encodeURIComponent(item.file)}`}
                    alt={item.file.replace('.png', '')}
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
                      {item.file.replace('.png', '')}
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
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 animate-fade-in select-none"
          onClick={close}
        >
          {/* Top bar */}
          <div className="relative z-20 flex items-center justify-between px-4 lg:px-8 py-3 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
            <div className="flex items-center gap-4">
              <button onClick={close} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-800 text-gray-400 hover:text-accent transition-all" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-300 hidden sm:inline">{fileName(lightbox)}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 tabular-nums">{currentIndex + 1} / {automations.length}</span>
              <div className="flex items-center gap-1 bg-gray-900 rounded-xl border border-gray-800 p-1">
                <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(1, z - 0.25)) }} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-300 hover:text-accent transition-all" aria-label="Zoom out">
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-300 min-w-[44px] text-center tabular-nums font-medium">{Math.round(zoom * 100)}%</span>
                <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(4, z + 0.25)) }} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-300 hover:text-accent transition-all" aria-label="Zoom in">
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoom !== 1 && (
                  <button onClick={(e) => { e.stopPropagation(); setZoom(1); if (scrollRef.current) { scrollRef.current.scrollTop = 0; scrollRef.current.scrollLeft = 0 } }} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-400 hover:text-accent transition-all" aria-label="Reset zoom">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Image area */}
          <div className="flex-1 flex items-center justify-center relative min-h-0">
            {/* Prev / Next arrows */}
            <button onClick={(e) => { e.stopPropagation(); goTo(-1) }} className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 text-gray-300 hover:text-accent hover:bg-gray-800 transition-all opacity-60 hover:opacity-100" aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goTo(1) }} className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 text-gray-300 hover:text-accent hover:bg-gray-800 transition-all opacity-60 hover:opacity-100" aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={scrollRef}
              className="w-full h-full overflow-auto flex"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={(e) => {
                if (!e.ctrlKey) return
                e.preventDefault()
                const dir = e.deltaY > 0 ? -0.25 : 0.25
                setZoom(z => Math.max(1, Math.min(4, z + dir)))
              }}
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <div className="m-auto flex items-center justify-center min-h-full min-w-full p-4 lg:p-8">
                <img
                  src={`${ASSETS_PATH}/${encodeURIComponent(lightbox)}`}
                  alt={fileName(lightbox)}
                  onLoad={(e) => {
                    const img = e.currentTarget
                    setImgSize({ w: img.naturalWidth, h: img.naturalHeight })
                  }}
                  draggable={false}
                  className="transition-[width,height] duration-200 ease-out rounded-lg shadow-2xl"
                  style={{
                    width: imgSize.w ? `${imgSize.w * zoom}px` : 'auto',
                    height: imgSize.h ? `${imgSize.h * zoom}px` : 'auto',
                    maxWidth: 'none',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom info bar */}
          <div className="relative z-20 flex items-center justify-center gap-4 px-4 lg:px-8 py-3 bg-gray-950/80 backdrop-blur-sm border-t border-gray-800">
            <span className="text-xs text-gray-500">
              Scroll to navigate · <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">Ctrl</kbd> + scroll to zoom · <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">→</kbd> navigate · <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">Esc</kbd> close
            </span>
          </div>
        </div>
      )}
    </section>
  )
}