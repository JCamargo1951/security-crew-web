<template>
  <section class="bg-black py-12 lg:py-24 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#22d3ee_0.5px,transparent_0.5px)] bg-[size:24px_24px]"></div>

    <div class="relative z-10 mx-auto max-w-screen-xl px-4">
      <div class="flex flex-col items-center mb-12 lg:mb-20">
        <span class="text-magenta-500 font-mono text-xs tracking-[0.5em] mb-2 uppercase animate-pulse">
          // Core_Modules_Inventory
        </span>
        <h2 class="text-white text-4xl font-black uppercase italic tracking-tighter md:text-5xl">
          SISTEMAS<span class="text-cyan-400">_DISPONIBLES</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-4"></div>
      </div>

      <ul class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li 
          v-for="service in services" 
          :key="service.name"
          class="group relative p-[1px] bg-cyan-900/30 transition-all duration-300 hover:scale-105"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative bg-black p-6 h-full flex flex-col items-center justify-center text-center [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
            
            <div class="mb-4 text-3xl filter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] group-hover:scale-125 transition-transform duration-300">
              {{ service.icon }}
            </div>

            <ListItem 
              :icon="''" 
              :label="service.name"
              class="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 group-hover:text-cyan-400 transition-colors"
            ></ListItem>

            <div class="mt-4 flex items-center gap-1 opacity-30 group-hover:opacity-100">
              <div class="w-1 h-1 bg-cyan-400"></div>
              <div class="w-1 h-1 bg-cyan-400"></div>
              <div class="w-8 h-[2px] bg-cyan-400/20"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ListItem from './ui/ListItem.vue';

interface Service {
    name: string,
    icon?: string,
}

const services: readonly Service[] = [
    { name: 'Acortador de links', icon: '🔗' },
    { name: 'Links con contraseña', icon: '🔐' },
    { name: 'Links expirables', icon: '⏱' },
    { name: 'Estadísticas', icon: '📊' },
];
</script>

<style scoped>
.text-magenta-500 { color: #ff00ff; }
.bg-magenta-500 { background-color: #ff00ff; }

/* Animación de pulso para el prefijo */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.animate-pulse {
  animation: flicker 2s infinite;
}
</style>