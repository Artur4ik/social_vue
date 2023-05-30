<script setup lang="ts">
import TheSingInForm from './TheSingInForm.vue'
</script>

<template>
  <div class="welcome-component">
    <div>
      <img class="welcome-logo" src="../assets/root_logo.png" alt ="">
    </div>
    <TheSingInForm/>
  </div>
</template>

<style scoped>
.welcome-component{
  display: flex;
}
.welcome-logo {
  width: 300px;
  height: 300px;
}
</style>
