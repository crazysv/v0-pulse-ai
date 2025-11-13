"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export default function WeeklyWorkSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Work Summary</CardTitle>
        <CardDescription>Time saved and tasks completed this week</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card rounded border border-border p-4">
            <div className="text-xs text-muted-foreground mb-1">Total Time Saved</div>
            <div className="text-3xl font-bold">12h</div>
            <div className="text-xs text-muted-foreground mt-2">
              <div>Auto-grading: 8h</div>
              <div>AI Feedback: 2h</div>
              <div>Reports: 2h</div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800 p-4">
            <div className="text-xs font-semibold mb-1 text-green-700">Assignments Graded</div>
            <div className="text-3xl font-bold text-green-700">5</div>
            <Badge className="mt-2 bg-green-100 text-green-800">Completed</Badge>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800 p-4">
            <div className="text-xs font-semibold mb-1 text-blue-700">Feedback Messages</div>
            <div className="text-3xl font-bold text-blue-700">45</div>
            <Badge className="mt-2 bg-blue-100 text-blue-800">Sent</Badge>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/20 rounded border border-purple-200 dark:border-purple-800 p-4">
            <div className="text-xs font-semibold mb-1 text-purple-700">At-Risk Students</div>
            <div className="text-3xl font-bold text-purple-700">12</div>
            <Badge className="mt-2 bg-purple-100 text-purple-800">Identified</Badge>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h3 className="font-semibold mb-3">Tasks Completed</h3>
          <ul className="space-y-2">
            {[
              "5 assignments graded automatically",
              "45 personalized feedback messages sent",
              "12 at-risk students identified",
              "3 parent meetings scheduled",
            ].map((task) => (
              <li key={task} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
