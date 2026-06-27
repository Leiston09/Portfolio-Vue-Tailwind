<template>
  <div class="flex flex-col w-full max-w-6xl border-2 rounded-4xl border-white/20 py-5">
    <div class="text-center">
      <h1 class="titleViewAll">
        {{ $t("auth.register.title") }}
      </h1>

      <p class="text-gray-200 text-sm">
        {{ $t("auth.register.subtitle") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      <div>
        <input
          v-model="NewUser.name"
          type="text"
          :placeholder="$t('auth.register.placeholders.name')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && MessageErrors.name" class="error">
          {{ MessageErrors.name }}
        </p>
      </div>

      <div>
        <input
          v-model="NewUser.lastName"
          type="text"
          :placeholder="$t('auth.register.placeholders.lastName')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && MessageErrors.lastName" class="error">
          {{ MessageErrors.lastName }}
        </p>
      </div>

      <div>
        <input
          v-model="NewUser.email"
          type="email"
          :placeholder="$t('auth.register.placeholders.email')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && MessageErrors.email" class="error">
          {{ MessageErrors.email }}
        </p>
      </div>

      <div>
        <div class="relative">
          <input
            v-model="NewUser.birthDate"
            type="date"
            @focus="onFocus"
            @blur="blur"
            class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-gray-400"
          />

          <p
            v-if="ingresoInput"
            class="absolute left-2 top-3 text-xs text-gray-400 sm:hidden"
          >
            {{ $t('auth.register.placeholders.date') }}
          </p>
        </div>


        <p v-if="submit && MessageErrors.birthDate" class="error">
          {{ MessageErrors.birthDate }}
        </p>
      </div>

      <div>
        <input
          v-model="NewUser.password"
          type="password"
          :placeholder="$t('auth.register.placeholders.password')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p v-if="submit && MessageErrors.password" class="error">
          {{ MessageErrors.password }}
        </p>
      </div>

      <div>
        <input
          v-model="NewUser.confirmPassword"
          type="password"
          :placeholder="$t('auth.register.placeholders.confirmPassword')"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
        />

        <p
          v-if="submit && MessageErrors.confirmPassword"
          class="error"
        >
          {{ MessageErrors.confirmPassword }}
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
import { RegisterType } from "@/types";
import { reactive, ref } from "vue";
import { useUserValidation } from "@/composable/userValidation";

const { MessageErrors , validateUser } = useUserValidation();

const emit = defineEmits<{
  (e: "NewUserRegister", NewUser: RegisterType): void;
}>();

const submit = ref<boolean>(false);

const NewUser = reactive<RegisterType>({
  name: "",
  lastName: "",
  email: "",
  birthDate: "",
  password: "",
  confirmPassword: "",
});

const registerUser = (): void => {
  submit.value = true;
  
  if (validateUser(NewUser)) {
    emit("NewUserRegister", NewUser );
    submit.value = false;
  }

};

const ingresoInput = ref<boolean>(true)

const onFocus = () => {
  ingresoInput.value = false
};
const blur = () => {
  if(NewUser.birthDate){
      ingresoInput.value = false
  } else{
    ingresoInput.value = true
  }
};
</script>