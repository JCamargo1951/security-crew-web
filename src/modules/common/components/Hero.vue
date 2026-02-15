<template>
  <section class="h-screen bg-black overflow-hidden relative flex items-center">
    <div class="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.05),rgba(0,255,0,0.02),rgba(0,0,255,0.05))] bg-[length:100%_4px,4px_100%]"></div>
    
    <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-magenta-500/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      
      <div class="mr-auto place-self-center lg:col-span-7">
        
        <div class="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em]">
          <span class="w-2 h-2 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
          System_Status: Active
        </div>

        <h1 class="max-w-2xl mb-6 text-5xl font-black leading-none md:text-6xl xl:text-7xl text-white italic uppercase tracking-tighter">
          SECURITY<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 drop-shadow-[0_0_15px_rgba(255,0,255,0.3)]">
            _CREW
          </span>
        </h1>

        <p class="max-w-2xl mb-8 font-mono text-gray-400 md:text-lg lg:text-sm uppercase tracking-widest leading-relaxed border-l-2 border-gray-800 pl-4">
          // Conjunto de Herramientas de Seguridad <br/>
          // <span class="text-cyan-400 font-bold">Backend Laravel</span> + <span class="text-magenta-500 font-bold">Vue 3 Framework</span>
        </p>

        <a href="#" class="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-black tracking-widest text-black uppercase transition-all duration-300 bg-cyan-400 hover:bg-white [clip-path:polygon(10%_0%,100%_0%,100%_70%,90%_100%,0%_100%,0%_30%)]">
          
          <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg">
            <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466v-.014q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281v-.136c0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227v.076c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098z" />
          </svg>

          <span class="mx-3 font-black">JCamargo1951</span>
          
          <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center relative group">
        <div class="absolute -inset-4 border border-cyan-500/20 [clip-path:polygon(0_0,100%_0,100%_90%,90%_100%,0_100%)] pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-magenta-500 pointer-events-none"></div>
        
        <div class="relative overflow-hidden bg-gray-950 p-4 border border-white/5">
          <img 
            src="../assets/security.png" 
            alt="mockup" 
            class="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
          >
          <div class="absolute top-2 right-2 font-mono text-[8px] text-cyan-500/50 uppercase leading-none text-right">
            Scan_ID: 0882<br/>
            Neural_Load: 82%
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Colores base */
.text-magenta-500 { color: #ff00ff; }
.bg-magenta-500 { background-color: #ff00ff; }
.border-magenta-500 { border-color: #ff00ff; }

/* Animación de pulso personalizada */
@keyframes cyber-pulse {
  0%, 100% { opacity: 1; filter: brightness(1); }
  50% { opacity: 0.6; filter: brightness(1.5); }
}

.animate-pulse {
  animation: cyber-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Efecto de texto gradiente mejorado */
h1 span {
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.2);
}
</style>