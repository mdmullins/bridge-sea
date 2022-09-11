<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main class="wrapper">
    <RouterView />
  </main>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  backdrop-filter: blur(19px);
  background-color: rgba(255, 255, 255, 0.59);
}
</style>
