"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function ResourcesLibrary() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Resources & Content Library</h2>
        <p className="text-muted-foreground">Curriculum-aligned content and tools</p>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Browse Content</CardTitle>
            <CardDescription>Videos, worksheets, quizzes, and simulations</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Explore Content Library</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Create Custom Assignment</CardTitle>
            <CardDescription>Generate questions using AI</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Create New Assignment</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
