import { Handler } from "@netlify/functions";
import { Groq } from "groq-sdk";

interface RequestBody {
  systemPrompt: string;
  userMessages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
}

export const handler: Handler = async (event) => {
  // Bloquear cualquier petición que no sea POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método no permitido" }),
    };
  }

  try {
    if (!event.body) {
      return { statusCode: 400, body: JSON.stringify({ error: "Cuerpo de petición vacío" }) };
    }

    const { systemPrompt, userMessages } = JSON.parse(event.body) as RequestBody;

    // Inicialización segura usando la variable de entorno del servidor de Netlify
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...userMessages,
      ],
      model: "llama-3.1-8b-instant",
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