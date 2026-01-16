<template>
  <th
    scope="col"
    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
  >
    <button
      class="flex items-center gap-x-3 focus:outline-none"
      :class="{ ' cursor-pointer': header.sortable }"
      @click="$emit('onFilterChange', header.key)"
    >
      <span>{{ header.title }}</span>
      <SorterIcon v-if="header.sortable" />
    </button>
  </th>
</template>

<script setup lang="ts">
import SorterIcon from '@/modules/common/icons/SorterIcon.vue';
defineProps<{ header: { title: string; sortable: boolean, key: string } }>();

const emit = defineEmits<{
  (e: 'onFilterChange', key: string): void;
}>();
</script>
