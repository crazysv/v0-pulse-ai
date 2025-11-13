"use client"

import type React from "react"
import Link from "next/link"

import { ArrowRight, Zap } from "lucide-react"
import { useState } from "react"

export default function CallToAction() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Ready to Transform Education?</h2>
          <p className="text-xl text-slate-300 mb-8">Join us in bridging the rural-urban education gap with AI</p>
        </div>

        {/* Three pathways */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-white/40 transition text-center">
              <div className="text-5xl mb-4">👧</div>
              <h3 className="text-xl font-bold text-white mb-3">I'm a Student</h3>
              <p className="text-slate-300 mb-6">Start your free learning journey</p>
              <Link
                href="/dashboard"
                className="w-full inline-block py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
              >
                Free Signup
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-white/40 transition text-center">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-white mb-3">I'm a Teacher/School</h3>
              <p className="text-slate-300 mb-6">Request an exclusive demo</p>
              <Link
                href="/teacher-dashboard"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-white/40 transition text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">I'm an Investor/Partner</h3>
              <p className="text-slate-300 mb-6">Explore partnership opportunities</p>
              <button className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition">
                Contact Us
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Stay Updated</h3>
          <p className="text-slate-300 text-center mb-6">Get notified when we launch in your state</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-slate-400 focus:outline-none focus:border-white/50 transition"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition whitespace-nowrap"
            >
              {submitted ? "Thank you!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Footer message */}
        <div className="text-center mt-12">
          <p className="text-slate-400">
            <Zap className="w-4 h-4 inline text-yellow-400 mr-2" />
            Let's build an inclusive future where every child in India has access to world-class education
          </p>
        </div>
      </div>
    </section>
  )
}
