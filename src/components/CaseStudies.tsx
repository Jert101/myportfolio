'use client'

import { ArrowUpRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'Real Estate Agent Lead Generation System',
    industry: 'Real Estate',
    problem: 'A solo real estate agent was spending $3,000/month on Zillow leads with a 2% conversion rate. Leads took 5+ days to follow up, and there was no automated nurturing in place.',
    solution: 'Built a complete GoHighLevel system with a property landing page, automated SMS/email follow-up sequences, pipeline tracking for each lead stage, and a calendar booking system integrated with Google Calendar.',
    result: 'Conversion rate improved from 2% to 11%, cost per lead dropped by 60%, and response time went from days to under 5 minutes.',
    metrics: [
      { label: 'Conversion Rate', value: '2% → 11%', icon: TrendingUp },
      { label: 'Cost Per Lead', value: '-60%', icon: DollarSign },
      { label: 'Response Time', value: '5+ days → 5 min', icon: Clock },
      { label: 'Monthly Leads', value: '40 → 180+', icon: Users },
    ],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop',
  },
  {
    title: 'Local Service Business Automation',
    industry: 'Home Services',
    problem: 'A landscaping company was losing 40% of incoming leads because calls went unanswered after hours. Manual follow-up was inconsistent, and they had no way to track leads through their sales process.',
    solution: 'Implemented a 24/7 automated SMS lead capture system with instant responses, booking calendar for estimates, automated reminder sequences, and a CRM pipeline to track leads from inquiry to closed deal.',
    result: 'After-hours lead capture increased by 85%, booking rate improved by 45%, and they generated $15,000 in additional revenue from recovered leads in the first 60 days.',
    metrics: [
      { label: 'Lead Capture', value: 'After Hours +85%', icon: TrendingUp },
      { label: 'Booking Rate', value: '+45%', icon: Users },
      { label: 'Revenue Impact', value: '+$15K in 60 days', icon: DollarSign },
      { label: 'Follow-up Time', value: 'Manual → Instant', icon: Clock },
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  },
  {
    title: 'Coaching Funnel & Enrollment System',
    industry: 'Online Coaching',
    problem: 'A health coach was manually managing leads through email and spreadsheets. The enrollment process required 7+ back-and-forth emails per client, and 60% of interested leads went cold during the process.',
    solution: 'Created a full enrollment funnel with a webinar registration page, automated email sequence, SMS reminders for calls, pipeline management for prospect tracking, and automated follow-up for no-shows.',
    result: 'Enrollment process was reduced from 14 days to 48 hours, no-show rate dropped by 70%, and the coach scaled from 5 to 25 clients per month without hiring additional staff.',
    metrics: [
      { label: 'Enrollment Time', value: '14 days → 48 hrs', icon: Clock },
      { label: 'No-Show Rate', value: '-70%', icon: TrendingUp },
      { label: 'Client Capacity', value: '5 → 25/mo', icon: Users },
      { label: 'Manual Work', value: 'Eliminated 90%', icon: DollarSign },
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Real results from real businesses. Here are examples of how I&apos;ve helped clients transform their lead generation and sales processes using GoHighLevel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="card card-hover group flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${study.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-light border border-primary/30">
                    {study.industry}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-accent mb-4">{study.title}</h3>
              
              <div className="space-y-4 mb-6 flex-1">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Problem</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Solution</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Result</p>
                  <p className="text-sm text-primary-light font-medium">{study.result}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="bg-gray-900/60 rounded-lg p-3 border border-gray-800">
                    <metric.icon className="w-4 h-4 text-primary-light mb-1" aria-hidden="true" />
                    <div className="text-sm font-bold text-accent">{metric.value}</div>
                    <div className="text-xs text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-primary-light border border-primary/30 rounded-lg hover:bg-primary/10 transition-all duration-300 group/btn">
                View Details
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}