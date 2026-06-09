'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-secondary z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-0" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />
      <style>{`@keyframes gridMove { 0% { transform: translate(0, 0); } 100% { transform: translate(60px, 60px); } }`}</style>
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light" />
              </span>
              GoHighLevel Specialist
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up animation-delay-100">
              I Build High-Converting{' '}
              <span className="gradient-text">Funnels & Automations</span>{' '}
              Using GoHighLevel
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl animate-slide-up animation-delay-200">
              Helping businesses turn leads into booked calls with smart systems and automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <a 
                href="#case-studies"
                className="btn-primary group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a 
                href="https://calendly.com/jersoncatadman365/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book a Call
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-400 animate-slide-up animation-delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-light flex-shrink-0" />
                <span>Funnel Building & Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-light flex-shrink-0" />
                <span>Automation Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-light flex-shrink-0" />
                <span>CRM Setup & Pipelines</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="GoHighLevel funnel dashboard mockup"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center p-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/30 backdrop-blur-sm border border-primary/30 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-light" />
                    </span>
                    <span className="text-primary-light font-medium">Live Funnel Dashboard</span>
                  </div>
                  <p className="text-gray-400 text-sm">Opt-in → Thank You → Booking → Follow-up</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 animate-fade-in animation-delay-500">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 shadow-xl min-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-gray-300">Active Campaigns</span>
                </div>
                <div className="text-3xl font-bold text-accent">24</div>
                <div className="text-xs text-primary-light mt-1">Running Automations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#services" className="text-gray-500 hover:text-primary-light transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}