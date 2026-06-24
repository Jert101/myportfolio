'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Zap, ExternalLink, X, Maximize2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

const automations = [
  { file: '4 day nurture.jpg', desc: 'Leads go cold without follow-up. Multi-day nurture sequence delivering course content and building trust over 4 days, with reply detection to flag engaged prospects.' },
  { file: 'Abandoned Checkout Recovery.jpg', desc: 'Prospects leave mid-purchase. Automated recovery workflow triggered the moment a prospect abandons checkout, with SMS and email reminders and conditional retrigger logic.' },
  { file: 'Auto Course Access Grant.png', desc: 'Manual access granting is slow and error-prone. Instant course access upon payment confirmation — no human intervention needed, with lifecycle tagging for segmentation.' },
  { file: 'Behavior-Based Automation (Advanced Funnel Logic).jpg', desc: 'One-size-fits-all funnels miss opportunities. Advanced funnel logic that routes leads based on actions, page visits, and engagement — with conditional branching and multi-path workflows.' },
  { file: 'Create Opportunity on Payment.png', desc: 'Payments and CRM are disconnected. Automatically creates a CRM opportunity when a payment is processed, keeping the sales pipeline in sync without manual entry.' },
  { file: 'Payment Received Notification.jpg', desc: 'Team is left in the dark after purchases. Real-time multi-channel notifications (SMS + email) triggered on payment, with escalation rules for high-value transactions.' },
  { file: 'Smart Conditional Follow-Up.jpg', desc: 'Static sequences ignore lead behavior. Follow-up sequences that adapt based on lead actions, tags, and pipeline stage — using conditional logic to send the right message at the right time.' },
  { file: 'Student Activation System.jpg', desc: 'New students need manual onboarding. Onboarding workflow that activates new students with credentials, orientation materials, and welcome emails immediately after enrollment.' },
  { file: 'Tag Paid Students.jpg', desc: 'No system to segment paying contacts. Automatically tags contacts who complete payment, enabling targeted upsell campaigns and clean list segmentation.' },
  { file: 'Upsell Buyer Tagging + Segmentation.jpg', desc: 'Buyers receive generic messaging. Tags buyers based on purchase behavior, product type, and value — feeding into segmented nurture sequences for relevant upsells.' },
  { file: 'Welcome Email.jpg', desc: 'New buyers feel abandoned post-purchase. Post-purchase welcome sequence delivering receipts, resources, and next steps — with delivery tracking and engagement alerts.' },
]

const ASSETS_PATH = '/new automation'

function dist(a: React.Touch, b: React.Touch) {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
}

