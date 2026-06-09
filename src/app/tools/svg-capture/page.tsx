'use client'

import { useState, useRef, useCallback } from 'react'
import { Download, Code, Eye, ImageDown, Copy, Check, ArrowLeft, Info, Upload } from 'lucide-react'
import Link from 'next/link'

const sampleHtml = `<div style="display:flex;flex-direction:column;align-items:center;font-family:Arial,sans-serif;background:#0B3D2E;color:white;padding:40px;border-radius:16px;max-width:600px">
  <div style="font-size:28px;font-weight:bold;margin-bottom:8px">New Lead Captured ✅</div>
  <div style="font-size:16px;color:#a0f0d0;margin-bottom:24px">Automation Triggered — 2s ago</div>
  <div style="display:flex;gap:16px;margin-bottom:24px">
    <div style="background:#1F7A63;padding:16px 24px;border-radius:12px;text-align:center">
      <div style="font-size:12px;text-transform:uppercase;opacity:0.7">Lead Name</div>
      <div style="font-size:18px;font-weight:bold">John Doe</div>
    </div>
    <div style="background:#1F7A63;padding:16px 24px;border-radius:12px;text-align:center">
      <div style="font-size:12px;text-transform:uppercase;opacity:0.7">Source</div>
      <div style="font-size:18px;font-weight:bold">Facebook Ad</div>
    </div>
  </div>
  <div style="width:100%;background:rgba(255,255,255,0.1);border-radius:12px;padding:16px;margin-bottom:16px">
    <div style="display:flex;justify-content:space-between;margin-bottom:8px">
      <span>📧 Welcome Email</span><span style="color:#7affc0">Sent</span>
    </div>
    <div style="display:flex;justify-content:space-between;margin-bottom:8px">
      <span>📱 SMS Follow-up</span><span style="color:#7affc0">Scheduled</span>
    </div>
    <div style="display:flex;justify-content:space-between">
      <span>📅 Booking Link</span><span style="color:#f0c040">Pending</span>
    </div>
  </div>
  <div style="font-size:12px;color:rgba(255,255,255,0.5)">GoHighLevel Automation Workflow</div>
</div>`

