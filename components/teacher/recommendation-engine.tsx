"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

const recommendations = [
  "Schedule a review session for Quadrilaterals - 18 students need help",
  "Raj Singh hasn't logged in for 3 days - check in with him",
  "Class 8-A ready for advanced topics - consider enrichment material",
  "Friday 4 PM is optimal time for doubt sessions based on student availability",
]

export default function RecommendationEngine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5" />
          Today's AI Suggestions
        </CardTitle>
        <CardDescription>Actionable insights for better teaching</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <div className="text-blue-600 font-bold text-lg flex-shrink-0">{idx + 1}</div>
            <p className="text-sm">{rec}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
