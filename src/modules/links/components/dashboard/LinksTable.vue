<template>
  <div class="flex flex-col mt-6">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <LinksHeader v-for="header in headers" :header @on-filter-change="onFilterChange($event)"></LinksHeader>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              <LinksRow v-for="link in links" :link :key="link.id"></LinksRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Link } from '../../interfaces';
import LinksHeader from './LinksHeader.vue';
import LinksRow from './LinksRow.vue';

interface Props {
  links: Link[];
}

const props = defineProps<Props>();
const headers = [
  { title: 'Nombre', sortable: true, key: 'title' },
  { title: 'Visibilidad', sortable: true, key: 'visibility' },
  { title: 'Contraseña', sortable: false, key: 'password' },
  { title: 'Link', sortable: true, key: 'shortener_url' },
  { title: '', sortable: false, key: '' },
];

const links = ref<Link[]>(props.links);

function onFilterChange(key: string){
  links.value.sort((a, b) => a[key].localeCompare(b[key]));
}
</script>
