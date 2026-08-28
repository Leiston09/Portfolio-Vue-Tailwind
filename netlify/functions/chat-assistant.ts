
import { Handler } from "@netlify/functions";
import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "./config/systemPrompt";

interface RequestBody {
  userMessages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método no permitido" }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Cuerpo de petición vacío" }),
      };
    }

    const { userMessages } = JSON.parse(event.body) as RequestBody;

    if (!process.env.GROQ_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "GROQ_API_KEY no configurada" }),
      };
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...userMessages,
      ],
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: response.choices[0].message.content || "",
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};