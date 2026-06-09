'use client'

import { Calendar, MessageSquare, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-r from-primary via-primary-light/80 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
            Let&apos;s Work Together
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6 text-balance">
            Ready to automate your business and increase conversions?
          </h2>
          
          <p className="text-lg sm:text-xl text-accent/80 mb-10 max-w-2xl mx-auto">
            Book a free strategy call. We&apos;ll map out your current system, identify bottlenecks, and create a plan to turn more leads into paying clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/jersoncatadman365/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-primary bg-accent rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-accent/20 group"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book a Free Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/639061344847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-accent bg-transparent border-2 border-accent/40 rounded-xl hover:bg-accent/10 transition-all duration-300 group"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}