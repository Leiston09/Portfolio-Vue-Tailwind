<template>
  <div
    class="flex flex-col max-w-6xl rounded-2xl overflow-hidde justify-center"
  >
    <div class="hidden md:flex justify-center  w-full">
      <img
        :src="fotos.url1"
        alt="Recover Image"
        class="w-52 h-full object-cover"
      />
    </div>

    <div class="flex flex-1 px-4 py-6 md:p-10 flex-col justify-center gap-5">
      <div class="md:hidden flex justify-center">
        <div
          class=" overflow-hidden w-36 h-36"
        >
          <img
            :src="fotos.url1"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <header class="text-center">
        <h1 class="titleViewAll">
          {{ $t("auth.recoverPassword.title") }}
        </h1>

        <p class="text-gray-300 text-sm mt-1">
          {{ $t("auth.recoverPassword.description") }}
        </p>
      </header>

      <div>
        <input
          v-model="email"
          type="email"
          :placeholder="$t('auth.recoverPassword.placeholder')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] placeholder:text-center border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
        />

        <p v-if="submit && MessageErrors.email" class="text-red-500 text-sm mt-1">
          {{ MessageErrors.email }}
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


const emit = defineEmits(["user"]);
const bloqueo = ref<boolean>(false);
const email = ref<string>("");
const submit = ref<boolean>(false);

const { MessageErrors, validateEmail } = useUserValidation();

const recoverAccount = (): void => {
  submit.value = true;

  if (validateEmail(email.value)) {
    emit("user", email.value);
    submit.value = false;
  }
};


const fotos = {
   url1: "/img/recovery/contrasena.jpg",
   url2: "/img/recovery/codigo.jpg",
   url3: "/img/recovery/correo.jpg",
}


</script>
