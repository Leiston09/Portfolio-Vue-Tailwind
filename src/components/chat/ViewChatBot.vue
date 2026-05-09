<template>
  <div class="fixed bottom-22 right-3 md:right-10 z-50">
    <div
      class="w-72 sm:w-[320px] bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
    >
      <div
        class="flex justify-between items-center px-4 py-3 border-b border-gray-700"
      >
        <div class="flex items-center gap-2">
          <img src="/img/ChatBotWhile.png" class="w-6 h-6 animate-pulse" />
          <h2 class="text-white text-sm font-semibold">Chat IA (Beta)🧑‍🎓</h2>
        </div>
        <button
          @click="$emit('close', false)"
          class="text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <div ref="chatContainer" class="h-80 overflow-y-auto p-3 space-y-2">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="
            msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'
          "
        >
          <div
            :class="
              msg.role === 'user'
                ? 'bg-[#38BDF8] text-gray-900'
                : 'bg-gray-700 text-white'
            "
            class="max-w-[80%] rounded-lg px-3 py-2 text-sm"
          >
            {{ msg.content }}
          </div>
        </div>

        <div v-if="loading" class="flex justify-start">
          <div class="bg-gray-700 text-white rounded-lg px-3 py-2 text-sm">
            <span class="animate-pulse">●●●●●</span>
          </div>
        </div>
      </div>

      <div class="p-3 border-t border-gray-700 flex gap-2">
        <input
          v-model="inputMessage"
          @keyup.enter="fetchAnswer"
          type="text"
          placeholder="Escribe un mensaje..."
          class="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#38BDF8]"
        />

        <button
          :disabled="!inputMessage.trim() || loading"
          @click="fetchAnswer"
          class="bg-[#38BDF8] hover:bg-[#38BDF8]/80 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 rounded-lg px-3 py-2 transition"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
import { useGetGenerativeModelGP } from "@/service/useGetGenerativeModelGP.js";

const emit = defineEmits(["close"]);

const loading = ref(false);
const inputMessage = ref("");
const messages = ref([]);
const chatContainer = ref(null);

const fetchAnswer = async () => {
  if (!inputMessage.value.trim() || loading.value) return;

  loading.value = true;

  messages.value.push({
    id: Date.now(),
    role: "user",
    content: inputMessage.value,
  });

  inputMessage.value = "";
  await scrollToBottom(); // 👈 scroll después de mensaje usuario

  try {
    const respuesta = await useGetGenerativeModelGP(messages.value);

    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: respuesta,
    });

    await scrollToBottom(); // 👈 scroll después de respuesta

  } catch (error) {
    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: "Error. Intenta de nuevo.",
    });

  } finally {
    loading.value = false;
  }
};

// Función que hace scroll al último mensaje
const scrollToBottom = async () => {
  await nextTick(); // Espera a que Vue actualice el DOM
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

onMounted(async () => {
  messages.value.push({
    id: Date.now(),
    role: "assistant",
    content: "Bienvenido al portafolio. ¿Qué te gustaría conocer?",
  });
  await scrollToBottom();
});
</script>

<style scoped></style>
