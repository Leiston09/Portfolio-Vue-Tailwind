<template>
  <div class="fixed top-16 right-4">
    <div
      v-if="open"
      class="mt-2 bg-[#0F172A] border border-white/10 rounded-lg shadow-lg w-fit p-1 flex flex-col gap-2"
    >
      <button
        @click="logOut"
        class="w-full text-left px-3 py-2 bg-red-500 hover:bg-red-800 hover:text-[#0F172A] rounded-lg"
      >
        {{ $t("navbar.logOut") }}
      </button>

      <RouterLink
      :to="{name: 'Access'}"
|        class="w-full text-left px-3 py-2 bg-[#38BDF8] text-[#0F172A] hover:bg-[#38BDF8]/50 hover:text-[#0F172A] rounded-lg"
      >
        {{ $t("navbar.login") }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { dataStoreUser } from "@/stores/User";
import { RouterLink } from "vue-router";

const storeUser = dataStoreUser();

const props = defineProps({
  open: {
    type: Boolean,
    require: true,
  },
});

const logOut = () => {
  storeUser.logout();
};
</script>