export default function SystemsShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isSectionHovered, setIsSectionHovered] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startY: 0, startOffX: 0, startOffY: 0, moved: false })
  const imgAreaRef = useRef<HTMLDivElement>(null)
  const lastTapRef = useRef(0)
  const pinchRef = useRef({ initialDist: 0, initialZoom: 1 })
  const isPinching = useRef(false)

  const openLightbox = (file: string) => {
    const idx = automations.findIndex(a => a.file === file)
    setCurrentIndex(idx)
    setLightbox(file)
    setZoom(1)
    setNaturalSize({ w: 0, h: 0 })
    setOffset({ x: 0, y: 0 })
  }

  const goTo = (dir: number) => {
    const next = (currentIndex + dir + automations.length) % automations.length
    setCurrentIndex(next)
    setLightbox(automations[next].file)
    setZoom(1)
    setNaturalSize({ w: 0, h: 0 })
    setOffset({ x: 0, y: 0 })
  }

  const close = () => { setLightbox(null); setZoom(1); setOffset({ x: 0, y: 0 }) }

  const fileName = (name: string) => name.replace(/\.(png|jpg|jpeg)$/i, '')

  const clampOffset = (x: number, y: number) => {
    if (!imgAreaRef.current || !naturalSize.w) return { x, y }
    const vw = imgAreaRef.current.clientWidth
    const vh = imgAreaRef.current.clientHeight
    const iw = naturalSize.w * zoom
    const ih = naturalSize.h * zoom
    if (zoom <= 1) return { x: 0, y: 0 }
    const maxX = Math.max(0, (iw - vw) / 2)
    const maxY = Math.max(0, (ih - vh) / 2)
    return { x: Math.max(-maxX, Math.min(maxX, x)), y: Math.max(-maxY, Math.min(maxY, y)) }
  }

  // Mouse drag (desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragRef.current.startX = e.clientX
    dragRef.current.startY = e.clientY
    dragRef.current.startOffX = offset.x
    dragRef.current.startOffY = offset.y
    dragRef.current.moved = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) dragRef.current.moved = true
    setOffset(clampOffset(dragRef.current.startOffX + dx, dragRef.current.startOffY + dy))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch drag & pinch (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      isPinching.current = true
      pinchRef.current.initialDist = dist(e.touches[0], e.touches[1])
      pinchRef.current.initialZoom = zoom
      return
    }
    if (e.touches.length === 1 && zoom > 1) {
      const t = e.touches[0]
      setIsDragging(true)
      dragRef.current.startX = t.clientX
      dragRef.current.startY = t.clientY
      dragRef.current.startOffX = offset.x
      dragRef.current.startOffY = offset.y
      dragRef.current.moved = false
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length >= 2 && isPinching.current) {
      e.preventDefault()
      const d = dist(e.touches[0], e.touches[1])
      const ratio = d / pinchRef.current.initialDist
      const newZoom = Math.max(1, Math.min(4, pinchRef.current.initialZoom * ratio))
      setZoom(newZoom)
      return
    }
    if (e.touches.length === 1 && isDragging) {
      const t = e.touches[0]
      const dx = t.clientX - dragRef.current.startX
      const dy = t.clientY - dragRef.current.startY
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) dragRef.current.moved = true
      setOffset(clampOffset(dragRef.current.startOffX + dx, dragRef.current.startOffY + dy))
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    isPinching.current = false
  }

  const handleImgAreaClick = () => {
    if (dragRef.current.moved) return
    const now = Date.now()
    const diff = now - lastTapRef.current
    lastTapRef.current = now
    if (diff < 300 && diff > 0) {
      if (zoom > 1) {
        setZoom(1)
        setOffset({ x: 0, y: 0 })
      } else {
        setZoom(2)
      }
    }
  }

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

  useEffect(() => {
    setOffset(clampOffset(offset.x, offset.y))
  }, [zoom])

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.naturalWidth && img.naturalHeight) {
      setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight })
    }
  }

  return (
    <section id="systems" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="section-title">Automation Systems I Have Built</h2>
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
                        Tap to view
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
      
      {lightbox && typeof window === 'object' && createPortal(
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 select-none" onClick={close}>
          {/* Inner wrapper stops propagation so only backdrop clicks close */}
          <div className="flex flex-col flex-1 min-h-0" onClick={(e) => e.stopPropagation()}>
          {/* Top bar */}
          <div className="z-20 flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-gray-950/80 border-b border-gray-800 shrink-0">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <button onClick={close} className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition-all shrink-0" aria-label="Close">
                <X className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <span className="text-xs sm:text-sm text-gray-300 truncate">{fileName(lightbox)}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-[10px] sm:text-xs text-gray-500 tabular-nums">{currentIndex + 1} / {automations.length}</span>
              <div className="flex items-center gap-0.5 sm:gap-1 bg-gray-900 rounded-xl border border-gray-800 p-0.5 sm:p-1">
                <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(1, z - 0.25)) }} className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-all" aria-label="Zoom out">
                  <ZoomOut className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </button>
                <span className="text-xs sm:text-sm text-gray-300 min-w-[36px] sm:min-w-[44px] text-center tabular-nums font-medium">{Math.round(zoom * 100)}%</span>
                <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(4, z + 0.25)) }} className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-all" aria-label="Zoom in">
                  <ZoomIn className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </button>
                {zoom !== 1 && (
                  <button onClick={(e) => { e.stopPropagation(); setZoom(1); setOffset({ x: 0, y: 0 }) }} className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white transition-all" aria-label="Reset zoom">
                    <RotateCcw className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Image area */}
          <div ref={imgAreaRef} className="flex-1 relative min-h-0 overflow-hidden touch-none"
            onWheel={(e) => { if (e.ctrlKey || e.metaKey) { e.preventDefault(); setZoom(z => Math.max(1, Math.min(4, z - e.deltaY * 0.005))) } }}
            onClick={handleImgAreaClick}
          >
            {/* Nav arrows */}
            <button onClick={(e) => { e.stopPropagation(); goTo(-1) }} className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-white/20 hover:text-white transition-all" aria-label="Previous">
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goTo(1) }} className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:bg-white/20 hover:text-white transition-all" aria-label="Next">
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            {/* Draggable / pannable image */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              onMouseDown={zoom > 1 ? handleMouseDown : undefined}
              onMouseMove={zoom > 1 ? handleMouseMove : undefined}
              onMouseUp={zoom > 1 ? handleMouseUp : undefined}
              onMouseLeave={zoom > 1 ? handleMouseUp : undefined}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="relative"
                style={
                  zoom > 1 && naturalSize.w
                    ? { width: naturalSize.w * zoom, height: naturalSize.h * zoom, transform: `translate(${offset.x}px, ${offset.y}px)` }
                    : { maxWidth: '100%', maxHeight: 'calc(100dvh - 120px)', aspectRatio: naturalSize.w ? `${naturalSize.w} / ${naturalSize.h}` : '16/9', width: '100%' }
                }
              >
                <Image
                  src={`${ASSETS_PATH}/${encodeURIComponent(lightbox)}`}
                  alt={fileName(lightbox)}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain pointer-events-none"
                  priority
                  draggable={false}
                  onLoad={handleImgLoad}
                />
              </div>
            </div>

            {/* Caption at zoom=1 */}
            {zoom === 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
                <h3 className="text-sm sm:text-base font-semibold text-white drop-shadow-lg">{fileName(lightbox)}</h3>
                <p className="text-xs text-white/60 mt-0.5 max-w-md drop-shadow-lg line-clamp-2">{automations[currentIndex]?.desc}</p>
              </div>
            )}
          </div>

          {/* Bottom info bar */}
          <div className="z-20 flex items-center justify-center px-4 py-2 bg-gray-950/80 border-t border-gray-800 shrink-0">
            <span className="text-[10px] sm:text-xs text-gray-500">
              <span className="sm:hidden">Pinch to zoom · Drag to pan · Esc close</span>
              <span className="hidden sm:inline">Drag to pan · <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">Ctrl</kbd> + scroll to zoom · <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">→</kbd> navigate · <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px] font-mono">Esc</kbd> close</span>
            </span>
          </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
