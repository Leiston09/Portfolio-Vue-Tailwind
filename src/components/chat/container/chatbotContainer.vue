<template>
  <div ref="chatContainer" class="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
    <div
      v-for="msg in messages"
      :key="msg.id"
      :class="[
        'flex',
        msg.role === 'user' ? 'justify-end' : 'justify-start'
      ]"
    >
      <span
        :class="[
          'inline-block px-4 py-2 rounded-2xl text-sm max-w-[80%] break-words',
          msg.role === 'user'
            ? 'bg-primary/20 text-text-light-primary dark:text-text-primary border border-primary/30'
            : 'bg-bg-tertiary dark:bg-bg-tertiary text-text-primary',
        ]"
      >
        <div class="whitespace-pre-line">
          {{ msg.content }}
        </div>
      </span>
    </div>
    <div v-if="loading" class="flex justify-start">
      <span
        class="inline-block px-4 py-2 rounded-2xl text-sm bg-bg-tertiary dark:bg-bg-tertiary text-text-primary"
        >...</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

const props = defineProps<{ messages: any[]; loading: boolean }>();
const chatContainer = ref<HTMLElement | null>(null);

const scrollDown = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

watch(() => props.messages.length, scrollDown);
watch(() => props.loading, scrollDown);
</script>