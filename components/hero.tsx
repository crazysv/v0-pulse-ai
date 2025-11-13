"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const languages = ["Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati"]

export default function Hero() {
  const [currentLang, setCurrentLang] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-sm font-semibold">
            🎓 Revolutionizing Rural EdTech
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent leading-tight">
            Bridging India's Rural-Urban Education Gap
          </span>
          <span className="block text-slate-900 dark:text-white mt-4">with AI</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-light">
          Serving 150M+ rural students with personalized, offline-first learning
        </p>

        <div className="h-12 mb-8 flex items-center justify-center">
          <div className="text-lg font-semibold text-green-600">
            Learn in <span className="font-bold ml-2">{languages[currentLang]}</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105"
          >
            Start Free Learning
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </Link>
          <Link
            href="/teacher-dashboard"
            className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 dark:hover:bg-green-950 transition"
          >
            For Schools/NGOs
          </Link>
        </div>

        {/* Animated statistics preview */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg backdrop-blur">
            <div className="text-2xl font-bold text-orange-600">40%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Score Improvement</div>
          </div>
          <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg backdrop-blur">
            <div className="text-2xl font-bold text-green-600">25%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Dropout Reduction</div>
          </div>
          <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg backdrop-blur">
            <div className="text-2xl font-bold text-blue-600">80%+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Grade Mastery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
