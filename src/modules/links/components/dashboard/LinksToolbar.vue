<template>
  <div class="sm:flex sm:items-center sm:justify-between p-4 bg-black border-l-4 border-magenta-500 shadow-[0_0_15px_rgba(255,0,255,0.1)]">
    <div>
      <div class="flex items-center gap-x-3">
        <h2 class="text-xl font-black text-white uppercase italic tracking-tighter">
          DATA<span class="text-magenta-500">_LINKS</span>
        </h2>

        <span class="px-2 py-1 text-xs font-mono font-bold text-cyan-400 border border-cyan-400/50 bg-cyan-400/10 uppercase">
          [ 240 ]
        </span>
      </div>

      <p class="mt-1 text-xs font-mono text-gray-500 uppercase tracking-widest">
        // Recursos del sistema
      </p>
    </div>

    <div class="flex items-center mt-4 gap-x-3">
      <button
        class="flex items-center cursor-pointer justify-center w-1/2 px-5 py-2 text-xs font-black uppercase tracking-tighter text-black transition-all duration-300 bg-cyan-500 shrink-0 sm:w-auto gap-x-2 hover:bg-white [clip-path:polygon(10%_0,100%_0,100%_70%,90%_100%,0_100%,0%_30%)]"
        @click="isModalOpen = true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span>NUEVO_LINK</span>
      </button>
    </div>
  </div>

  <CreateLinkModal v-model:open="isModalOpen" />

</template>

<script setup lang="ts">
import { ref } from 'vue';
import CreateLinkModal from '../modals/CreateLinkModal.vue';

const isModalOpen = ref(false);

</script>
