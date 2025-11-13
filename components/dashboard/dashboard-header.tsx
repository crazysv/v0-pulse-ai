"use client"

import { useState } from "react"
import { Bell, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  isOnline: boolean
}

export default function DashboardHeader({ isOnline }: DashboardHeaderProps) {
  const [language, setLanguage] = useState("हिंदी")
  const [notifications, setNotifications] = useState(2)

  const languages = ["हिंदी", "English", "తెలుగు", "मराठी", "தமிழ்", "ಕನ್ನಡ", "বাংলা", "ગુજરાતી", "ਪੰਜਾਬੀ", "اردو"]

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-950 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Student Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Priya Sharma</h2>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1">
                  <span className="text-xl">🔥</span>
                  <span className="font-semibold text-orange-500">7 Day Streak</span>
                </span>
                <span className="text-muted-foreground">|</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Level 5 • 850 XP</span>
              </div>
            </div>
          </div>

          {/* Center: Connectivity Status */}
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`} />
            <span className="text-sm font-medium text-foreground">{isOnline ? "Online" : "Offline Mode"}</span>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Languages className="w-4 h-4" />
                <span className="text-xs font-medium">{language}</span>
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-950 border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`w-full text-left px-3 py-2 rounded text-sm ${
                      language === lang
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-semibold"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <Button variant="outline" size="sm" className="relative bg-transparent">
              <Bell className="w-4 h-4" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
