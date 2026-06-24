'use client'

import { ArrowRight, CheckCircle, Target, Zap, TrendingUp } from 'lucide-react'

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
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="animate-slide-in-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light" />
              </span>
              GoHighLevel Specialist · Funnel Builder · Automation Specialist
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-slide-up animation-delay-100 text-balance">
              Turn Your Business Into a{' '}
              <span className="gradient-text">Lead-Generating Machine</span>{' '}
               Automate, Nurture, Close.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl animate-slide-up animation-delay-200">
              Hi, I'm Jerson L. Catadman, I help business owners capture more leads, 
              automate their follow-ups, organize their CRM, and create smoother 
              customer journeys from first click to final sale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-300">
              <a 
                href="#services"
                className="btn-primary group text-center"
              >
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a 
                href="https://calendly.com/jersoncatadman365/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Book a Call
              </a>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-400 animate-slide-up animation-delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light flex-shrink-0" />
                <span>Capture More Qualified Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light flex-shrink-0" />
                <span>Follow Up Automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light flex-shrink-0" />
                <span>Know Where Every Lead Stands</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light flex-shrink-0" />
                <span>Nurture Leads on Autopilot</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right order-1 lg:order-2 max-w-lg sm:max-w-xl lg:max-w-none mx-auto w-full">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 shadow-2xl shadow-primary/10 p-5 sm:p-7 lg:p-8">
              <h3 className="text-base sm:text-lg font-semibold text-accent mb-5 sm:mb-6 text-center">
                From Lead to Client — The System
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {/* Step 1 */}
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                    <Target className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-accent">Capture</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Landing pages, forms, and booking systems that attract and capture qualified leads.</p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="flex justify-center">
                  <div className="w-px h-4 sm:h-5 bg-gradient-to-b from-primary/40 to-transparent" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                    <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-accent">Automate</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">SMS and email sequences, pipeline updates, and conditional workflows that run on autopilot.</p>
                  </div>
                </div>

                {/* Connector line */}
                <div className="flex justify-center">
                  <div className="w-px h-4 sm:h-5 bg-gradient-to-b from-primary/40 to-transparent" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-semibold text-accent">Grow</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Nurture sequences, upsell triggers, and retention workflows that maximize customer lifetime value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#problem" className="text-gray-500 hover:text-primary-light transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}