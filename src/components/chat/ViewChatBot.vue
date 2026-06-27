<template>
  <div class="fixed bottom-28 right-3 md:bottom-18 md:right-15 z-50">
    <div
      class="w-72 sm:w-96 bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
    >
      <ChatbotTitle 
      @close="closeView"
      @deleteChat="deleteChat"
      />

      <div v-if="!deleteChatComplete">
        <ChatbotContainer 
        :messages="messages" 
        :loading="loading" 
        />        
      </div>


      <ChatbotMessages
        :loading="loading"        
        @inputMessage="messageSent"
        @fetchAnswer="fetchAnswer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useChatAssistant } from "@/service/useChatAssistant";
import {
  cargarConversacion,
  guardarConversacion,
  limpiarConversacion,
} from "@/service/chatbotProgress";
import ChatbotTitle from "./chatbotTitle.vue";
import ChatbotContainer from "./chatbotContainer.vue";
import ChatbotMessages from "./chatbotMessages.vue";

import { Message } from "@/types/index.js";

const { t } = useI18n();
const loading = ref(false);
const inputMessage = ref("");
const deleteChatComplete = ref<boolean>(false)
const emit = defineEmits<{
  (e: "close", value: boolean): void;
}>();

const closeView = (value: boolean): void => {
  emit("close", value);
};

const conversacionGuardada = cargarConversacion();

let conversacionGuardadaRegistrada = conversacionGuardada.length > 0;

const messages = ref<Message[]>(

  conversacionGuardadaRegistrada 

    ? conversacionGuardada.map((msg) => ({
        id: crypto.randomUUID(),
        role: msg.role,
        content: msg.content,
      }))

    : [
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: t("chatbot.welcome"),
        },
      ],

);

const createMessage = (role: Message["role"], content: string): Message => ({
  id: crypto.randomUUID(),
  role,
  content,
});

const messageSent = (message: string): void => {
  inputMessage.value = message;
};

const fetchAnswer = async () => {
  const text = inputMessage.value;
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

const deleteChat = () => {
  limpiarConversacion()
  messages.value = [{
          id: crypto.randomUUID(),
          role: "assistant",
          content: t("chatbot.welcome"),
        }]
}

</script>
