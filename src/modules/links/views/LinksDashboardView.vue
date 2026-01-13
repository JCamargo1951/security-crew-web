<template>
    <section class="container px-4 mx-auto m-15">
        <LinksHeader></LinksHeader>
        <LinksToolbar></LinksToolbar>
        <LinksTable></LinksTable>
        <LinksPagination></LinksPagination>
    </section>
</template>

<script setup lang="ts">
import LinksHeader from '../components/dashboard/LinksToolbar.vue';
import LinksToolbar from '../components/dashboard/LinksFilters.vue';
import LinksTable from '../components/dashboard/LinksTable.vue';
import LinksPagination from '../components/dashboard/LinksPagination.vue';
</script>