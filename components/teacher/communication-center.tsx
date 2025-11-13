"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, MessageSquare } from "lucide-react"

const templates = ["Student falling behind", "Great progress", "Assignment reminder", "Parent meeting scheduled"]

export default function CommunicationCenter() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Communication Center</h2>
        <p className="text-muted-foreground">Send messages to students, parents, and colleagues</p>
      </div>

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="parents">Parents</TabsTrigger>
          <TabsTrigger value="colleagues">Colleagues</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Send Message to Students</CardTitle>
              <CardDescription>Individual or bulk messaging with templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-2">Message Templates</label>
                <div className="grid grid-cols-2 gap-2">
                  {templates.map((template) => (
                    <Button
                      key={template}
                      variant={selectedTemplate === template ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTemplate(template)}
                    >
                      {template}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Message Content</label>
                <textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                />
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parents" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Send Message to Parents</CardTitle>
              <CardDescription>Multilingual support with auto-translation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-2">Select Parent Language</label>
                <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Regional Language</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Message Content</label>
                <textarea
                  placeholder="Type your message..."
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                />
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Send via SMS/WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="colleagues" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Connect with Colleagues</CardTitle>
              <CardDescription>Peer learning and collaboration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full bg-transparent">
                <MessageSquare className="w-4 h-4 mr-2" />
                Find Teachers to Connect
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
