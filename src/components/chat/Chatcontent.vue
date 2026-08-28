<template>
  <div class="flex flex-col h-[500px] max-h-[60vh] lg:h-[500px] lg:max-h-[75vh]">
    <ChatbotContainer :messages="messages" :loading="loading" />
    <ChatbotInput :loading="loading" @send="handleSend" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useChatAssistant } from "@/service/useChatAssistant";
import { cargarConversacion, guardarConversacion } from "@/service/chatbotProgress";
import ChatbotContainer from "./container/chatbotContainer.vue";
import ChatbotInput from "./container/chatbotInput.vue";

const { t } = useI18n();
const messages = ref<any[]>([]);
const loading = ref(false);

const addMsg = (role: string, content: string) => {
  messages.value.push({ id: Date.now(), role, content });
};

const handleSend = async (text: string) => {
  if (!text || loading.value) return;

  addMsg("user", text);
  loading.value = true;

  try {
    const response = await useChatAssistant(messages.value, t);
    addMsg("assistant", response);
    guardarConversacion(messages.value);
  } catch {
    addMsg("assistant", t("chatbot.error"));
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const saved = cargarConversacion();
  messages.value = saved.length > 0
    ? saved
    : [{ id: Date.now(), role: "assistant", content: t("chatbot.welcome") }];
});
</script>