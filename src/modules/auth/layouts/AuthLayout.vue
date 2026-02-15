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

<script setup lang="ts">
import Footer from '@/modules/common/components/Footer.vue';
import NavBar from '@/modules/common/components/NavBar.vue';
</script>
