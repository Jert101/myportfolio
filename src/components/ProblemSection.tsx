'use client'

import { TrendingDown, Clock, Users, DollarSign } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    title: 'Low Conversion Rates',
    description: 'You are spending money on leads but seeing low conversion rates. Most prospects fall through the cracks because there is no system to nurture them.',
  },
  {
    icon: Clock,
    title: 'Slow & Inconsistent Follow-Up',
    description: 'Leads take days to get a response. Manual follow-up is inconsistent, and interested prospects go cold while you are juggling everything else.',
  },
  {
    icon: Users,
    title: 'Leaks in Your Sales Process',
    description: 'Calls go unanswered after hours. Leads get lost between spreadsheets and email threads. You have no way to track where each prospect is in your pipeline.',
  },
  {
    icon: DollarSign,
    title: 'Wasted Ad Spend & Missed Revenue',
    description: 'Without automated nurturing and retargeting, you are leaving money on the table. Lost leads could have become paying clients with the right follow-up system.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-900/20 text-red-400 text-sm font-medium mb-4">
            Common Challenges
          </span>
          <h2 className="section-title">Sound Familiar?</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Most businesses struggle with the same issues when it comes to turning leads into paying clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((item, index) => (
            <article
              key={item.title}
              className="card group animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-900/20 border border-red-900/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#services" className="btn-primary inline-flex items-center gap-2 group">
            See How I Fix These
          </a>
        </div>
      </div>
    </section>
  )
}
