"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

const assignments = [
  {
    id: 1,
    title: "Quadrilaterals Quiz",
    subject: "Math",
    assigned: "2 days ago",
    submitted: 38,
    total: 45,
    avgScore: 68,
    autoGraded: 100,
    commonMistakes: ["60% students confused about trapezium properties", "40% calculation errors in area problems"],
    status: "in-progress",
  },
  {
    id: 2,
    title: "Linear Equations Assignment",
    subject: "Math",
    assigned: "5 days ago",
    submitted: 45,
    total: 45,
    avgScore: 76,
    autoGraded: 100,
    commonMistakes: [],
    status: "completed",
  },
]

export default function AssignmentGrading() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Assignment Grading</h2>
        <p className="text-muted-foreground">Automated grading and feedback management</p>
      </div>

      <div className="grid gap-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{assignment.title}</CardTitle>
                  <CardDescription>
                    {assignment.subject} · {assignment.assigned}
                  </CardDescription>
                </div>
                <Badge
                  className={
                    assignment.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }
                >
                  {assignment.status === "completed" ? "Completed" : "In Progress"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Submitted</div>
                  <div className="text-lg font-bold">
                    {assignment.submitted}/{assignment.total}
                  </div>
                </div>
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Avg Score</div>
                  <div className="text-lg font-bold">{assignment.avgScore}%</div>
                </div>
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Auto-Graded</div>
                  <div className="text-lg font-bold">{assignment.autoGraded}%</div>
                </div>
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Pending</div>
                  <div className="text-lg font-bold">{assignment.total - assignment.submitted}</div>
                </div>
              </div>

              {assignment.commonMistakes.length > 0 && (
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Common Mistakes Identified</h4>
                      <ul className="space-y-1">
                        {assignment.commonMistakes.map((mistake, idx) => (
                          <li key={idx} className="text-sm">
                            {mistake}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Send Personalized Feedback
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Assign Remedial
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Export Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
