<template>
  <div class="mt-6 md:flex md:items-center md:justify-between gap-4">
    <div
      class="inline-flex overflow-hidden bg-black border border-cyan-500/30 p-1 [clip-path:polygon(5%_0,100%_0,100%_100%,0%_100%,0%_30%)]"
    >
      <button
        v-for="option in filterOptions"
        :key="option.value"
        @click="model = option.value"
        :class="[
          'px-5 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 relative',
          model === option.value
            ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]'
            : 'text-gray-500 hover:text-cyan-400 hover:bg-gray-900'
        ]"
      >
        <span v-if="model === option.value" class="absolute top-0 left-0 w-full h-[2px] bg-white opacity-50"></span>
        {{ option.label }}
      </button>
    </div>

    <div class="relative flex items-center mt-4 md:mt-0 group">
      <span class="absolute left-0 pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4 text-magenta-500 animate-pulse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>

      <input
        type="text"
        placeholder="BUSCAR_EN_RED..."
        class="block w-full md:w-80 py-2 pl-10 pr-5 text-xs font-mono tracking-tighter text-cyan-400 bg-gray-900 border-b-2 border-gray-800 placeholder-gray-700 focus:outline-none focus:border-magenta-500 focus:ring-0 transition-all uppercase"
      />
      
      <div class="absolute bottom-0 left-0 h-[1px] bg-magenta-500 shadow-[0_0_8px_#ff00ff] w-0 group-focus-within:w-full transition-all duration-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: 'all' });

const filterOptions = [
  { label: 'Todos', value: 'all' },
  { label: 'Públicos', value: 'public' },
  { label: 'Privados', value: 'private' },
];
</script>

<style scoped>
.text-magenta-500 { color: #ff00ff; }
.bg-magenta-500 { background-color: #ff00ff; }
.border-magenta-500 { border-color: #ff00ff; }

/* Efecto de parpadeo para el icono de búsqueda */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; filter: drop-shadow(0 0 2px #ff00ff); }
  50% { opacity: .4; filter: drop-shadow(0 0 0px #ff00ff); }
}
</style>