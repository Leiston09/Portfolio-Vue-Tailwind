import { Message } from "@/types";

type ChatResponse = {
  content: string;
};

export const useChatAssistant = async (
  messages: Message[],
): Promise<string> => {
  try {
    const response = await fetch("/.netlify/functions/chat-assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userMessages: messages.map(({ role, content }) => ({
          role,
          content,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: ChatResponse = await response.json();

    if (!data.content) {
      throw new Error("La IA no devolvió contenido.");
    }

    return data.content;
  } catch (error) {
    console.error("Error al conectar con el asistente:", error);

    return "IA EN MANTENIMIENTO: Estamos realizando mejoras. Inténtalo nuevamente más tarde.";
  }
};