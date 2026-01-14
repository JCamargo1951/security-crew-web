<template>
  <div class="sm:flex sm:items-center sm:justify-between">
    <div>
      <div class="flex items-center gap-x-3">
        <h2 class="text-lg font-medium text-gray-800 dark:text-white uppercase">links</h2>

        <span
          class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
          >240</span
        >
      </div>

      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">Cosas para ensenar</p>
    </div>

    <div class="flex items-center mt-4 gap-x-3">
      <button
        class="flex items-center cursor-pointer justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
        @click="isModalOpen = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span>Nuevo Link</span>
      </button>
    </div>
  </div>

  <Modal title="Crear Link" v-model:open="isModalOpen">
    <div class="flex flex-col gap-4 p-6">
      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-800"> Nombre de link </label>
        <input
          type="text"
          class="w-full bg-transparent placeholder:text-slate-500 text-slate-900 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow"
          placeholder="Nombre"
        />
      </div>

      <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm text-slate-800"> URL </label>
        <input
          type="text"
          class="w-full bg-transparent placeholder:text-slate-500 text-slate-900 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow"
          placeholder="URL"
        />
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/modules/common/components/Modal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false)
</script>
