<template>
  <tr>
    <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
      <div>
        <h2 class="font-medium text-gray-800 dark:text-white">
          {{ link.title }}
        </h2>
        <p v-if="link.expires_at" class="text-sm font-normal text-gray-600 dark:text-gray-400">
          Expira: {{ link.expires_at }}
        </p>
      </div>
    </td>
    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
      <div
        v-if="link.visibility === 'Publico'"
        class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-400 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
      >
        {{ link.visibility }}
      </div>
      <div
        v-else
        class="inline px-3 py-1 text-sm font-normal text-red-500 bg-gray-100 rounded-full dark:text-red-400 gap-x-2 dark:bg-gray-800"
      >
        Privado
      </div>
    </td>
    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
      <div class="inline px-3 py-1 font-normal">
        {{ link.visibility === 'Publico' ? 'Si' : 'No' }}
      </div>
    </td>
    <td class="px-4 py-4 text-sm whitespace-nowrap">
      <div>
        <a class="text-blue-500" :href="link.url" target="_blank"> {{ link.shortener_url }} </a>
        <p v-if="link.password" class="text-gray-500 dark:text-gray-400">***********</p>
      </div>
    </td>
    <td class="px-4 py-4 text-sm whitespace-nowrap">
      <button
        class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
      >
        Editar
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { Link } from '../../interfaces';

interface Props {
  link: Link;
}

defineProps<Props>();
</script>
