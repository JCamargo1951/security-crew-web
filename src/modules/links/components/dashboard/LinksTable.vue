<template>
  <div class="flex flex-col mt-6">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        
        <div class="relative overflow-hidden bg-black border border-cyan-500/30 [clip-path:polygon(2%_0,100%_0,100%_95%,98%_100%,0_100%,0_5%)]">
          
          <div class="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/20 animate-scan"></div>

          <table class="min-w-full">
            <thead class="bg-cyan-950/30 border-b-2 border-cyan-500/50">
              <tr>
                <LinksHeader
                  v-for="header in headers"
                  :header="header"
                  @on-filter-change="onFilterChange"
                  :key="header.title"
                  class="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400"
                ></LinksHeader>
              </tr>
            </thead>

            <tbody class="divide-y divide-cyan-900/30 bg-black">
              <LinksRow 
                v-for="link in sortedLinks" 
                :link="link" 
                :key="link.id"
                class="hover:bg-magenta-500/5 transition-all duration-200 group border-l-2 border-transparent hover:border-magenta-500"
              ></LinksRow>
            </tbody>
          </table>
        </div>

        <div class="mt-3 flex items-center justify-between px-4 font-mono">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_5px_#22d3ee]"></span>
              <span class="text-[9px] text-cyan-700 uppercase">MONSTRANDO</span>
            </div>
            <span class="text-[9px] text-gray-700">|</span>
            <span class="text-[9px] text-gray-600 uppercase">{{ sortedLinks.length }}_LINKS</span>
          </div>

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
    const aValue = (a[sortKey.value] || '').toString();
    const bValue = (b[sortKey.value] || '').toString();
    const result = aValue.localeCompare(bValue);
    return sortDirection.value === 'asc' ? result : -result;
  });
});
</script>

<style scoped>
/* Animación de escaneo vertical */
@keyframes scan {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(400px); opacity: 0; }
}

.animate-scan {
  animation: scan 4s linear infinite;
}

/* Colores personalizados */
.text-magenta-500 { color: #ff00ff; }
.border-magenta-500 { border-color: #ff00ff; }
</style>