"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const classData = [
  {
    id: "8-A",
    name: "Class 8-A",
    students: 25,
    performance: 76,
    trend: 8,
    attendance: 92,
    needsAttention: 3,
  },
  {
    id: "8-B",
    name: "Class 8-B",
    students: 20,
    performance: 71,
    trend: -2,
    attendance: 88,
    needsAttention: 5,
  },
  {
    id: "8-C",
    name: "Class 8-C",
    students: 22,
    performance: 74,
    trend: 5,
    attendance: 90,
    needsAttention: 2,
  },
]

export default function ClassPerformanceOverview() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Class Performance Summary</h2>
        <p className="text-muted-foreground">Overview of all your classes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classData.map((cls) => (
          <Card key={cls.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{cls.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Users className="w-4 h-4" />
                    {cls.students} Students
                  </CardDescription>
                </div>
                {cls.trend > 0 ? (
                  <Badge className="bg-green-100 text-green-800">↑ {cls.trend}%</Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-800">↓ {Math.abs(cls.trend)}%</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Avg. Performance</span>
                  <span className="text-lg font-bold">{cls.performance}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${cls.performance}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-card p-2 rounded border border-border">
                  <div className="text-xs text-muted-foreground">Attendance</div>
                  <div className="text-lg font-bold">{cls.attendance}%</div>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-2 rounded border border-red-200 dark:border-red-800">
                  <div className="text-xs text-muted-foreground">Needs Attention</div>
                  <div className="text-lg font-bold text-red-600">{cls.needsAttention}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
