"use client"

import { MessageCircle } from "lucide-react"

interface AITutorButtonProps {
  onClick: () => void
}

export default function AITutorButton({ onClick }: AITutorButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-20 animate-pulse" />
      <div className="flex items-center justify-center">
        <span className="text-2xl mr-1">🤖</span>
        <MessageCircle className="w-6 h-6" />
      </div>
    </button>
  )
}
