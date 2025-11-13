"use client"

import { Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GamificationPanel() {
  const badges = [
    { id: 1, name: "7-Day Streak Champion", icon: "🔥", earned: true },
    { id: 2, name: "Math Wizard", icon: "🧙‍♂️", earned: true },
    { id: 3, name: "Quick Learner", icon: "⚡", earned: true },
  ]

  const leaderboardRank = 12
  const schoolTotal = 150

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-bold mb-6 text-foreground">Achievements</h2>

      {/* Recent Badges */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Recent Badges</h3>
        <div className="space-y-2">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
            >
              <span className="text-2xl">{badge.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{badge.name}</p>
              </div>
              {badge.earned && <div className="w-2 h-2 rounded-full bg-green-500" />}
            </div>
          ))}
        </div>
        <Button variant="link" className="text-blue-600 dark:text-blue-400 mt-2 p-0">
          +3 more badges
        </Button>
      </div>

      {/* Leaderboard Preview */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 space-y-3">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          School Leaderboard
        </h3>

        <div className="bg-white/50 dark:bg-slate-900/50 p-3 rounded text-center">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">#{leaderboardRank}</p>
          <p className="text-sm text-muted-foreground">
            You're in the top {Math.round((leaderboardRank / schoolTotal) * 100)}%
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-foreground">Top Performers This Week:</p>
          <div className="space-y-1">
            <p className="text-muted-foreground">🥇 Student A - 2,450 XP</p>
            <p className="text-muted-foreground">🥈 Student B - 2,380 XP</p>
            <p className="text-muted-foreground">🥉 Student C - 2,210 XP</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">Complete 2 more lessons to reach Top 10!</p>
      </div>
    </div>
  )
}
