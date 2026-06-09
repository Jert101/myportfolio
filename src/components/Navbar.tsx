'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Systems', href: '#systems' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const sections = navLinks.map(l => document.getElementById(l.href.slice(1))).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => s && observer.observe(s))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach(s => s && observer.unobserve(s))
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="text-lg font-bold text-accent">GHL Specialist</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors relative ${
                  activeSection === link.href
                    ? 'text-primary-light'
                    : 'text-gray-300 hover:text-primary-light'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-light rounded-full" />
                )}
              </a>
            ))}
            <a href="https://calendly.com/jersoncatadman365/30min" target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 !text-sm">
              Book a Call
            </a>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-accent hover:bg-gray-900 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="lg:hidden animate-fade-in pb-6">
            <div className="bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-accent hover:bg-gray-800 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-800 my-2" />
              <a
                href="https://calendly.com/jersoncatadman365/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-center font-medium text-accent bg-primary rounded-xl hover:bg-primary-light transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}