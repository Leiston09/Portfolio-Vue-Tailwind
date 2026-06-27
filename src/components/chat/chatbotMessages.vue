<template>
  <div class="p-3 border-t border-gray-700 flex gap-2">
    <input
      v-model="inputMessage"
      type="text"
      @keyup.enter="fetchAnswer" 
      :placeholder="$t('chatbot.placeholder')"
      class="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-sky-400"
    />

    <button
      :disabled="!inputMessage || loading"
      @click="fetchAnswer"
      class="bg-sky-400 hover:bg-sky-300 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 rounded-lg px-3 py-2 transition"
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
</template>

<script setup lang="ts">
import { ref } from "vue";

let inputMessage = ref<string>('')

defineProps<{
  loading: boolean;
}>();

const emit = defineEmits<{
  inputMessage: [value: string];
  fetchAnswer: [];
}>();

const fetchAnswer = (): void => {
  emit("inputMessage", inputMessage.value);
  inputMessage.value = ''
  emit("fetchAnswer");

};
</script>