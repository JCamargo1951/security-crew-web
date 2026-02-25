<template>
  <Modal title=">_CREAR_LINK" :open="open" @update:open="emit('update:open', $event)">
    <div class="flex flex-col gap-6 p-6 bg-black border border-cyan-500/20">
      <div class="w-full">
        <label class="block mb-1 text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
          Nombre de Link
        </label>
        <input
          type="text"
          class="w-full bg-gray-900/40 text-cyan-400 font-mono text-sm border-b-2 border-gray-800 focus:border-magenta-500 focus:outline-none px-3 py-3 transition-all placeholder:text-gray-700"
          placeholder="Mi Perfil de Instagram"
        />
      </div>

      <div class="w-full">
        <label class="block mb-1 text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
          URL (Completa)
        </label>
        <div class="relative group">
          <span class="absolute left-3 top-3 text-magenta-500 font-mono text-sm">>></span>
          <input
            type="text"
            class="w-full bg-gray-900/40 text-cyan-400 font-mono text-sm border-b-2 border-gray-800 focus:border-magenta-500 focus:outline-none pl-10 pr-3 py-3 transition-all placeholder:text-gray-700"
            placeholder="www.instagram.com"
          />
        </div>
      </div>

      <div class="w-full">
        <label class="block mb-1 text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
          URL Acortada Personalizada
        </label>
        <div class="relative group">
          <span class="absolute left-3 top-3 text-magenta-500 font-mono text-sm">>></span>
          <input
            type="text"
            class="w-full bg-gray-900/40 text-cyan-400 font-mono text-sm border-b-2 border-gray-800 focus:border-magenta-500 focus:outline-none pl-10 pr-3 py-3 transition-all placeholder:text-gray-700"
            placeholder="/mi-link-personalizado"
          />
        </div>
      </div>

      <div class="w-full">
        <label class="block mb-1 text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
          Expiracion
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

      <div class="w-full">
        <div class="relative group">
          <div
            class="w-full flex flex-col p-4 bg-black border border-cyan-500/20 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <div class="mb-4 border-b border-cyan-500/10 pb-2">
              <p
                class="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] animate-pulse"
              >
                [ Visibilidad ]
              </p>
              <p class="text-[9px] text-gray-100 uppercase mt-1">
                Al ser publico tu link estara disponible en la web
              </p>
            </div>

            <div class="flex items-center justify-center">
              <label class="inline-flex items-center cursor-pointer group">
                <span
                  class="select-none text-xs font-black uppercase tracking-tighter transition-colors duration-300"
                >
                  Público
                </span>

                <div class="relative mx-4">
                  <input type="checkbox" class="sr-only peer" />

                  <div
                    class="w-12 h-6 bg-emerald-500/20 border border-emerald-500/50 rounded-full peer peer-focus:ring-2 peer-focus:ring-cyan-500/30 peer-checked:bg-red-500/20 peer-checked:border-red-500/50 after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-emerald-500 after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:after:translate-x-6 peer-checked:after:bg-red-500 shadow-inner"
                  ></div>
                </div>

                <span
                  class="select-none text-xs font-black uppercase tracking-tighter transition-colors duration-300"
                >
                  Privado
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/modules/common/components/Modal.vue';

defineProps<{
  open: boolean;
}>();

const emit = defineEmits(['update:open']);
</script>

<style scoped>
.text-magenta-500 {
  color: #ff00ff;
}
.bg-magenta-500 {
  background-color: #ff00ff;
}
.border-magenta-500 {
  border-color: #ff00ff;
}

input::placeholder {
  color: #374151;
  font-size: 0.75rem;
}
</style>
