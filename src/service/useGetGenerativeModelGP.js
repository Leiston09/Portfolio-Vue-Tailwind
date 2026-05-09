import { useGenAi } from "./useGenAi";
import inf from "./inf.txt?raw"

export const useGetGenerativeModelGP = async (messages) => {
  const groq = useGenAi();

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: inf                                     // ← Siempre se envía
      },
      ...messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    ],
    model: "llama-3.1-8b-instant",
  });

  return response.choices[0].message.content;
};