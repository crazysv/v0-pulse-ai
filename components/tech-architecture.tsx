"use client"

import { ArrowRight, Database, Cpu, Cloud, Smartphone } from "lucide-react"

export default function TechArchitecture() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Tech Architecture
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Robust, scalable, and resilient infrastructure</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Student/Teacher Devices */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 flex flex-col items-center">
              <Smartphone className="w-12 h-12 text-blue-600 mb-3" />
              <h3 className="font-semibold text-center">
                Student &<br />
                Teacher Devices
              </h3>
              <p className="text-xs text-slate-500 text-center mt-2">iOS, Android, Web</p>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>

            {/* Frontend */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 flex flex-col items-center">
              <Cpu className="w-12 h-12 text-blue-600 mb-3" />
              <h3 className="font-semibold text-center">Frontend</h3>
              <p className="text-xs text-slate-500 text-center mt-2">React PWA</p>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>

            {/* Gemini AI - Highlighted */}
            <div className="relative md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-600 rounded-xl blur-xl opacity-60 animate-pulse" />
              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-orange-500 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-center text-orange-600">
                  Google
                  <br />
                  Gemini AI
                </h3>
                <p className="text-xs text-slate-500 text-center mt-2">Adaptive Learning</p>
              </div>
            </div>
          </div>

          {/* Backend flows */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-slate-200 dark:border-slate-700 text-center">
              <p className="font-semibold text-sm mb-2">Backend</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Node.js + FastAPI</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-slate-200 dark:border-slate-700 text-center">
              <Database className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-xs text-slate-600 dark:text-slate-400">PostgreSQL</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-slate-200 dark:border-slate-700 text-center">
              <Cloud className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xs text-slate-600 dark:text-slate-400">Redis Caching</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border-2 border-slate-200 dark:border-slate-700 text-center">
              <Cloud className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-xs text-slate-600 dark:text-slate-400">Cloud Deployment</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 border-l-4 border-blue-600">
          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Why this architecture?</span> Designed for minimal data usage, offline-first
            operation, and seamless synchronization. Supports millions of concurrent users across diverse network
            conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
