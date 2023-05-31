<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '../stores/auth'

export default defineComponent({
  data () {
    const auth = useAuthStore();
    return {
      auth,
    }
  },
});
</script>

<script setup lang="ts">
import TheSingInForm from './TheSingInForm.vue';
</script>


<template>
  <div class="welcome-wrapper">
    <div>
      <h1 class="sign-text">Social</h1>
    </div>
    <div class="welcome-component">
      <div>
        <img class="welcome-logo" src="../assets/root_logo.png" alt ="">
      </div>
      <TheSingInForm v-if="!auth.isAuthentificated" />
    </div>
  </div>
</template>

<style scoped>
.welcome-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sign-text {
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ff4a4a, #3c7aff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.welcome-component{
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 600px;
  justify-content: center;
}
.welcome-logo {
  width: 300px;
  height: 300px;
}
</style>
