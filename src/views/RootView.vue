<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '../stores/auth'

export default defineComponent({
  data () {
    const auth = useAuthStore();
    return {
      auth
    }
  },
})
</script>

<template>
  <TheWelcome/>
</template>

<style scoped>
</style>
