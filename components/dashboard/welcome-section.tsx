"use client"

export default function WelcomeSection() {
  const greeting = "Good Morning, Priya!"
  const motivationalQuotes = [
    "Knowledge is power, and you are building yours!",
    "Every lesson brings you closer to your dreams.",
    "Your consistency today becomes your success tomorrow.",
    "Learning is a journey, not a destination.",
    "You are smarter than you think!",
  ]

  const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  const todayProgress = 3
  const totalLessons = 5

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 dark:from-blue-900 dark:via-blue-800 dark:to-green-900 rounded-xl p-8 text-white shadow-lg">
      <h1 className="text-3xl font-bold mb-2">{greeting}</h1>
      <p className="text-blue-50 dark:text-blue-200 text-lg mb-6">{quote}</p>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Today's Learning Goal</span>
          <span>
            {todayProgress}/{totalLessons} lessons completed
          </span>
        </div>
        <div className="w-full bg-white/30 dark:bg-black/30 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white dark:bg-green-300 h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(todayProgress / totalLessons) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