export default function SvgCaptureTool() {
  const [tab, setTab] = useState<'html' | 'screenshot'>('html')
  const [html, setHtml] = useState(sampleHtml)
  const [previewKey, setPreviewKey] = useState(0)
  const [status, setStatus] = useState<'idle' | 'generating' | 'ready'>('idle')
  const [copied, setCopied] = useState(false)
  const previewRef = useRef<HTMLIFrameElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [svgUrl, setSvgUrl] = useState('')
  const [svgText, setSvgText] = useState('')
  const [screenshotFile, setScreenshotFile] = useState<{ dataUrl: string; name: string; w: number; h: number } | null>(null)

  const updatePreview = () => {
    setPreviewKey(k => k + 1)
  }

  const sanitizeHtml = (html: string) => {
    return html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
      .replace(/<!---->/g, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/ on\w+="[^"]*"/gi, '')
      .replace(/ on\w+='[^']*'/gi, '')
      .replace(/<br(\s[^>]*)?>/gi, '<br$1/>')
      .replace(/<hr(\s[^>]*)?>/gi, '<hr$1/>')
      .replace(/<img(\s[^>]*?)>/gi, '<img$1/>')
      .replace(/<input(\s[^>]*?)>/gi, '<input$1/>')
      .replace(/<link(\s[^>]*?)>/gi, '<link$1/>')
      .replace(/<meta(\s[^>]*?)>/gi, '<meta$1/>')
      .replace(/&(?!(amp|lt|gt|quot|apos|#\d+);)/g, '&amp;')
  }

  const captureAsSvg = useCallback(() => {
    if (!previewRef.current) return
    setStatus('generating')

    try {
      const doc = previewRef.current.contentDocument
      if (!doc?.body) throw new Error('Preview not rendered')

      const serializer = new XMLSerializer()
      let bodyHtml = serializer.serializeToString(doc.body)
      bodyHtml = bodyHtml.replace(/^<body>|<\/body>$/g, '')
      bodyHtml = sanitizeHtml(bodyHtml)

      const w = doc.body.scrollWidth || 1200
      const h = doc.body.scrollHeight || 800

      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
  width="${w}" height="${h}"
  viewBox="0 0 ${w} ${h}">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">${bodyHtml}</div>
  </foreignObject>
</svg>`

      setSvgText(svg)

      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(blob)

      if (svgUrl) URL.revokeObjectURL(svgUrl)
      setSvgUrl(url)
      setStatus('ready')
    } catch (err) {
      console.error(err)
      setStatus('idle')
      alert('Failed to generate SVG. Make sure the preview has content.')
    }
  }, [svgUrl])

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string
      const img = new Image()
      img.onload = () => {
        setScreenshotFile({ dataUrl, name: file.name, w: img.naturalWidth, h: img.naturalHeight })
        setStatus('idle')
        setSvgText('')
        if (svgUrl) URL.revokeObjectURL(svgUrl)
        setSvgUrl('')
      }
      img.src = dataUrl
    }
    reader.readAsDataURL(file)
  }

  const captureScreenshotAsSvg = () => {
    if (!screenshotFile) return
    setStatus('generating')

    try {
      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
  width="${screenshotFile.w}" height="${screenshotFile.h}"
  viewBox="0 0 ${screenshotFile.w} ${screenshotFile.h}">
  <image width="100%" height="100%" href="${screenshotFile.dataUrl}" preserveAspectRatio="xMidYMid meet"/>
</svg>`

      setSvgText(svg)

      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      if (svgUrl) URL.revokeObjectURL(svgUrl)
      setSvgUrl(url)
      setStatus('ready')
    } catch (err) {
      console.error(err)
      setStatus('idle')
    }
  }

  const downloadSvg = () => {
    if (!svgText) return
    const blob = new Blob([svgText], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'automation-workflow.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  const copySvg = () => {
    if (!svgText) return
    navigator.clipboard.writeText(svgText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-secondary text-accent">
      <div className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="container-custom flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="text-sm text-gray-500">SVG Capture Tool</span>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">HTML &amp; Screenshot → SVG</h1>
            <p className="text-gray-400">
              Convert HTML elements or screenshots into crisp, infinitely scalable SVG files.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-400">
                <strong className="text-gray-300">For GHL workflows:</strong> Use the <strong>Screenshot</strong> tab below. Take a screenshot of your workflow, upload it, and download as SVG. The image is embedded inside the SVG so it stays sharp at its native resolution.
              </div>
            </div>
            <div className="flex items-start gap-3 pl-8">
              <Info className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-400">
                <strong className="text-gray-300">Pro tip:</strong> In Chrome DevTools, right-click the workflow element → <strong>Capture node screenshot</strong> for the highest quality capture.
              </div>
            </div>
          </div>

          <div className="flex gap-1 mb-6 bg-gray-900 rounded-xl p-1 border border-gray-800 w-fit">
            <button
              onClick={() => { setTab('screenshot'); setStatus('idle'); setSvgText(''); if (svgUrl) URL.revokeObjectURL(svgUrl); setSvgUrl('') }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === 'screenshot'
                  ? 'bg-primary text-accent shadow-lg'
                  : 'text-gray-400 hover:text-accent'
              }`}
            >
              <Upload className="w-4 h-4" />
              Screenshot
            </button>
            <button
              onClick={() => { setTab('html'); setStatus('idle'); setSvgText(''); if (svgUrl) URL.revokeObjectURL(svgUrl); setSvgUrl('') }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                tab === 'html'
                  ? 'bg-primary text-accent shadow-lg'
                  : 'text-gray-400 hover:text-accent'
              }`}
            >
              <Code className="w-4 h-4" />
              HTML
            </button>
          </div>

          {tab === 'html' ? (
            <>
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Code className="w-4 h-4" />
                      HTML Source
                    </label>
                    <span className="text-xs text-gray-500">{html.length} chars</span>
                  </div>
                  <textarea
                    value={html}
                    onChange={(e) => { setHtml(e.target.value); setStatus('idle'); setSvgText(''); if (svgUrl) URL.revokeObjectURL(svgUrl); setSvgUrl('') }}
                    className="w-full h-[250px] sm:h-[350px] lg:h-[420px] bg-gray-950 border border-gray-800 rounded-xl p-3 sm:p-4 text-sm font-mono text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light resize-none"
                    spellCheck={false}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Eye className="w-4 h-4" />
                      Live Preview
                    </label>
                    <button
                      onClick={updatePreview}
                      className="text-xs text-gray-500 hover:text-primary-light transition-colors"
                    >
                      Refresh preview
                    </button>
                  </div>
                  <div className="h-[250px] sm:h-[350px] lg:h-[420px] bg-white rounded-xl overflow-hidden border border-gray-800">
                    <iframe
                      key={previewKey}
                      ref={previewRef}
                      srcDoc={html}
                      className="w-full h-full"
                      title="Preview"
                      sandbox="allow-same-origin"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                  <button
                    onClick={captureAsSvg}
                    disabled={status === 'generating' || !html.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    <ImageDown className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
                    {status === 'generating' ? 'Generating...' : 'Capture as SVG'}
                  </button>
                  {status === 'ready' && (
                    <>
                      <button onClick={downloadSvg} className="btn-secondary text-sm sm:text-base">
                        <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
                        Download SVG
                      </button>
                      <button onClick={copySvg} className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-gray-300 bg-gray-900 border border-gray-800 rounded-xl hover:border-primary-light/50 transition-all">
                        {copied ? (
                          <><Check className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2 text-green-500" />Copied!</>
                        ) : (
                          <><Copy className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" />Copy SVG</>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshotUpload}
                  className="hidden"
                />
                {!screenshotFile ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-700 rounded-xl p-8 sm:p-16 text-center cursor-pointer hover:border-primary-light/50 transition-all group"
                  >
                    <Upload className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-3 sm:mb-4 text-gray-500 group-hover:text-primary-light transition-colors" aria-hidden="true" />
                    <p className="text-lg font-medium text-gray-300 mb-1">Upload a screenshot</p>
                    <p className="text-sm text-gray-500">PNG, JPG, or WebP — will be embedded inside an SVG</p>
                  </div>
                ) : (
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-gray-950 px-4 py-3 flex items-center justify-between border-b border-gray-800">
                      <span className="text-sm text-gray-300 truncate">{screenshotFile.name}</span>
                      <span className="text-xs text-gray-500">{screenshotFile.w} × {screenshotFile.h} px</span>
                    </div>
                    <div className="p-2 sm:p-4 bg-white flex items-center justify-center max-h-[250px] sm:max-h-[420px] overflow-auto">
                      <img
                        src={screenshotFile.dataUrl}
                        alt="Screenshot preview"
                        className="max-w-full max-h-[380px] object-contain rounded"
                      />
                    </div>
                    <div className="px-4 py-3 flex gap-3 border-t border-gray-800">
                      <button
                        onClick={() => { setScreenshotFile(null); setStatus('idle'); setSvgText(''); if (svgUrl) URL.revokeObjectURL(svgUrl); setSvgUrl('') }}
                        className="text-sm text-gray-400 hover:text-accent transition-colors"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-sm text-gray-400 hover:text-accent transition-colors ml-auto"
                      >
                        Choose different
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {screenshotFile && (
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                    <button
                      onClick={captureScreenshotAsSvg}
                      disabled={status === 'generating'}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      <ImageDown className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
                      {status === 'generating' ? 'Generating...' : 'Create SVG'}
                    </button>
                    {status === 'ready' && (
                      <>
                        <button onClick={downloadSvg} className="btn-secondary text-sm sm:text-base">
                          <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" aria-hidden="true" />
                          Download SVG
                        </button>
                        <button onClick={copySvg} className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-gray-300 bg-gray-900 border border-gray-800 rounded-xl hover:border-primary-light/50 transition-all">
                          {copied ? (
                            <><Check className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2 text-green-500" />Copied!</>
                          ) : (
                            <><Copy className="w-4 sm:w-5 h-4 sm:h-5 mr-1.5 sm:mr-2" />Copy SVG</>
                          )}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {status === 'ready' && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">SVG Preview</h3>
              {svgUrl && (
                <div className="bg-white rounded-lg p-2">
                  <img
                    src={svgUrl}
                    alt="Generated SVG"
                    className="w-full max-h-[400px] object-contain mx-auto"
                  />
                </div>
              )}
              <p className="text-xs text-gray-500 mt-3">
                This SVG is infinitely scalable — no quality loss at any size. Perfect for presentations, docs, and mockups.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}