"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Flame } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const students = [
  {
    id: 1,
    name: "Priya Kumar",
    roll: "A-01",
    performance: 72,
    percentile: 65,
    streak: 12,
    timeToday: 45,
    strengths: ["Algebra", "Science"],
    weaknesses: ["Grammar", "Data Handling"],
  },
  {
    id: 2,
    name: "Raj Singh",
    roll: "A-02",
    performance: 68,
    percentile: 55,
    streak: 5,
    timeToday: 30,
    strengths: ["Math", "History"],
    weaknesses: ["English", "Geometry"],
  },
  {
    id: 3,
    name: "Anita Devi",
    roll: "A-03",
    performance: 85,
    percentile: 90,
    streak: 28,
    timeToday: 60,
    strengths: ["Science", "Math", "English"],
    weaknesses: ["Sports"],
  },
]

export default function StudentAnalytics() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.roll.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Student Analytics</h2>
        <p className="text-muted-foreground">Individual student performance and progress</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or roll number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/.jpg?height=48&width=48&query=${student.name}`} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">Roll: {student.roll}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{student.performance}%</div>
                  <p className="text-xs text-muted-foreground">Overall Performance</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Class Percentile</div>
                  <div className="text-lg font-bold">{student.percentile}%</div>
                </div>
                <div className="bg-card rounded border border-border p-3">
                  <div className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-500" />
                    <div className="text-xs text-muted-foreground">Learning Streak</div>
                  </div>
                  <div className="text-lg font-bold">{student.streak} days</div>
                </div>
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Time Today</div>
                  <div className="text-lg font-bold">{student.timeToday} mins</div>
                </div>
                <div className="bg-card rounded border border-border p-3">
                  <div className="text-xs text-muted-foreground">Mood</div>
                  <div className="text-lg font-bold">Engaged</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-xs font-semibold mb-2 text-green-700">Strengths</h4>
                  <div className="flex gap-2 flex-wrap">
                    {student.strengths.map((strength) => (
                      <Badge key={strength} variant="outline" className="bg-green-50 border-green-200">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold mb-2 text-red-700">Weaknesses</h4>
                  <div className="flex gap-2 flex-wrap">
                    {student.weaknesses.map((weakness) => (
                      <Badge key={weakness} variant="outline" className="bg-red-50 border-red-200">
                        {weakness}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  Contact Parent
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
