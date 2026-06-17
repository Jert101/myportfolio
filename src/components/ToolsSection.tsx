'use client'

import Image from 'next/image'

const toolImages: Record<string, string> = {
  GoHighLevel: '/logo/go highlevel.png',
  Notion: '/logo/notion.png',
  'Google Workspace': '/logo/google workspace.png',
  Canva: '/logo/canva.png',
  Calendly: '/logo/calendly.png',
  Slack: '/logo/slack.png',
  Outlook: '/logo/outlook.png',
  Linear: '/logo/linear.png',
}

const tools = [
  { name: 'GoHighLevel', category: 'CRM & Automation' },
  { name: 'Notion', category: 'Project Management' },
  { name: 'Google Workspace', category: 'Business Suite' },
  { name: 'Canva', category: 'Design' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Outlook', category: 'Email & Calendar' },
  { name: 'Linear', category: 'Issue Tracking' },
]

export default function ToolsSection() {
  return (
    <section id="tools" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-4">
            Tools & Platforms
          </span>
          <h2 className="section-title">Systems I Work With</h2>
          <p className="section-subtitle mt-4 mx-auto">
            Here are some of the tools and platforms I am familiar with that help me manage
            workflows, automation, and business systems efficiently. These tools allow me to
            build organized processes and support clients in running smoother operations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="card group animate-slide-up text-center py-6 px-3 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-2">
                <Image
                  src={toolImages[tool.name]}
                  alt={tool.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-accent">{tool.name}</h3>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
