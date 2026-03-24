<template>
  <div class="flex justify-between items-center p-4 rounded-lg bg-[#F8F3C6]">
    <h1 class="text-xl font-bold text-[#442A18]">Leiston Holguin</h1>
    <div class="flex items-center gap-3">
      <div >
        <button
          class="bg-[#442A18] text-[#F8F3C6] rounded-l-2xl px-4 py-1 border-2 hover:bg-[#EB9D23] hover:text-[#442A18] font-semibold hover:border-[#442A18] sm:px-1 sm:py-0 lg:px-4 lg:py-1"
        >
          En
        </button>
        <button
          class="bg-[#442A18] text-[#F8F3C6] px-4 py-1 rounded-r-2xl border-2 hover:bg-[#EB9D23] hover:text-[#442A18] font-semibold hover:border-[#442A18] sm:px-1 sm:py-0 lg:px-4 lg:py-1"
        >
          Es
        </button>
      </div>
      <button class="p-2 hover:bg-[#EB9D23]/20 rounded-full">🔔</button>
      <button class="p-2 hover:bg-[#EB9D23]/20 rounded-full">⚙️</button>
      <button
        v-if="!isLoggedIn"
        class="bg-[#442A18] text-[#F8F3C6] rounded-full px-4 py-1 border-2 hover:bg-[#EB9D23] hover:text-[#442A18] font-semibold hover:border-[#442A18] sm:px-1 sm:py-0 lg:px-4 lg:py-1"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
const isLoggedIn = false;
</script>

<style lang="scss" scoped></style>
