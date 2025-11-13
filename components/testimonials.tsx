"use client"

import { Quote, Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya",
      role: "Class 8 Student, Rural UP",
      quote: "I can now learn Math in Hindi at my own pace! No more struggling because the teacher explains too fast.",
      avatar: "👧",
      rating: 5,
    },
    {
      name: "Ramesh Sir",
      role: "Teacher, Bihar",
      quote:
        "Grading time reduced from 5 hours to 30 minutes. I can now focus on understanding each student's needs better.",
      avatar: "👨‍🏫",
      rating: 5,
    },
    {
      name: "Dr. Sharma",
      role: "School Principal, Madhya Pradesh",
      quote:
        "Pulse AI has transformed how we deliver education. Student engagement and scores have both improved significantly.",
      avatar: "👨‍💼",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Real voices, real impact</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="mb-6">
                <Quote className="w-6 h-6 text-orange-200 mb-2" />
                <p className="text-slate-700 dark:text-slate-300 text-lg italic">{testimonial.quote}</p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            <span className="font-semibold text-slate-900 dark:text-white">Join 50,000+ students</span> already learning
            with Pulse AI
          </p>
        </div>
      </div>
    </section>
  )
}
