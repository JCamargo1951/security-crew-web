<template>
  <Transition
    enter-active-class="transition-opacity duration-50 ease-out"
    leave-active-class="transition-opacity duration-50 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="fixed inset-0 z-[999] flex items-center justify-center" v-if="open">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-opacity-10 backdrop-blur-sm"></div>

      <!-- Modal -->
      <div class="relative z-10 w-full max-w-[24rem] rounded-lg overflow-hidden shadow-lg bg-white">
        <!-- Header -->
        <div class="flex items-end justify-between h-12 px-5">
          <p class="font-bold uppercase text-black">{{ title }}</p>
          <CloseIcon @click="close" />
        </div>

        <!-- Body -->
        <div class="p-6">
          <slot />
        </div>

        <!-- Footer -->
        <div class="p-6 pt-0 justify-center flex">
          <button
            class="w-40 rounded-md bg-black py-2 px-4 text-white transition text-md font-bold hover:bg-slate-700 cursor-pointer"
            type="button"
          >
            Enviar
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
