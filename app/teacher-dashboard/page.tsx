"use client"

import { useState } from "react"
import TeacherHeader from "@/components/teacher/teacher-header"
import ClassPerformanceOverview from "@/components/teacher/class-performance-overview"
import AIInsightsAlerts from "@/components/teacher/ai-insights-alerts"
import StudentAnalytics from "@/components/teacher/student-analytics"
import TopicMasteryHeatmap from "@/components/teacher/topic-mastery-heatmap"
import AssignmentGrading from "@/components/teacher/assignment-grading"
import CommunicationCenter from "@/components/teacher/communication-center"
import WeeklyWorkSummary from "@/components/teacher/weekly-work-summary"
import ResourcesLibrary from "@/components/teacher/resources-library"
import RecommendationEngine from "@/components/teacher/recommendation-engine"
import TeacherChatbot from "@/components/teacher/teacher-chatbot"

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedClass, setSelectedClass] = useState("8-A")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <TeacherHeader />

      {/* Main Navigation Tabs */}
      <div className="border-b border-border sticky top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-8 overflow-x-auto">
            {["Overview", "Students", "Classes", "Assignments", "Communication", "Reports"].map((tab) => (
              <button
                key={tab.toLowerCase()}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.toLowerCase()
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ClassPerformanceOverview />
              </div>
              <RecommendationEngine />
            </div>
            <AIInsightsAlerts />
            <TopicMasteryHeatmap />
            <WeeklyWorkSummary />
          </div>
        )}

        {activeTab === "students" && (
          <div className="space-y-6">
            <StudentAnalytics />
          </div>
        )}

        {activeTab === "classes" && (
          <div className="space-y-6">
            <ClassPerformanceOverview />
          </div>
        )}

        {activeTab === "assignments" && (
          <div className="space-y-6">
            <AssignmentGrading />
          </div>
        )}

        {activeTab === "communication" && (
          <div className="space-y-6">
            <CommunicationCenter />
          </div>
        )}

        {activeTab === "reports" && (
          <div className="space-y-6">
            <ResourcesLibrary />
          </div>
        )}
      </div>

      {/* Floating Chatbot Button */}
      <TeacherChatbot />
    </main>
  )
}
