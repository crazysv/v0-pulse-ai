"use client"

import React from "react"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import WelcomeSection from "@/components/dashboard/welcome-section"
import LearningPath from "@/components/dashboard/learning-path"
import TodaysLessons from "@/components/dashboard/todays-lessons"
import PerformanceAnalytics from "@/components/dashboard/performance-analytics"
import GamificationPanel from "@/components/dashboard/gamification-panel"
import AITutorButton from "@/components/dashboard/ai-tutor-button"
import AITutorChat from "@/components/dashboard/ai-tutor-chat"
import OfflineIndicator from "@/components/dashboard/offline-indicator"

export default function StudentDashboard() {
  const [chatOpen, setChatOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-green-50 to-background dark:from-slate-950 dark:via-slate-900 dark:to-background">
      {!isOnline && <OfflineIndicator />}

      <DashboardHeader isOnline={isOnline} />

      <div className="container mx-auto px-4 py-6 space-y-8">
        <WelcomeSection />

        <LearningPath />

        <TodaysLessons />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceAnalytics />
          </div>
          <div>
            <GamificationPanel />
          </div>
        </div>
      </div>

      {/* AI Tutor Floating Button */}
      <AITutorButton onClick={() => setChatOpen(true)} />

      {/* AI Tutor Chat Modal */}
      {chatOpen && <AITutorChat onClose={() => setChatOpen(false)} />}
    </main>
  )
}
