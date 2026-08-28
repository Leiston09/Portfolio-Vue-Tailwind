<template>
  <div class="flex flex-col sm:flex-row gap-2 p-3 border-t border-border-light dark:border-border-secondary bg-bg-light-card/50 dark:bg-bg-secondary/30">
    <input
      v-model="text"
      type="text"
      :placeholder="$t('chatbot.inputPlaceholder')"
      class="flex-1 px-4 py-2.5 rounded-xl border border-border-light dark:border-border-secondary bg-white/90 dark:bg-bg-secondary/80 text-text-light-primary dark:text-text-primary placeholder:text-text-light-secondary/60 dark:placeholder:text-text-secondary/60 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
      @keyup.enter="send"
    />
    <button
      @click="send"
      :disabled="loading || !text.trim()"
      class="px-6 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 sm:w-auto w-full"
    >
      <span v-if="loading" class="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
      <span v-else>{{ $t('chatbot.send')}}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ loading: boolean }>();
const emit = defineEmits<{ (e: 'send', text: string): void }>();

const text = ref('');

const send = () => {
  const msg = text.value.trim();
  if (!msg || props.loading) return;
  emit('send', msg);
  text.value = '';
};
</script>