<template>
  <div class="mt-6 sm:flex sm:items-center sm:justify-between px-2">
    <div class="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
      <span class="w-2 h-2 bg-cyan-500/50 rounded-full animate-pulse"></span>
      PAGINA <span class="text-cyan-400 font-black px-2 border border-cyan-500/20 bg-cyan-500/5">1 // 10</span>
    </div>

    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
      <a href="#"
        class="group relative flex items-center justify-center w-1/2 px-5 py-2 text-xs font-black uppercase tracking-tighter text-cyan-400 transition-all duration-300 bg-black border border-cyan-500/30 sm:w-auto gap-x-2 hover:bg-cyan-500 hover:text-black [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%,0_40%)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
          stroke="currentColor" class="w-4 h-4 transition-transform group-hover:-translate-x-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>

        <span>Anterior</span>
      </a>

      <a href="#"
        class="group relative flex items-center justify-center w-1/2 px-5 py-2 text-xs font-black uppercase tracking-tighter text-cyan-400 transition-all duration-300 bg-black border border-cyan-500/30 sm:w-auto gap-x-2 hover:bg-cyan-500 hover:text-black [clip-path:polygon(0_0,85%_0,100%_40%,100%_100%,0_100%)]">
        <span>Siguiente</span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
          stroke="currentColor" class="w-4 h-4 transition-transform group-hover:translate-x-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Magenta para acentos si decides usarlo en hover */
.text-magenta-500 { color: #ff00ff; }

/* Animación de pulso para el indicador de sector */
@keyframes pulse-cyan {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}
.animate-pulse {
  animation: pulse-cyan 2s infinite;
}
</style>