'use client'

import { CheckCircle, ArrowRight } from 'lucide-react'

const offers = [
  'High-converting funnel built from strategy to launch',
  'Multi-channel automation that nurtures leads on autopilot',
  'CRM pipeline setup with full lead tracking and visibility',
  'Booking systems, forms, and calendars that work together',
  'Email and SMS sequences optimized for engagement',
]

export default function OfferSection() {
  return (
    <section id="offer" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
              What I Can Do For You
            </span>
            <h2 className="section-title">Your Complete GHL Setup, Done Right</h2>
            <p className="section-subtitle mt-4 mx-auto">
              I handle everything from strategy to execution so you can focus on closing deals instead of managing software.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              {offers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 animate-slide-up animation-delay-300">
              <h3 className="text-xl font-semibold text-accent mb-4">Ready to get started?</h3>
              <p className="text-sm text-gray-400 mb-6">
                Book a free strategy call. We will map out your current system, identify bottlenecks, and create a plan to turn more leads into paying clients.
              </p>
              <a
                href="https://calendly.com/jersoncatadman365/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 btn-primary group"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <p className="text-xs text-gray-500 mt-3 text-center">No commitment required. Just a conversation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
