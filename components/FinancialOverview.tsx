"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Mock data for demonstration
const data = [
  { name: "Jan", expenses: 4000, income: 2400 },
  { name: "Feb", expenses: 3000, income: 1398 },
  { name: "Mar", expenses: 2000, income: 9800 },
  { name: "Apr", expenses: 2780, income: 3908 },
  { name: "May", expenses: 1890, income: 4800 },
  { name: "Jun", expenses: 2390, income: 3800 },
]

export default function FinancialOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$24,106</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$16,060</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Net Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$8,046</p>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="expenses" fill="#ef4444" />
              <Bar dataKey="income" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

