"use client"

import { useState } from "react"
import { Brain, Smartphone, BarChart3 } from "lucide-react"

export default function Solution() {
  const [expandedCard, setExpandedCard] = useState(0)

  const solutions = [
    {
      icon: Brain,
      title: "Personalized Learning",
      subtitle: "Gemini-Powered Adaptive Learning",
      bullets: ["Real-time pace adjustment", "Custom lesson sequences", "30-40% better retention"],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "Offline-First Technology",
      subtitle: "Works Without Internet",
      bullets: ["Content cached locally", "22 Indian languages", "Runs on basic smartphones"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Teacher Enablement",
      subtitle: "AI-Powered Teacher Dashboard",
      bullets: ["Saves 10+ hours/week", "Predictive alerts", "Automated grading"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Our 3-Pillar Solution
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Comprehensive approach to bridging the education gap
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  expandedCard === index ? "md:col-span-1" : ""
                }`}
                onClick={() => setExpandedCard(expandedCard === index ? -1 : index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div
                  className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all h-full flex flex-col ${
                    expandedCard === index ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium">{solution.subtitle}</p>

                  <div
                    className={`space-y-3 flex-grow transition-all duration-300 ${expandedCard === index ? "opacity-100" : "opacity-100"}`}
                  >
                    {solution.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-green-600" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <button className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
