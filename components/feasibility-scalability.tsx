"use client"

import { CheckCircle2 } from "lucide-react"

export default function FeasibilityScalability() {
  const feasibility = [
    "Proven tech stack (React, Node.js, Google Gemini)",
    "Works on basic smartphones/tablets",
    "Minimal data usage for rural affordability",
    "22 language support via Indic Unicode",
    "Pilot-ready deployment model",
  ]

  const scalability = [
    "Modular design: single school → nationwide",
    "Cloud-based infrastructure (supports millions)",
    "Phase-wise rollout: pilot → district → state → national",
    "Low infrastructure dependency",
    "International expansion ready (South Asia)",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Feasibility & Scalability
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Built to scale from pilot to nationwide impact</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Feasibility */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              Feasibility
            </h3>
            <div className="space-y-4">
              {feasibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-green-500 hover:shadow-md transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scalability */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              Scalability
            </h3>
            <div className="space-y-4">
              {scalability.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="font-bold text-lg mb-3">Deployment Strategy</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-bold text-lg text-blue-600">Phase 1</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Pilot in 5 states</p>
            </div>
            <div className="hidden md:flex justify-center items-center text-slate-400">→</div>
            <div>
              <div className="font-bold text-lg text-green-600">Phase 2</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Expand to 15 states</p>
            </div>
            <div className="hidden md:flex justify-center items-center text-slate-400">→</div>
            <div className="md:col-span-2">
              <div className="font-bold text-lg text-orange-600">Phase 3</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                National coverage & international expansion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
