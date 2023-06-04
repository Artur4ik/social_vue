<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue';
import TheAsideMenuVue from '@/components/TheAsideMenu.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from './stores/auth'

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
  <TheAsideMenuVue v-if="auth.isAuthentificated"/>
  <RouterView class="view" />
  <TheFooter class="footer" v-if="!auth.isAuthentificated" />
</template>

<style scoped>
.view {
  min-height: calc(100vh - 106px);
}
</style>
