import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const SYSTEM_PROMPT = `You are a helpful financial advisor assistant. Your role is to:
- Provide general financial advice and education
- Help users understand basic financial concepts
- Suggest budgeting strategies and money-saving tips
- Explain financial terms in simple language
- Avoid giving specific investment advice or recommendations
- Always remind users to consult with qualified financial professionals for personalized advice

Please be clear, concise, and focus on practical, actionable advice while maintaining appropriate disclaimers.`

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    // Combine system prompt with user's question
    const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${prompt}\n\nResponse:`

    const result = await model.generateContent(fullPrompt)
    const response = await result.response
    const text = response.text()

    return new Response(JSON.stringify({ response: text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in AI Finance Bot:", error)
    return new Response(
      JSON.stringify({
        error: "Failed to process the request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

