type MessageType = {
  role: "system" | "user" | "assistant";
  content: string;
};

const systemPrompt = `
    ${import.meta.env.VITE_IA_ROLE}
    ${import.meta.env.VITE_IA_PORTFOLIO}
    ${import.meta.env.VITE_IA_RULES}
    ${import.meta.env.VITE_IA_STYLE}
    ${import.meta.env.VITE_IA_UNKNOWN}
    ${import.meta.env.VITE_IA_GENERAL}
    ${import.meta.env.VITE_IA_PROFILE}
    ${import.meta.env.VITE_IA_OBJECTIVE}
    ${import.meta.env.VITE_IA_EXPERIENCE}
    ${import.meta.env.VITE_IA_PROJECTS}
    ${import.meta.env.VITE_IA_SKILLS}
    ${import.meta.env.VITE_IA_CERTIFICATIONS}
    ${import.meta.env.VITE_IA_CERTIFICATIONS_GOOGLE}
    ${import.meta.env.VITE_IA_WORK}
    ${import.meta.env.VITE_IA_CONTACT}
    ${import.meta.env.VITE_IA_CV}
`;

export const useChatAssistant = async (messages: MessageType[]): Promise<string> => {
  try {
    const response = await fetch("/.netlify/functions/chat-assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemPrompt,
        userMessages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) throw new Error("Error en la respuesta del asistente");

    const data = await response.json();
    return data.content || "";

  } catch (error) {
    console.error("Error al conectar con el asistente de IA:", error);
    return "IA EN MANTENIMIENTO: Estamos haciendo mejoras. Inténtalo un poco más tarde.";
  }
};