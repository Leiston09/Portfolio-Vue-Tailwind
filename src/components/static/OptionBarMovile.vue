<template>
  <div class="fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-gray-800 z-50">
    <ul class="flex justify-around py-2 text-xs text-gray-300">
      <li>
        <RouterLink :to="{ path: '/', hash: '#home' }" :class="currentHash === '#home' ? 'text-[#38BDF8] font-bold bg-[#38BDF8]/10 border border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="flex flex-col items-center p-2 border rounded-xl transition-all duration-200">
          <i class="fas fa-home"></i>
          <span>{{ $t("navbar.menu.home") }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/', hash: '#about' }" :class="currentHash === '#about' ? 'text-[#38BDF8] font-bold bg-[#38BDF8]/10 border border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="flex flex-col items-center p-2 border rounded-xl transition-all duration-200">
          <i class="fas fa-user"></i>
          <span>{{ $t("navbar.menu.AboutMe") }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/', hash: '#projects' }" :class="currentHash === '#projects' ? 'text-[#38BDF8] font-bold bg-[#38BDF8]/10 border border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="flex flex-col items-center p-2 border rounded-xl transition-all duration-200">
          <i class="fas fa-code"></i>
          <span>{{ $t("navbar.menu.projects") }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/', hash: '#skills' }" :class="currentHash === '#skills' ? 'text-[#38BDF8] font-bold bg-[#38BDF8]/10 border border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="flex flex-col items-center p-2 border rounded-xl transition-all duration-200">
          <i class="fas fa-brain"></i>
          <span>{{ $t("navbar.menu.skills") }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ path: '/', hash: '#contact' }" :class="currentHash === '#contact' ? 'text-[#38BDF8] font-bold bg-[#38BDF8]/10 border border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="flex flex-col items-center p-2 border rounded-xl transition-all duration-200">
          <i class="fas fa-envelope"></i>
          <span>{{ $t("navbar.menu.contact") }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentHash = computed(() => route.hash || "#home");
</script>