<template>
  <div
    class="flex flex-col md:flex-row w-full max-w-4xl my-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/20"
  >
    <div class="hidden md:block md:w-1/2">
      <img
        src="@/assets/img/ImagenLogin.jpg"
        alt="Login Image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex-1 px-4 py-5 md:p-10 flex flex-col justify-center gap-4">
      <div class="md:hidden flex justify-center">
        <div
          class="rounded-full overflow-hidden w-24 h-24 border border-[#38BDF8]/40"
        >
          <img
            src="@/assets/img/ImagenLogin.jpg"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <header class="text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-white">
          {{ $t("navbar.login") }}
        </h1>
        <p class="text-gray-400 text-sm mt-1">{{ $t("login.intro") }}</p>
      </header>

      <div class="space-y-1">
        <div>
          <h1 class="text-gray-400 text-sm">{{ $t("login.emailLabel") }}</h1>
          <input
            v-model="login.email"
            type="email"
            :placeholder="$t('login.emailPlaceholder')"
            class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
          />
          <p v-if="submit && errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>

        <div>
          <h1 class="text-gray-400 text-sm">{{ $t("login.passwordLabel") }}</h1>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              :placeholder="$t('login.passwordPlaceholder')"
              class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
              v-model="login.password"
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              @click="showPassword = !showPassword"
            >
              <span v-if="showPassword">🔓</span>
              <span v-else>🔒</span>
            </button>
          </div>
          <p v-if="submit && errors.password" class="text-red-500 text-xs mt-1">
            {{ errors.password }}
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <RouterLink
          :to="{ name: 'RecoverPassword' }"
          class="text-[#38BDF8] hover:text-[#0EA5E9] text-sm font-semibold transition-colors"
        >
          {{ $t("login.forgotPassword") }}
        </RouterLink>
      </div>

      <button
        @click="validateLogin"
        class="w-full bg-[#38BDF8] text-black py-2 md:py-3 rounded-lg text-lg font-bold hover:bg-[#0EA5E9] active:scale-95 transition-all shadow-lg shadow-[#38BDF8]/20"
      >
        {{ $t("login.submitButton") }}
      </button>

      <div class="text-center text-sm text-gray-400">
        {{ $t("login.noAccount") }}
        <RouterLink
          :to="{ name: 'RegisterUser' }"
          class="text-[#38BDF8] hover:underline font-bold ml-1"
        >
          {{ $t("login.registerLink") }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";
import { useUserValidation } from "@/composable/userValidation";

const emit = defineEmits(["user"]);
const { errors, validateEmail, validatePassword } = useUserValidation();

const login = reactive({
  email: "",
  password: "",
});
const showPassword = ref(false);
const submit = ref(false);

function validateLogin() {
  submit.value = true;

  const isEmailOk = validateEmail(login.email);
  const isPassOk = validatePassword(login.password);

  if (isEmailOk && isPassOk) {
    emit("user", login);
  }
}
</script>

<style lang="scss" scoped></style>
