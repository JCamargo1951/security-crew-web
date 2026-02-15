<template>
  <footer class="w-full bg-black border-t border-cyan-500/20 mt-12">
    <div class="max-w-screen-xl mx-auto px-4 py-6">
      <div
        class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em]"
      >
        <div class="flex items-center gap-2">
          <span class="text-magenta-500 font-black animate-pulse">OTROS PROYECTOS >></span>
          <span class="text-gray-500 italic">:</span>
        </div>

        <a
          href="#"
          class="text-cyan-400 hover:text-white transition-all duration-300 border-b border-transparent hover:border-cyan-400 pb-1"
        >
          [ Happy_Chat ]
        </a>

        <span class="hidden sm:block text-gray-800">||</span>

        <a
          href="https://github.com/JCamargo1951"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-3 text-gray-400 hover:text-magenta-500 transition-colors group"
        >
          <svg
            class="w-4 h-4 fill-current group-hover:drop-shadow-[0_0_5px_#ff00ff]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.17 1.84 1.17 3.1 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56a11.52 11.52 0 0 0 7.85-10.95C23.5 5.74 18.27.5 12 .5z"
            />
          </svg>
          <span class="group-hover:tracking-[0.3em] transition-all">JCamargo1951</span>
        </a>

        <div class="hidden lg:block text-[8px] text-gray-700 ml-auto">v1.0.42_STABLE // 2026</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Colores de identidad */
.text-magenta-500 {
  color: #ff00ff;
}
.text-cyan-400 {
  color: #22d3ee;
}

/* Efecto de parpadeo para los indicadores */
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.animate-pulse {
  animation: blink 1s steps(2, start) infinite;
}
</style>
