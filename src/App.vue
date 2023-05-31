<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <RouterView class="view" />
  <TheFooter class="footer" />
</template>

<style scoped>
.view {
  min-height: calc(100vh - 106px);
}
</style>
