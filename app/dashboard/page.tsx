"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpenseTracker from "@/components/ExpenseTracker"
import BudgetCreator from "@/components/BudgetCreator"
import IncomeTracker from "@/components/IncomeTracker"
import FinancialOverview from "@/components/FinancialOverview"
import AIFinanceBot from "@/components/AIFinanceBot"

export default function Dashboard() {
  const [showAIBot, setShowAIBot] = useState(false)

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Your Financial Dashboard</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <FinancialOverview />
        </TabsContent>
        <TabsContent value="expenses">
          <ExpenseTracker />
        </TabsContent>
        <TabsContent value="budget">
          <BudgetCreator />
        </TabsContent>
        <TabsContent value="income">
          <IncomeTracker />
        </TabsContent>
      </Tabs>
      <Card>
        <CardHeader>
          <CardTitle>AI Finance Bot</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setShowAIBot(!showAIBot)}>{showAIBot ? "Hide AI Bot" : "Get AI Assistance"}</Button>
          {showAIBot && <AIFinanceBot />}
        </CardContent>
      </Card>
    </div>
  )
}

