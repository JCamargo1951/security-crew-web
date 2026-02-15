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
        v-if="link.visibility === 'public'"
        class="relative inline-flex items-center px-3 py-1 gap-x-2 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_30%)] group"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>

        <span class="text-[10px] font-mono font-black uppercase tracking-widest">
          {{ link.visibility }}
        </span>

        <div class="absolute top-0 right-0 w-1 h-1 bg-emerald-500/50"></div>
      </div>

      <div
        v-else
        class="relative inline-flex items-center px-3 py-1 gap-x-2 bg-red-500/10 border border-red-500/40 text-red-400 [clip-path:polygon(0_0,90%_0,100%_30%,100%_100%,0_100%)] group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>

        <span class="text-[10px] font-mono font-black uppercase tracking-widest"> Privado </span>

        <div
          class="absolute inset-0 bg-red-500/5 opacity-0 transition-opacity"
        ></div>
      </div>
    </td>
    <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
      <div class="inline px-3 py-1 font-normal">
        {{ link.password ? 'Si' : 'No' }}
      </div>
    </td>
    <td class="px-4 py-4 text-sm whitespace-nowrap">
      <div>
        <a class="text-blue-500" :href="link.url" target="_blank"> {{ link.shortener_url }} </a>
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

<style scoped>
/* Animación de ping personalizada para que sea más rápida */
.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
