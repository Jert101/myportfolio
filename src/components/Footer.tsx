'use client'

import { Mail, MessageSquare, Globe, Calendar } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-secondary">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-accent font-bold text-lg">
                G
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent">GHL Specialist</h3>
                <p className="text-xs text-gray-500">Building systems that convert</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              High-converting funnels, smart automations, and CRM systems built on GoHighLevel to help businesses grow.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {['Funnel Building', 'Automation Systems', 'CRM Setup', 'Calendar Integration', 'Email Builder'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-primary-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/jerson.catadman.37/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:bg-primary hover:text-accent hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/639061344847"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:bg-primary hover:text-accent hover:border-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://calendly.com/jersoncatadman365/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:bg-primary hover:text-accent hover:border-primary transition-all duration-300"
                aria-label="Calendly"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:jersoncatadman365@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:bg-primary hover:text-accent hover:border-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
            <p className="text-xs text-gray-500">jersoncatadman365@gmail.com</p>
            <p className="text-xs text-gray-500 mt-1">09061344847</p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jerson Catadman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}