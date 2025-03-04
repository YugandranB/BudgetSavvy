"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, HelpCircle } from "lucide-react"

const EXAMPLE_QUESTIONS = [
  "How can I create a basic monthly budget?",
  "What's the difference between good debt and bad debt?",
  "How can I start building an emergency fund?",
  "What are some effective ways to reduce monthly expenses?",
]

export default function AIFinanceBot() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    setError("")

    try {
      const res = await fetch("/api/ai-finance-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to fetch response from AI")
      }

      const data = await res.json()
      setResponse(data.response)
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setError("Sorry, I encountered an error. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleClick = (question: string) => {
    setInput(question)
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          AI Finance Assistant
          <HelpCircle className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription>Ask me anything about personal finance, budgeting, or money management</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Ask a finance question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Ask AI"
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {response && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p className="whitespace-pre-wrap">{response}</p>
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-sm font-medium mb-2">Example questions:</h4>
          <div className="grid gap-2">
            {EXAMPLE_QUESTIONS.map((question) => (
              <Button
                key={question}
                variant="ghost"
                className="justify-start h-auto py-2 px-3 text-left"
                onClick={() => handleExampleClick(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

