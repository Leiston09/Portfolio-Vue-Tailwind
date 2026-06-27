import { Message } from "@/types";

const systemPrompt = [
  import.meta.env.VITE_IA_LANGUAGE,
  import.meta.env.VITE_IA_ROLE,
  import.meta.env.VITE_IA_PORTFOLIO,
  import.meta.env.VITE_IA_RULES,
  import.meta.env.VITE_IA_STYLE,
  import.meta.env.VITE_IA_UNKNOWN,
  import.meta.env.VITE_IA_GENERAL,
  import.meta.env.VITE_IA_PROFILE,
  import.meta.env.VITE_IA_OBJECTIVE,
  import.meta.env.VITE_IA_EXPERIENCE,
  import.meta.env.VITE_IA_PROJECTS,
  import.meta.env.VITE_IA_SKILLS,
  import.meta.env.VITE_IA_CERTIFICATIONS,
  import.meta.env.VITE_IA_CERTIFICATIONS_GOOGLE,
  import.meta.env.VITE_IA_CERTIFICATIONS_ADDITIONAL,
  import.meta.env.VITE_IA_EDUCATION,
  import.meta.env.VITE_IA_WORK,
  import.meta.env.VITE_IA_CONTACT,
  import.meta.env.VITE_IA_CV,
]
  .filter(Boolean)
  .join("\n\n");

type ChatResponse = {
  content: string;
};

export const useChatAssistant = async (
  messages: Message[],
): Promise<string> => {
  try {
    const response = await fetch(
      "/.netlify/functions/chat-assistant",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          systemPrompt,

          userMessages: messages.map(
            ({ role, content }) => ({
              role,
              content,
            }),
          ),
        }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: ${response.statusText}`,
      );
    }

    const data: ChatResponse =
      await response.json();

    if (!data.content) {
      throw new Error(
        "La IA no devolvió contenido.",
      );
    }

    return data.content;
  } catch (error) {
    console.error(
      "Error al conectar con el asistente:",
      error,
    );

    return "IA EN MANTENIMIENTO: Estamos realizando mejoras. Inténtalo nuevamente más tarde.";
  }
};