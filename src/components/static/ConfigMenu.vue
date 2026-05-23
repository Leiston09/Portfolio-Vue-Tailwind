<template>
  <div class="fixed top-20 right-5 lg:right-10 z-50">
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95 translate-y-2" enter-to-class="opacity-100 scale-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 scale-100 translate-y-0" leave-to-class="opacity-0 scale-95 translate-y-2">
      <div v-if="open" class="w-52 rounded-2xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
        <div class="px-4 py-3 border-b border-white/10">
          <h1 class="text-white font-bold text-sm text-center">
            {{ $t("navbar.configuration") }}
          </h1>
          <p class="text-gray-400 text-xs text-center">
            {{ $t("navbar.configurationDescription") }}
          </p>
        </div>
        <div class="p-2 flex flex-col gap-2">
          <RouterLink :to="{ name: 'Access' }" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#38BDF8] text-[#0F172A] font-semibold hover:bg-[#0EA5E9] transition-all duration-200">
            <span>🔑</span>
            <span>{{ $t("navbar.login") }}</span>
          </RouterLink>
          <button @click="logOut" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200">
            <span>🚪</span>
            <span>{{ $t("navbar.logout") }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { dataStoreUser } from "@/stores/User";
import { RouterLink } from "vue-router";

type Props = {
  open: boolean;
};

defineProps<Props>();

const storeUser = dataStoreUser();

const logOut = (): void => {
  storeUser.logout();
};
</script>