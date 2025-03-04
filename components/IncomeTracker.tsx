"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Income = {
  id: number
  date: string
  source: string
  amount: number
}

export default function IncomeTracker() {
  const [incomes, setIncomes] = useState<Income[]>([])
  const [newIncome, setNewIncome] = useState({
    date: "",
    source: "",
    amount: "",
  })

  const handleAddIncome = (e: React.FormEvent) => {
    e.preventDefault()
    const income: Income = {
      id: Date.now(),
      date: newIncome.date,
      source: newIncome.source,
      amount: Number.parseFloat(newIncome.amount),
    }
    setIncomes([...incomes, income])
    setNewIncome({ date: "", source: "", amount: "" })
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleAddIncome} className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              value={newIncome.date}
              onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="source">Source</Label>
            <Input
              type="text"
              id="source"
              value={newIncome.source}
              onChange={(e) => setNewIncome({ ...newIncome, source: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              value={newIncome.amount}
              onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
              required
            />
          </div>
        </div>
        <Button type="submit">Add Income</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incomes.map((income) => (
            <TableRow key={income.id}>
              <TableCell>{income.date}</TableCell>
              <TableCell>{income.source}</TableCell>
              <TableCell>${income.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

