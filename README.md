# BudgetSavvy - AI-Powered Budgeting Web App

## 🚀 Live Demo
[BudgetSavvy Web App](https://v0-new-project-cwlvc3lxt2k.vercel.app/)

## 📌 Overview
**BudgetSavvy** is a smart, AI-powered budgeting web application designed to help users track expenses, manage savings, and optimize spending. It features an intuitive user interface, real-time financial insights, and a Gemini-powered finance bot for personalized assistance.

## ✨ Features
- 📊 **Expense Tracking** – Log and categorize daily expenses.
- 💰 **Budget Management** – Set monthly budgets and receive alerts.
- 🤖 **Gemini-Powered Finance Bot** – Get personalized financial insights.
- 📈 **Spending Analysis** – Visual reports with trends and insights.
- 💳 **Payment Gateway** – Secure transactions via Stripe for **monthly and annual subscriptions**.
- 📑 **Export Reports** – Download PDF & Excel summaries.
- 🔒 **Secure & Cloud-Based** – Access financial data from anywhere.

## 🛠 Tech Stack
- **Frontend:** TypeScript, JavaScript, CSS
- **Backend:** Supabase
- **AI/ML:** Gemini AI (for financial insights)
- **Payment Gateway:** Stripe
- **Hosting:** Vercel

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/BudgetSavvy.git
   cd BudgetSavvy
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables** (Create a `.env` file and add your keys)
   ```env
   REACT_APP_API_URL=your_backend_url
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the development server**
   ```sh
   npm start
   ```

5. **Open the app** in your browser:
   ```
   http://localhost:3000
   ```

## 📄 API Endpoints
| Method | Endpoint            | Description                        |
|--------|--------------------|----------------------------------|
| GET    | /api/expenses      | Fetch user expenses             |
| POST   | /api/expenses      | Add a new expense               |
| GET    | /api/budget        | Retrieve budget data            |
| POST   | /api/budget        | Set/update budget               |
| GET    | /api/finance-bot   | AI finance insights             |
| POST   | /api/payment       | Process Stripe payment for subscriptions |

## 🔐 License
This project is licensed under the **GNU General Public License v3.0**.
