"use client"

import { BarChart3, Users, Building2, TrendingUp } from "lucide-react"

export default function BusinessModel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Business Model
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Sustainable revenue streams with social impact</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Revenue Streams */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold mb-1">Individual Users</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">₹0-500/month</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-green-300 transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold mb-1">Schools/NGOs</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">₹10,000-50,000/month</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold mb-1">Government Partnerships</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Subsidized programs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Projection */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-8">Growth Projection</h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Year 1</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">50K users • ₹1.5Cr</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full" style={{ width: "25%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Year 2</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">500K users • ₹8Cr</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 h-full" style={{ width: "60%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Year 3</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">1M+ users • ₹25Cr+</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex gap-2 items-start">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-700 dark:text-green-300">
                  <span className="font-semibold">Path to profitability:</span> Year 2 with strong unit economics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
