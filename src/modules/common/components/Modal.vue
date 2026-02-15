<template>
  <Transition
    enter-active-class="transition-all duration-200 ease-out"
    leave-active-class="transition-all duration-150 ease-in"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div class="fixed inset-0 z-[999] flex items-center justify-center p-4" v-if="open">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-md" @click="close"></div>

      <div class="relative z-10 w-full max-w-[24rem] bg-black border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,1)] [clip-path:polygon(0_0,95%_0,100%_5%,100%_100%,5%_100%,0_95%)]">
        
        <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

        <div class="flex items-center justify-between h-14 px-5 border-b border-cyan-500/10 bg-cyan-500/5">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-magenta-500 shadow-[0_0_5px_#ff00ff]"></span>
            <p class="font-mono text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              {{ title || 'System_Access' }}
            </p>
          </div>
          
          <button @click="close" class="text-cyan-500 hover:text-magenta-500 transition-colors transform hover:rotate-90 duration-300">
            <CloseIcon class="w-5 h-5" />
          </button>
        </div>

        <div class="p-6 relative">
          <div class="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/10 pointer-events-none"></div>
          
          <slot />
        </div>

        <div class="p-6 pt-0">
          <button 
            @click="$emit('update:open', false)"
            class="w-full group relative overflow-hidden bg-transparent cursor-pointer border border-white-500 text-white font-mono font-black py-3 uppercase italic tracking-widest transition-all hover:bg-magenta-500 hover:text-white [clip-path:polygon(0_0,100%_0,100%_100%,15%_100%,0_75%)]"
          >
            <span class="relative z-10 text-xs"> >> Enviar</span>
            
            <div class="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </button>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue';

interface Props {
  open: boolean;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
});

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void;
}>();

const close = () => {
  emit('update:open', false)
}
</script>

<style scoped>
/* Transición de escala sutil para el modal */
.scale-95 {
  transform: scale(0.95);
}
.scale-100 {
  transform: scale(1);
}
</style>