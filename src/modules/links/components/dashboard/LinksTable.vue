<template>
  <div class="flex flex-col mt-6">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <LinksHeader
                v-for="header in headers"
                :header
                @on-filter-change="onFilterChange"
                :key="header.title"
              ></LinksHeader>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              <LinksRow v-for="link in sortedLinks" :link :key="link.id"></LinksRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Link, NonSortableHeader, SortableHeader } from '../../interfaces';
import LinksHeader from './LinksHeader.vue';
import LinksRow from './LinksRow.vue';
import type { SortableLinkKey } from '../../types';

type Header = SortableHeader | NonSortableHeader;

interface Props {
  links: Link[];
}

const props = defineProps<Props>();

const headers: Header[] = [
  { title: 'Nombre', sortable: true, key: 'title' },
  { title: 'Visibilidad', sortable: true, key: 'visibility' },
  { title: 'Contraseña', sortable: false },
  { title: 'Link', sortable: true, key: 'shortener_url' },
  { title: '', sortable: false },
];


const sortKey = ref<SortableLinkKey>('title');
const sortDirection = ref<'asc' | 'desc'>('asc');

function onFilterChange(key: SortableLinkKey) {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortDirection.value = 'asc';
  }
}

const sortedLinks = computed<Link[]>(() => {
  return [...props.links].sort((a, b) => {
    const aValue = a[sortKey.value];
    const bValue = b[sortKey.value];

    const result = aValue.localeCompare(bValue);

    return sortDirection.value === 'asc' ? result : -result;
  });
});
</script>
