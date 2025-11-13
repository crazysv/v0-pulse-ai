"use client"

import { Heart, Zap, Globe, Lightbulb, BookOpen } from "lucide-react"

export default function SocialImpact() {
  const impacts = [
    {
      icon: Globe,
      title: "Bridges Rural-Urban Gap",
      description: "Equalizes quality education across geographic boundaries",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Empowers Marginalized",
      description: "50%+ female participation targeting underserved communities",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Breaks Poverty Cycle",
      description: "Quality education as pathway to socioeconomic mobility",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Zap,
      title: "Future-Ready Workforce",
      description: "AI-powered skills for 21st century economy",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: BookOpen,
      title: "Supports NEP 2020",
      description: "Aligns with National Education Policy objectives",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "UN SDG Alignment",
      description: "Quality Education & Gender Equality (SDG 4 & 5)",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Social Impact ROI
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Technology for genuine social change</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${impact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{impact.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{impact.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-950/20 dark:to-green-950/20 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-800">
          <div className="flex gap-4 items-start">
            <Heart className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Our Commitment</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Every feature is built with India's rural communities at the core. We measure success not just by users
                acquired, but by lives transformed and futures enabled. Our mission is to make quality education a
                fundamental right, not a privilege.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
