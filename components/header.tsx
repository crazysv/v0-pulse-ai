"use client"

import { useEffect } from "react"

import { useState } from "react"

import { Heart } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm" : "bg-white dark:bg-slate-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Sarthi
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#problem"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 transition"
            >
              Problem
            </Link>
            <Link
              href="#solution"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 transition"
            >
              Solution
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 transition"
            >
              Impact
            </Link>
          </nav>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-semibold hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
