<template>
  <div
    ref="chatContainer"
    class="h-80 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-600"
  >
    <div
      v-for="message in messages"
      :key="message.id"
      :class="messageContainerClass(message.role)"
    >
      <div
        :class="messageBubbleClass(message.role)"
        class="max-w-[80%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap"
      >
        {{ message.content }}
      </div>
    </div>

    <div v-if="loading" class="flex justify-start">
      <div
        class="bg-slate-700 text-white rounded-2xl px-3 py-2 text-sm flex gap-1"
      >
        <span class="animate-bounce">•</span>
        <span class="animate-bounce delay-100">•</span>
        <span class="animate-bounce delay-200">•</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from "vue";
import { Message } from "@/types";

const props = defineProps<{
  messages: Message[];
  loading: boolean;
}>();

const chatContainer = ref<HTMLElement | null>(null);

const scrollToBottom = async (): Promise<void> => {
  await nextTick();

  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

watch(() => props.messages.length, scrollToBottom);

watch(() => props.loading, scrollToBottom);

const messageContainerClass = (role: Message["role"]): string => {
  return role === "user" ? "flex justify-end" : "flex justify-start";
};

const messageBubbleClass = (role: Message["role"]): string => {
  return role === "user"
    ? "bg-sky-400 text-slate-900"
    : "bg-slate-700 text-white";
};

onMounted(() => {
  scrollToBottom();
});

</script>
