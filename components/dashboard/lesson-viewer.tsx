"use client"

import { useState } from "react"
import { X, Play, Pause, Volume2, Maximize, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LessonViewerProps {
  lesson: any
  onBack: () => void
}

export default function LessonViewer({ lesson, onBack }: LessonViewerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-border">
          <h2 className="font-bold text-foreground">{lesson.title}</h2>
          <button onClick={onBack} className="p-1 hover:bg-muted rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          {/* Video Player */}
          <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative group cursor-pointer">
            <img
              src={lesson.thumbnail || "/placeholder.svg"}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors rounded-lg">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </Button>
            </div>

            {/* Player Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-2 text-white text-sm">
                <div className="flex-1 h-1 bg-white/30 rounded-full">
                  <div className="h-full bg-blue-500 w-2/5 rounded-full" />
                </div>
                <span>5:10 / 12:00</span>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm font-semibold text-foreground mb-2">Available in: {lesson.languages.join(", ")}</p>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">
                <Volume2 className="w-4 h-4 mr-1" /> Subtitles
              </Button>
              <Button variant="outline" size="sm">
                <Maximize className="w-4 h-4 mr-1" /> Fullscreen
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-border">
            <button
              onClick={() => setShowTranscript(false)}
              className={`pb-2 px-1 font-medium text-sm ${!showTranscript ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" : "text-muted-foreground"}`}
            >
              Key Concepts
            </button>
            <button
              onClick={() => setShowTranscript(true)}
              className={`pb-2 px-1 font-medium text-sm ${showTranscript ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" : "text-muted-foreground"}`}
            >
              Transcript
            </button>
          </div>

          {!showTranscript && (
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-1 bg-blue-500 rounded" />
                <div>
                  <p className="font-semibold text-foreground">Quadrilateral Definition</p>
                  <p className="text-sm text-muted-foreground">A 4-sided polygon with 4 vertices and 4 angles</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-green-500 rounded" />
                <div>
                  <p className="font-semibold text-foreground">Sum of Angles</p>
                  <p className="text-sm text-muted-foreground">
                    The sum of interior angles in any quadrilateral is 360°
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 bg-orange-500 rounded" />
                <div>
                  <p className="font-semibold text-foreground">Types</p>
                  <p className="text-sm text-muted-foreground">
                    Square, Rectangle, Parallelogram, Trapezoid, Kite, Rhombus
                  </p>
                </div>
              </div>
            </div>
          )}

          {showTranscript && (
            <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground leading-relaxed">
              <p>
                नमस्ते, मैं आपको quadrilateral के बारे में समझाता हूं। एक quadrilateral एक चार-भुजीय बहुभुज है जिसमें 4 vertices और 4
                angles हैं। किसी भी quadrilateral के interior angles का sum हमेशा 360 degrees होता है...
              </p>
            </div>
          )}

          {/* Practice Questions */}
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 space-y-3">
            <h3 className="font-semibold text-foreground">Related Practice Questions</h3>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <MessageCircle className="w-4 h-4 mr-2" /> Ask Gemini About This Topic
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
