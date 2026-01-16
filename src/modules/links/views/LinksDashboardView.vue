<template>
  <section class="container px-4 mx-auto m-15">
    <LinksHeader></LinksHeader>
    <LinksFilters></LinksFilters>
    <LinksTable :links="filtersLinks"></LinksTable>
    <LinksPagination></LinksPagination>
  </section>
</template>

<script setup lang="ts">
import LinksHeader from '../components/dashboard/LinksToolbar.vue';
import LinksFilters from '../components/dashboard/LinksFilters.vue';
import LinksTable from '../components/dashboard/LinksTable.vue';
import LinksPagination from '../components/dashboard/LinksPagination.vue';
import type { Link } from '../interfaces';
import { computed, ref } from 'vue';

const filterBy = ref('all');

const filtersLinks = computed(() => {
  if(!filterBy.value.trim()) return null;
  
  if(filterBy.value === 'private' || filterBy.value === 'public' || filterBy.value === 'all'){
    return filters[filterBy.value]();
  }

  return null;
})

const filters = {
  'all': () => links.value,
  'public': () => links.value.filter(link => link.visibility === 'Publico' ),
  'private': () => links.value.filter(link => link.visibility === 'Privado' ),
};

const links = ref<Link[]>([
  {
    id: 1,
    title: 'Twitter X',
    url: 'https://x.com/home?lang=es',
    shortener_url: 'http://127.0.0.1:5173/aDe34R',
    visibility: 'Publico',
    password: null,
    expires_at: null,
  },
  {
    id: 2,
    title: 'Facebook',
    url: 'https://www.facebook.com/?locale=es_LA',
    shortener_url: 'http://127.0.0.1:5173/aAe32R',
    visibility: 'Privado',
    password: 'c234ybhsdf534534bnsdvbdsh534534dfgdfg',
    expires_at: '2026-04-01 11:18:16',
  },
  {
    id: 3,
    title: 'Google',
    url: 'https://www.google.com/?hl=es_419&zx=1768448697231&no_sw_cr=1',
    shortener_url: 'http://127.0.0.1:5173/aDe34R',
    visibility: 'Publico',
    password: null,
    expires_at: '2026-29-01 11:18:16',
  },
  {
    id: 4,
    title: 'Mi Insta',
    url: 'https://www.instagram.com/camargo.v1/',
    shortener_url: 'http://127.0.0.1:5173/a645s4R',
    visibility: 'Privado',
    password: null,
    expires_at: null,
  },
  
]);
</script>
