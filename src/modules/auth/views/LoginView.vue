<template>
  <!-- component -->
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-dark">
      <div class="relative sm:max-w-sm w-full">
        <div
          class="card bg-blue-700 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-fuchsia-600 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
          <div class="flex items-center justify-between">
            <div class="w-11"></div>

            <label class="text-sm text-gray-700 font-semibold"> Welcome Back </label>

            <RouterLink :to="{ name: 'landing' }">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="cursor-pointer transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
                stroke="#fff"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z"
                  fill="#101828"
                />
              </svg>
            </RouterLink>
          </div>

          <form @submit.prevent="onLogin" class="mt-10">
            <div>
              <input
                v-model="email"
                type="email"
                placeholder="Correo electronico"
                ref="inputEmail"
                autocomplete="email"
                @blur="emailTouched = true"
                :class="[
                  'text-black px-3 mt-1 block w-full bg-white h-11 rounded-xl shadow-lg hover:bg-gray-100 focus:bg-gray-200 focus:ring-0',
                  emailInvalid ? 'border border-red-500 ring-2 ring-red-300' : 'border-none',
                ]"
              />
            </div>
            <p v-if="emailInvalid" class="text-red-500 text-sm mt-2">El correo es obligatorio</p>

            <div class="mt-7">
              <input
                v-model="password"
                type="password"
                placeholder="Contraseña"
                ref="inputPassword"
                @blur="passwordTouched = true"
                autocomplete="current-password"
                :class="[
                  'text-black px-3 mt-1 block w-full bg-white h-11 rounded-xl shadow-lg hover:bg-gray-100 focus:bg-gray-200 focus:ring-0',
                  passwordInvalid ? 'border border-red-500 ring-2 ring-red-300' : 'border-none',
                ]"
              />
            </div>
            <p v-if="passwordInvalid" class="text-red-500 text-sm mt-2">
              La contraseña es obligatoria
            </p>

            <div class="mt-7">
              <button
                :disabled="loading"
                type="submit"
                class="cursor-pointer font-bold bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                Login
              </button>
            </div>

            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2 font-black text-black">¿Eres nuevo?</label>
                <RouterLink
                  :to="{ name: 'register' }"
                  class="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Crea una cuenta
                </RouterLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { storeToRefs } from 'pinia';

const router = useRouter();
const authStore = useAuthStore();

const { login } = authStore;

const { loading, isAuthenticated, isPending, error, user } = storeToRefs(authStore);

const email = ref('');
const password = ref('');

const inputEmail = ref<HTMLInputElement | null>(null);
const inputPassword = ref<HTMLInputElement | null>(null);

const emailTouched = ref(false);
const passwordTouched = ref(false);

const emailInvalid = computed(() => !email.value && emailTouched.value);
const passwordInvalid = computed(() => !password.value && passwordTouched.value);

const onLogin = async () => {
  emailTouched.value = true;
  passwordTouched.value = true;

  if (!email.value || !password.value) {
    if (!email.value) {
      inputEmail.value?.focus();
    } else {
      inputPassword.value?.focus();
    }
    return;
  }

  await login(email.value, password.value);

  if (isAuthenticated.value) {
    router.replace({name: 'home'})
  }
};
</script>
