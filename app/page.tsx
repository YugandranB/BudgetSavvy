import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <h1 className="text-4xl font-bold mb-6">Welcome to BudgetSavvy</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Empower your personal finances with easy expense tracking, smart budgeting, and AI-powered insights.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </div>
  )
}

