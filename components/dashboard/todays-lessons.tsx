"use client"

import { useState } from "react"
import { Play, BookOpen, Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import LessonViewer from "./lesson-viewer"

export default function TodaysLessons() {
  const [selectedLesson, setSelectedLesson] = useState(null)

  const lessons = [
    {
      id: 1,
      type: "video",
      title: "Properties of Quadrilaterals",
      duration: "12 mins",
      progress: 40,
      languages: ["हिंदी", "English", "తెలుగు"],
      thumbnail: "/math-quadrilaterals.jpg",
    },
    {
      id: 2,
      type: "practice",
      title: "Practice: Angle Properties",
      questions: 15,
      estimatedTime: "20 mins",
      difficulty: "Medium - Adjusts to your level",
      thumbnail: null,
    },
    {
      id: 3,
      type: "quiz",
      title: "Daily Challenge: Geometry Basics",
      questions: 5,
      duration: "5 mins",
      xp: 50,
      expiresIn: "4 hours",
      thumbnail: null,
    },
  ]

  if (selectedLesson) {
    return <LessonViewer lesson={selectedLesson} onBack={() => setSelectedLesson(null)} />
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Today's Learning</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
          >
            {lesson.thumbnail && (
              <div className="relative h-40 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center overflow-hidden">
                <img
                  src={lesson.thumbnail || "/placeholder.svg"}
                  alt={lesson.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            )}

            {!lesson.thumbnail && (
              <div
                className={`h-32 flex items-center justify-center ${
                  lesson.type === "practice"
                    ? "bg-gradient-to-br from-purple-400 to-pink-400"
                    : "bg-gradient-to-br from-orange-400 to-red-400"
                }`}
              >
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            )}

            <div className="p-4">
              <h3 className="font-bold text-foreground mb-2">{lesson.title}</h3>

              {lesson.type === "video" && (
                <>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${lesson.progress}%` }} />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Available in: {lesson.languages.join(", ")}</p>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      size="sm"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      <Play className="w-4 h-4 mr-1" /> Watch
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}

              {lesson.type === "practice" && (
                <>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">{lesson.questions}</span> adaptive questions
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">{lesson.difficulty}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" size="sm">
                    <Play className="w-4 h-4 mr-1" /> Start Practice
                  </Button>
                </>
              )}

              {lesson.type === "quiz" && (
                <>
                  <p className="text-sm text-muted-foreground mb-1">
                    <span className="font-semibold text-foreground">{lesson.questions}</span> questions •{" "}
                    {lesson.duration}
                  </p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                    Earn {lesson.xp} XP + Badge
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">Expires in {lesson.expiresIn}</p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" size="sm">
                    <Play className="w-4 h-4 mr-1" /> Take Challenge
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
