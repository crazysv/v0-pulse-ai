"use client"

import { useEffect, useRef, useState } from "react"
import { Users, TrendingUp, Award, Zap } from "lucide-react"

interface Counter {
  icon: any
  value: number
  suffix: string
  label: string
  color: string
}

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000
        const increment = target / (duration / 50)
        let current = 0

        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(interval)
          } else {
            setCount(Math.floor(current))
          }
        }, 50)

        return () => clearInterval(interval)
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  )
}

export default function ImpactMetrics() {
  const counters: Counter[] = [
    {
      icon: Users,
      value: 100,
      suffix: "M+",
      label: "Students Reached (Target)",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      value: 80,
      suffix: "%",
      label: "Grade-Level Mastery",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      value: 50,
      suffix: "%",
      label: "Female Participation",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Zap,
      value: 10,
      suffix: "+",
      label: "Hours Saved per Teacher/Week",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Impact Metrics</h2>
          <p className="text-xl text-slate-300">Measurable outcomes from our AI-powered education platform</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {counters.map((counter, index) => {
            const Icon = counter.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-white/40 transition"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${counter.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <AnimatedCounter target={counter.value} suffix={counter.suffix} />
                <p className="text-slate-300 mt-2">{counter.label}</p>
                <div className="mt-4 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${counter.color} h-full animate-pulse`}
                    style={{ width: `${counter.value}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
