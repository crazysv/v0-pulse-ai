"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topics = ["Rational Numbers", "Linear Equations", "Quadrilaterals", "Algebraic Expressions", "Data Handling"]

const classes = ["8-A", "8-B", "8-C"]

const heatmapData = [
  [85, 78, 82],
  [72, 65, 70],
  [45, 52, 48],
  [88, 81, 85],
  [68, 60, 65],
]

const getColor = (value) => {
  if (value >= 75) return "bg-green-100 dark:bg-green-900"
  if (value >= 50) return "bg-yellow-100 dark:bg-yellow-900"
  return "bg-red-100 dark:bg-red-900"
}

export default function TopicMasteryHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Topic Mastery Heatmap</CardTitle>
        <CardDescription>Performance by topic and class section</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2 px-3 font-medium text-sm">Topic</th>
                {classes.map((cls) => (
                  <th key={cls} className="text-center py-2 px-3 font-medium text-sm">
                    {cls}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, topicIdx) => (
                <tr key={topic} className="border-t border-border">
                  <td className="py-3 px-3 font-medium text-sm">{topic}</td>
                  {classes.map((cls, classIdx) => (
                    <td key={`${topic}-${cls}`} className="py-3 px-3 text-center">
                      <div
                        className={`inline-block w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${getColor(heatmapData[topicIdx][classIdx])}`}
                      >
                        {heatmapData[topicIdx][classIdx]}%
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Color coding: Green (75%+) | Yellow (50-75%) | Red (&lt;50%)
        </p>
      </CardContent>
    </Card>
  )
}
