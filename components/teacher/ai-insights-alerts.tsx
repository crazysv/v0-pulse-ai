"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react"

const alerts = [
  {
    level: "high",
    icon: AlertCircle,
    title: "3 students at risk of dropping out",
    description: "Attendance below 60% in the last 10 days",
    students: [
      "Priya Kumar - Absent 8/10 days",
      "Raj Singh - Performance dropped 30%",
      "Anita Devi - No activity for 5 days",
    ],
    actions: ["Contact Parent", "Schedule 1-on-1", "Assign Remedial"],
  },
  {
    level: "medium",
    icon: AlertTriangle,
    title: "5 students struggling with Quadrilaterals",
    description: "Average score of 45% on recent assessment",
    students: ["Group doubt session recommended", "Assign adaptive practice materials"],
    actions: ["Schedule Session", "Assign Practice"],
  },
  {
    level: "positive",
    icon: CheckCircle2,
    title: "Ravi Sharma improved 40% in Math",
    description: "Outstanding progress this month",
    students: ["Now scoring 85% in math concepts"],
    actions: ["Send Encouragement"],
  },
]

export default function AIInsightsAlerts() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">AI-Powered Insights & Alerts</h2>
        <p className="text-muted-foreground">Priority alerts and recommendations</p>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert, index) => {
          const Icon = alert.icon
          const bgColor =
            alert.level === "high"
              ? "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
              : alert.level === "medium"
                ? "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800"
                : "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
          const iconColor =
            alert.level === "high" ? "text-red-600" : alert.level === "medium" ? "text-yellow-600" : "text-green-600"

          return (
            <Card key={index} className={`${bgColor} border`}>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 mt-1 ${iconColor}`} />
                  <div className="flex-1">
                    <CardTitle className="text-base">{alert.title}</CardTitle>
                    <CardDescription className="mt-1">{alert.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  {alert.students.map((student, i) => (
                    <p key={i} className="text-sm">
                      {student}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {alert.actions.map((action) => (
                    <Button key={action} size="sm" variant="outline">
                      {action}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
