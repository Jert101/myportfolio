'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary via-gray-950 to-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="relative animate-slide-in-left max-w-sm sm:max-w-md lg:max-w-none mx-auto w-full">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-2xl shadow-primary/10">
              <Image
                src="/profile.jpg"
                alt="GHL Specialist portrait"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-xl animate-fade-in animation-delay-500">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">Available for Projects</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="section-title">Hey, I&apos;m Jerson!</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I&apos;m a GoHighLevel Specialist and Systems Virtual Assistant who helps businesses
              organize their backend systems and automate their processes so they can focus
              more on growth and less on manual work.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I help businesses build funnels, set up automations, organize CRM pipelines,
              and create systems that capture and nurture leads from start to finish.
              I have trained in GoHighLevel and built practice systems and portfolio projects
              to strengthen my skills, so I know the platform inside and out.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              My goal is simple: help you save time, respond to leads faster, and run
              smoother operations through smart automation. Whether you are just starting
              out or looking to clean up your existing setup, I am here to help.
            </p>

            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Book a Free Call</a>
              <a href="#systems" className="btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}