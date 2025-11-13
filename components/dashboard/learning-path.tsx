"use client"

import { CheckCircle, Lock, Target } from "lucide-react"

export default function LearningPath() {
  const topics = [
    { id: 1, name: "Rational Numbers", status: "completed", difficulty: "Easy", time: "20 mins", rating: 4.5 },
    { id: 2, name: "Linear Equations", status: "completed", difficulty: "Easy", time: "25 mins", rating: 4.8 },
    { id: 3, name: "Quadrilaterals", status: "current", difficulty: "Medium", time: "20 mins", rating: 4.2 },
    { id: 4, name: "Data Handling", status: "locked", difficulty: "Medium", time: "30 mins", rating: 0 },
    { id: 5, name: "Squares & Square Roots", status: "locked", difficulty: "Hard", time: "35 mins", rating: 0 },
  ]

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-bold mb-6 text-foreground">Class 8 Math Learning Path</h2>

      <div className="relative">
        {/* Path Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-gray-300 dark:from-blue-600 dark:via-green-600 dark:to-gray-700" />

        {/* Topics */}
        <div className="flex flex-wrap items-start justify-between gap-4 relative z-10">
          {topics.map((topic, index) => (
            <div key={topic.id} className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/5">
              <div
                className={`relative mb-4 p-3 rounded-full ${
                  topic.status === "completed"
                    ? "bg-green-100 dark:bg-green-900"
                    : topic.status === "current"
                      ? "bg-blue-100 dark:bg-blue-900 animate-pulse"
                      : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                {topic.status === "completed" && <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />}
                {topic.status === "current" && <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                {topic.status === "locked" && <Lock className="w-8 h-8 text-gray-400 dark:text-gray-600" />}
              </div>

              <h3 className="font-semibold text-sm text-center text-foreground mb-1">{topic.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{topic.difficulty}</p>
              <p className="text-xs text-muted-foreground text-center">{topic.time}</p>

              {topic.rating > 0 && <p className="text-xs text-yellow-500 mt-1">⭐ {topic.rating}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <p className="text-sm text-green-900 dark:text-green-100">
          <span className="font-semibold">Recommended:</span> Continue with Quadrilaterals to build on your Linear
          Equations mastery!
        </p>
      </div>
    </div>
  )
}
