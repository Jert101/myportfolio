'use client'

import { 
  LayoutDashboard, 
  Zap, 
  Database, 
  FileText, 
  Calendar, 
  Mail 
} from 'lucide-react'

const services = [
  {
    icon: LayoutDashboard,
    title: 'Funnel Building',
    description: 'High-converting landing pages, opt-in forms, thank you pages, and booking systems designed to capture and convert leads at every step.',
  },
  {
    icon: Zap,
    title: 'Automation Systems',
    description: 'Multi-channel SMS and email workflows that nurture leads automatically, trigger based on behavior, and move prospects through your pipeline.',
  },
  {
    icon: Database,
    title: 'CRM Setup',
    description: 'Custom pipelines, custom fields, tags, and tracking systems tailored to your sales process for complete visibility and control.',
  },
  {
    icon: FileText,
    title: 'Forms & Surveys',
    description: 'Dynamic forms and surveys with conditional logic, lead scoring, and seamless CRM integration for better qualification.',
  },
  {
    icon: Calendar,
    title: 'Calendar Setup',
    description: 'Automated booking systems with round-robin, collective, and class calendars, reminders, and no-show reduction workflows.',
  },
  {
    icon: Mail,
    title: 'Email Builder',
    description: 'Responsive email templates, broadcast campaigns, and drip sequences optimized for deliverability and engagement.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
            My Solution
          </span>
          <h2 className="section-title">Services That Drive Results</h2>
          <p className="section-subtitle mt-4 mx-auto">
            End-to-end GoHighLevel implementation, from strategy to execution. Each service plugs into a complete system that captures, nurtures, and converts leads on autopilot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card group relative overflow-hidden animate-slide-up hover:scale-[1.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 text-primary-light mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}