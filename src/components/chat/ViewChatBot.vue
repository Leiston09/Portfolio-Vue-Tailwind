<template>
  <div class="fixed bottom-28 md:bottom-18 right-3 md:right-15 z-50">
    <div class="w-72 sm:w-[320px] bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
      <div class="flex justify-between items-center px-4 py-3 border-b border-gray-700">
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
          :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
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

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useGetApiIA } from "@/service/useGetApiIA";

type MessageType = {
  id: number;
  role: "system" | "user" | "assistant";
  content: string;
};

defineEmits<{
  close: [value: boolean];
}>();

const { t } = useI18n();

const loading = ref<boolean>(false);
const inputMessage = ref<string>("");
const chatContainer = ref<HTMLDivElement | null>(null);

const welcomeMessage = computed<MessageType>(() => ({
  id: 1,
  role: "assistant",
  content: t("chatBot.Welcome"),
}));

const messages = ref<MessageType[]>([welcomeMessage.value]);

watch(welcomeMessage, (newMessage) => {
  messages.value[0] = newMessage;
});

const scrollToBottom = async (): Promise<void> => {
  await nextTick();

  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const fetchAnswer = async (): Promise<void> => {
  if (!inputMessage.value.trim() || loading.value) return;

  loading.value = true;

  messages.value.push({
    id: Date.now(),
    role: "user",
    content: inputMessage.value,
  });

  inputMessage.value = "";

  await scrollToBottom();

  try {
    const response = await useGetApiIA(messages.value);

    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: response,
    });
  } catch {
    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: t("chatBot.Error"),
    });
  }

  loading.value = false;

  await scrollToBottom();
};

</script>
