<template>
  <div class="flex flex-col w-full max-w-6xl border-2 rounded-4xl border-white/20 py-5">
    <div class="grid gap-2 text-center">
      <h1 class="titleViewAll">
        {{ $t("auth.register.title") }}
      </h1>

      <p class="text-gray-400 text-sm">
        {{ $t("auth.register.subtitle") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      <div>
        <input
          v-model="user.name"
          type="text"
          :placeholder="$t('auth.register.placeholders.name')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && errors.name" class="text-red-500 text-sm mt-1">
          {{ errors.name }}
        </p>
      </div>

      <div>
        <input
          v-model="user.lastName"
          type="text"
          :placeholder="$t('auth.register.placeholders.lastName')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && errors.lastName" class="text-red-500 text-sm mt-1">
          {{ errors.lastName }}
        </p>
      </div>

      <div>
        <input
          v-model="user.email"
          type="email"
          :placeholder="$t('auth.register.placeholders.email')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && errors.email" class="text-red-500 text-sm mt-1">
          {{ errors.email }}
        </p>
      </div>

      <div>
        <input
          v-model="user.date"
          type="date"
          max="2008-12-31"
          :placeholder="$t('auth.register.placeholders.date')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && errors.date" class="text-red-500 text-sm mt-1">
          {{ errors.date }}
        </p>
      </div>

      <div>
        <input
          v-model="user.password"
          type="password"
          :placeholder="$t('auth.register.placeholders.password')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && errors.password" class="text-red-500 text-sm mt-1">
          {{ errors.password }}
        </p>
      </div>

      <div>
        <input
          v-model="user.confirmPassword"
          type="password"
          :placeholder="$t('auth.register.placeholders.confirmPassword')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p
          v-if="submit && errors.confirmPassword"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.confirmPassword }}
        </p>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        @click="registerUser"
        class="w-fit px-4 bg-[#38BDF8] text-black py-2 md:py-3 rounded-lg text-lg font-bold hover:bg-[#0EA5E9] active:scale-95 transition-all shadow-lg shadow-[#38BDF8]/20"
      >
        {{ $t("auth.register.submit") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserValidation } from "@/composable/userValidation";

type UserType = {
  name: string;
  lastName: string;
  email: string;
  date: string;
  password: string;
  confirmPassword: string;
};

const emit = defineEmits<{
  (e: "users", user: UserType): void;
}>();

const submit = ref<boolean>(false);

const user = reactive<UserType>({
  name: "",
  lastName: "",
  email: "",
  date: "",
  password: "",
  confirmPassword: "",
});

const { errors, validateUser } = useUserValidation();

const registerUser = (): void => {
  submit.value = true;

  if (validateUser(user)) {
    emit("users", user);
    submit.value = false;
  }
};
</script>