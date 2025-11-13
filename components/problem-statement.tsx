"use client"

import { useEffect, useRef } from "react"
import { Wifi, Smartphone, BookOpen, Users } from "lucide-react"

export default function ProblemStatement() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              The Problem
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            70% of India's population lives in rural areas with only 12% of schools equipped with computers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16" ref={containerRef}>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-950 flex items-center justify-center flex-shrink-0">
                <Wifi className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Connectivity Crisis</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  75% of rural areas lack reliable internet connectivity
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Device Shortage</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Most students only have access to basic smartphones
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-950 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Language Barrier</h3>
                <p className="text-slate-600 dark:text-slate-400">Content primarily available in English only</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-950 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Teacher Shortage</h3>
                <p className="text-slate-600 dark:text-slate-400">1 teacher per 100+ students in rural schools</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border-2 border-orange-200 dark:border-orange-900 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                70%
              </div>
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">Rural Population</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">vs 12% with computer access</p>
              <div className="mt-8 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 h-full" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
