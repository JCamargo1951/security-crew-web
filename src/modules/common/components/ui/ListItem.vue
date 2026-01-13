<template>
  <li class="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 backdrop-blur">
    <span class="text-lg" aria-hidden="true" v-show="icon">{{ icon  }}</span>
    <span>{{ label }}</span>
  </li>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  label: string
}

defineProps<Props>()
</script>