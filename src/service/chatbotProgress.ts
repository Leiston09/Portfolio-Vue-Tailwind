type MessageType = {
  role: "system" | "user" | "assistant";
  content: string;
};

const STORAGE_KEY = "chat_conversation";

export const guardarConversacion = (messages: MessageType[]) => {
  const mensajesParaGuardar = messages.filter(m => m.role !== "system");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajesParaGuardar));
};

export const cargarConversacion = (): MessageType[] => {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    return JSON.parse(guardado);
  }
  return [];
};

export const limpiarConversacion = () => {
  localStorage.removeItem(STORAGE_KEY);
};
