"use client"

import { Bell, Settings, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeacherHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Welcome */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary">Pulse</div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-lg">Welcome, Ramesh Sir</h1>
              <p className="text-sm text-muted-foreground">Govt. School, Samastipur</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-8 px-6 py-3 bg-card rounded-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold">45</div>
              <div className="text-xs text-muted-foreground">Total Students</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">38</div>
              <div className="text-xs text-muted-foreground">Active Today (84%)</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">78%</div>
              <div className="text-xs text-muted-foreground">Avg. Completion</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">12h</div>
              <div className="text-xs text-muted-foreground">Time Saved</div>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar className="w-10 h-10">
              <AvatarImage src="/diverse-classroom-teacher.png" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
