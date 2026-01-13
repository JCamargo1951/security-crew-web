<template>
    <header>
        <NavBar></NavBar>
    </header>
    <main>
        <RouterView />
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</template>

<script lang="ts" setup>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>
