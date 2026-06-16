'use client'

import { ArrowRight } from 'lucide-react'

export default function MidPageCTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-primary via-primary-light/80 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-accent text-balance">
              Ready to automate your business and increase conversions?
            </h3>
            <p className="text-sm sm:text-base text-accent/70 mt-1">
              Book a free call and let us build a system that works for you.
            </p>
          </div>
          <a
            href="https://calendly.com/jersoncatadman365/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-accent rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-accent/20 group shrink-0"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
