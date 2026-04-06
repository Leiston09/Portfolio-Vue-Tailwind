<template>
  <div class="fixed bottom-24 right-4 z-50 animate-fadeIn">
    <div
      class="w-[280px] sm:w-[320px] bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
    >
      <!-- Header -->
      <div class="flex justify-between items-center px-4 py-3 border-b border-gray-700">
        <h2 class="text-white text-sm font-semibold">Chat IA</h2>

        <button
          @click="$emit('close' , false)"
          class="text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <!-- Body -->
      <div class="flex flex-col items-center justify-center p-6 text-center gap-3">
        <img
          src="/img/ChatBotWhile.png"
          class="w-16 h-16 animate-pulse"
        />

        <h3 class="text-white font-bold text-lg">
          {{ $t("chatBot.title") }}
        </h3>

        <p class="text-gray-400 text-sm">
          {{ $t("chatBot.description") }}
        </p>

        <div class="mt-3 px-3 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full text-xs">
          {{ $t("chatBot.soon") }}
        </div>
      </div>

      <!-- Footer -->
      <div class="px-4 py-2 border-t border-gray-700 text-center">
        <p class="text-gray-500 text-xs">
          {{ $t("chatBot.footer") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close"]);



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