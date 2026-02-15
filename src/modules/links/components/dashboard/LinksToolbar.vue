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

  <Modal title=">_ESTABLECER_REGISTRO" v-model:open="isModalOpen">
    <div class="flex flex-col gap-6 p-6 bg-black border border-cyan-500/20">
      
      <div class="w-full">
        <label class="block mb-1 text-[10px] font-mono text-cyan-500 uppercase tracking-widest"> 
          Label_Name 
        </label>
        <input
          type="text"
          class="w-full bg-gray-900/40 text-cyan-400 font-mono text-sm border-b-2 border-gray-800 focus:border-magenta-500 focus:outline-none px-3 py-3 transition-all placeholder:text-gray-700"
          placeholder="Nombre"
        />
      </div>

      <div class="w-full">
        <label class="block mb-1 text-[10px] font-mono text-cyan-500 uppercase tracking-widest"> 
          Target_URL 
        </label>
        <div class="relative group">
          <span class="absolute left-3 top-3 text-magenta-500 font-mono text-sm">>></span>
          <input
            type="text"
            class="w-full bg-gray-900/40 text-cyan-400 font-mono text-sm border-b-2 border-gray-800 focus:border-magenta-500 focus:outline-none pl-10 pr-3 py-3 transition-all placeholder:text-gray-700"
            placeholder="URL"
          />
        </div>
      </div>

      <button 
        @click="isModalOpen = false"
        class="w-full mt-2 bg-magenta-500 text-white font-black py-2 uppercase italic hover:bg-white hover:text-black transition-all [clip-path:polygon(0_0,100%_0,100%_100%,15%_100%,0_75%)]"
      >
        EJECUTAR_CARGA
      </button>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/modules/common/components/Modal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false)
</script>

<style scoped>
.text-magenta-500 { color: #ff00ff; }
.bg-magenta-500 { background-color: #ff00ff; }
.border-magenta-500 { border-color: #ff00ff; }

/* Para que el input parezca de consola */
input::placeholder {
  color: #374151;
  text-transform: uppercase;
  font-size: 0.75rem;
}
</style>