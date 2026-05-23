<template>
  <div class="fixed bottom-28 md:bottom-18 right-3 md:right-15 z-50">
    <div class="w-72 sm:w-[320px] bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
      <ChatbotTitle @close="$emit('close', false)" />

      <ChatbotContainer
        :messages="messages"
        :loading="loading"
      />

      <ChatbotMessages
        :inputMessage="inputMessage"
        :loading="loading"
        @updateInputMessage="inputMessage = $event"
        @fetchAnswer="fetchAnswer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {useChatAssistant } from "@/service/useChatAssistant";
import { cargarConversacion, guardarConversacion } from "@/service/chatbotProgress";
import ChatbotTitle from "./chatbotTitle.vue";
import ChatbotContainer from "./chatbotContainer.vue";
import ChatbotMessages from "./chatbotMessages.vue";

export interface Message {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
}

defineEmits<{ close: [value: boolean] }>();

const { t } = useI18n();
const loading = ref(false);
const inputMessage = ref("");



const conversacionGuardada = cargarConversacion();


const messages = ref<Message[]>(conversacionGuardada.length > 0 
  ? conversacionGuardada.map(msg => ({
      id: crypto.randomUUID(),
      role: msg.role,
      content: msg.content
    }))
  : [{
      id: crypto.randomUUID(),
      role: "assistant",
      content: t("chatbot.welcome")
    }]
);




const createMessage = (role: Message["role"], content: string): Message => ({
  id: crypto.randomUUID(),
  role,
  content
});




const fetchAnswer = async () => {
  const text = inputMessage.value.trim();
  if (!text || loading.value) return;

  messages.value.push(createMessage("user", text));
  inputMessage.value = "";
  loading.value = true;

  try {
    const response = await useChatAssistant(messages.value);
    messages.value.push(createMessage("assistant", response));
    guardarConversacion(messages.value);
  } catch {
    messages.value.push(createMessage("assistant", t("chatbot.error")));
    guardarConversacion(messages.value);

  } finally {
    loading.value = false;
  }
};
</script>