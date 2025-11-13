"use client"

export default function PerformanceAnalytics() {
  const weeklyData = [
    { day: "Mon", hours: 1.5 },
    { day: "Tue", hours: 2.0 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 2.2 },
    { day: "Fri", hours: 1.9 },
    { day: "Sat", hours: 2.5 },
    { day: "Sun", hours: 1.2 },
  ]

  const subjects = [
    { name: "Math", mastery: 75, color: "from-blue-400 to-blue-600" },
    { name: "Science", mastery: 80, color: "from-green-400 to-green-600" },
    { name: "English", mastery: 60, color: "from-orange-400 to-orange-600" },
  ]

  const maxHours = Math.max(...weeklyData.map((d) => d.hours))

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-bold mb-6 text-foreground">Performance Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Learning Time */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Weekly Learning Time</h3>
          <div className="flex items-end justify-between gap-2 h-32">
            {weeklyData.map((data) => (
              <div key={data.day} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-green-400 rounded-t"
                  style={{ height: `${(data.hours / maxHours) * 100}%` }}
                />
                <p className="text-xs font-medium text-muted-foreground mt-2">{data.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Mastery */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Subject-wise Mastery</h3>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{subject.name}</span>
                  <span className="text-sm font-bold text-foreground">{subject.mastery}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${subject.color}`}
                    style={{ width: `${subject.mastery}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths & Areas to Improve */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Your Strengths</h4>
          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <li>✓ Algebra</li>
            <li>✓ Biology</li>
            <li>✓ Reading Comprehension</li>
          </ul>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Areas to Improve</h4>
          <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
            <li>• Grammar</li>
            <li>• Data Interpretation</li>
            <li>• Fractions</li>
          </ul>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <span className="font-semibold">AI Recommendation:</span> Practice 10 more questions on fractions to reach
          mastery level!
        </p>
      </div>
    </div>
  )
}
