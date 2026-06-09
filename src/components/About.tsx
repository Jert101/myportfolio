'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-2xl shadow-primary/10">
              <Image
                src="/profile.jpg"
                alt="GHL Specialist portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 shadow-xl animate-fade-in animation-delay-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Available for Projects</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="section-title">Systems Builder &amp; GHL Specialist</h2>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              I&apos;m a Computer Science graduate and GoHighLevel specialist focused on building systems that convert. I help businesses automate their processes, capture leads, and turn them into paying clients using smart funnel and CRM systems.
            </p>
            

            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Book a Free Call</a>
              <a href="#case-studies" className="btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}