<template>
  <ul class="flex gap-4 text-sm font-semibold text-gray-200">
    <li>
      <RouterLink :to="{ path: '/', hash: '#home' }" :class="currentHash === '#home' ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="px-3 py-1.5 border rounded-xl transition-all duration-200">
        {{ $t("navbar.menu.home") }}
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/', hash: '#projects' }" :class="currentHash === '#projects' ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="px-3 py-1.5 border rounded-xl transition-all duration-200">
        {{ $t("navbar.menu.projects") }}
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/', hash: '#skills' }" :class="currentHash === '#skills' ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="px-3 py-1.5 border rounded-xl transition-all duration-200">
        {{ $t("navbar.menu.skills") }}
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/', hash: '#certifications' }" :class="currentHash === '#certifications' ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="px-3 py-1.5 border rounded-xl transition-all duration-200">
        {{ $t("navbar.menu.certifications") }}
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ path: '/', hash: '#contact' }" :class="currentHash === '#contact' ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]' : 'border-transparent hover:text-[#38BDF8]'" class="px-3 py-1.5 border rounded-xl transition-all duration-200">
        {{ $t("navbar.menu.contact") }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentHash = computed(() => route.hash || "#home");
</script>