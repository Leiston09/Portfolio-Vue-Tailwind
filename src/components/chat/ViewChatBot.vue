<template>
  <div class="fixed bottom-24 right-4 z-50 animate-fadeIn">
    <div
      class="w-72 sm:w-[320px] bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
    >
      <div
        class="flex justify-between items-center px-4 py-3 border-b border-gray-700"
      >
        <div class="flex items-center gap-2">
          <img src="/img/ChatBotWhile.png" class="w-6 h-6 animate-pulse" />
          <h2 class="text-white text-sm font-semibold">Chat IA</h2>
        </div>
        <button
          @click="$emit('close', false)"
          class="text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <div class="h-80 overflow-y-auto p-3 space-y-2">
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
import { onMounted, ref, nextTick } from "vue";
import { useGetGenerativeModelGP } from "@/service/useGetGenerativeModelGP.js";

const emit = defineEmits(["close"]);

const loading = ref(false);
const inputMessage = ref("");
const messages = ref([]);

const scrollToBottom = async () => {
  await nextTick();
  const container = document.querySelector(".overflow-y-auto");
  if (container) container.scrollTop = container.scrollHeight;
};

const fetchAnswer = async () => {
  if (!inputMessage.value.trim() || loading.value) return;

  loading.value = true;

  messages.value.push({
    id: Date.now(),
    role: "user",
    content: inputMessage.value,
  });

  const pregunta = inputMessage.value;
  inputMessage.value = "";
  await scrollToBottom();

  try {
    const respuesta = await useGetGenerativeModelGP(messages.value);

    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: respuesta,
    });
    await scrollToBottom();
  } catch (error) {
    console.log({ error });
    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: "Error. Intenta de nuevo.",
    });
    await scrollToBottom();
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  messages.value.push({
    id: Date.now(),
    role: "assistant",
    content:
      "Bienvenido al portafolio de Leiston Holguín. ¿Qué te gustaría conocer? Este asistente se encuentra en fase beta.",
  });
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease;
}
</style>
