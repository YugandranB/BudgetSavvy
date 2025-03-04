"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type BudgetItem = {
  id: number
  category: string
  amount: number
}

export default function BudgetCreator() {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([])
  const [newBudgetItem, setNewBudgetItem] = useState({
    category: "",
    amount: "",
  })

  const handleAddBudgetItem = (e: React.FormEvent) => {
    e.preventDefault()
    const budgetItem: BudgetItem = {
      id: Date.now(),
      category: newBudgetItem.category,
      amount: Number.parseFloat(newBudgetItem.amount),
    }
    setBudgetItems([...budgetItems, budgetItem])
    setNewBudgetItem({ category: "", amount: "" })
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleAddBudgetItem} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setNewBudgetItem({ ...newBudgetItem, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="amount">Budget Amount</Label>
            <Input
              type="number"
              id="amount"
              value={newBudgetItem.amount}
              onChange={(e) => setNewBudgetItem({ ...newBudgetItem, amount: e.target.value })}
              required
            />
          </div>
        </div>
        <Button type="submit">Add Budget Item</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Budget Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgetItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.category}</TableCell>
              <TableCell>${item.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

