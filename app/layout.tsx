import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BudgetSavvy",
  description: "Empower your personal finances",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground p-4">
            <h1 className="text-2xl font-bold">BudgetSavvy</h1>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-muted p-4 text-center">
            <p>&copy; 2025 BudgetSavvy. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'