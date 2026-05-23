<template>
  <div
    class="flex flex-col md:flex-row max-w-6xl rounded-2xl overflow-hidden border-2 border-white/20"
  >
    <div class="hidden md:block md:w-1/2">
      <img
        :src="foto"
        alt="Recover Image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex flex-1 px-4 py-6 md:p-10 flex-col justify-center gap-5">
      <div class="md:hidden flex justify-center">
        <div
          class="rounded-full overflow-hidden w-24 h-24 border border-[#38BDF8]/40"
        >
          <img
            :src="foto"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <header class="text-center">
        <h1 class="titleViewAll">
          {{ $t("auth.recoverPassword.title") }}
        </h1>

        <p class="text-gray-400 text-sm mt-1">
          {{ $t("auth.recoverPassword.description") }}
        </p>
      </header>

      <div>
        <input
          v-model="email"
          type="email"
          :placeholder="$t('auth.recoverPassword.placeholder')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
        />

        <p v-if="submit && errors.email" class="text-red-500 text-sm mt-1">
          {{ errors.email }}
        </p>
      </div>

      <button
        :disabled="bloqueo"
        @click="recoverAccount"
        class="w-full bg-[#38BDF8] text-black py-2 md:py-3 rounded-lg text-lg font-bold transition-all shadow-lg shadow-[#38BDF8]/20 hover:bg-[#0EA5E9] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#38BDF8] disabled:active:scale-100"
      >
        {{ $t("auth.recoverPassword.submit") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserValidation } from "@/composable/userValidation";

const foto = "/img/authIMG.jpg"

const emit = defineEmits(["user"]);
const bloqueo = ref<boolean>(true);
const email = ref<string>("");
const submit = ref<boolean>(false);

const { errors, validateEmail } = useUserValidation();

const recoverAccount = (): void => {
  submit.value = true;

  if (validateEmail(email.value)) {
    emit("user", email.value);
    submit.value = false;
  }
};
</script>
