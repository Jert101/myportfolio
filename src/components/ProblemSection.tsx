'use client'

import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'

const beforePoints = [
  'You run ads and get leads, but many never get a response.',
  'You manually send emails or texts one at a time, and forget to follow up.',
  'Your contacts are scattered across spreadsheets, email, and your phone.',
  'You have no way of knowing which lead is hot and which is cold.',
  'You lose sales because prospects go cold while waiting for a reply.',
  'You are working inside your business instead of on your business.',
]

const afterPoints = [
  'Every lead is automatically captured and organized inside one CRM.',
  'Follow-ups happen automatically through email and SMS sequences.',
  'Your pipeline shows exactly where every prospect is and what they need next.',
  'Hot leads get routed to you instantly; cold leads get nurtured over time.',
  'You reclaim hours each week by automating repetitive tasks.',
  'You finally have a system that works while you sleep.',
]

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
            The Difference
          </span>
          <h2 className="section-title">Why You Need Me</h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
            Many businesses do a great job generating leads through ads, social media, and referrals.
            But once those leads come in, the real challenge begins. Without automation and organized
            systems, most prospects get lost, forgotten, or simply slip through the cracks. Valuable
            time is wasted on repetitive manual tasks, and potential revenue goes untracked.
            Now imagine your business running on autopilot where every lead is captured, every
            follow-up happens on time, and your entire customer journey flows without you needing
            to micromanage it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Before column */}
          <div className="card animate-slide-up relative overflow-hidden border-red-900/20">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent opacity-40" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-900/30 flex items-center justify-center shrink-0">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-accent">Before</h3>
              </div>
              <ul className="space-y-3">
                {beforePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After column */}
          <div className="card animate-slide-up relative overflow-hidden border-primary/20"
            style={{ animationDelay: '150ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-40" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/30 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold text-accent">After</h3>
              </div>
              <ul className="space-y-3">
                {afterPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light/60 mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#services" className="btn-primary inline-flex items-center gap-2 group">
            See How I Fix These
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
