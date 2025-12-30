<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>


        <RouterLink to="/login">Home</RouterLink>
        <RouterLink to="/landing">About</RouterLink>

  <RouterView />
</template>
