import Groq from "groq-sdk";

export const useGenAi = (): Groq => {
  return new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY as string,
    dangerouslyAllowBrowser: true,
  });
};