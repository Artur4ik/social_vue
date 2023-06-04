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
  methods: {
    signOut() {
      this.auth.removeToken();
      this.$router.push('/')
    }
  }
});
</script>

<template>
  <ul class="sidenav">
    <li class="sidenav-item-logo">
      <h1 class="sign-text">Social</h1>
    </li>
    <li class="sidenav-item">
      <RouterLink class="sidenav-link" to="/user/D2R">
        <svg aria-label="" class="sidenav-item-icon" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>
        Home
      </RouterLink>
    </li>
    <li class="sidenav-item">
      <RouterLink class="sidenav-link" to="/feed">
        <svg aria-label="" class="sidenav-item-icon" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
        Feed
      </RouterLink>
    </li>
    <li class="sidenav-item"><RouterLink class="sidenav-link" to="/" @click="signOut()">Log out</RouterLink></li>
  </ul>
</template>

<style scoped>
.sidenav-item-logo {
  list-style-type: none;
  padding-left: 10px;
  margin-bottom: 20px;
}
.sign-text{
  margin-bottom: 0px;
  background: linear-gradient(135deg, #ff4a4a, #3c7aff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  border-right: 1px solid lightgrey;
}

.sidenav-item {
  list-style-type: none;
  height: 40px;
  width: 200px;
  padding: 3px 10px;
  margin-bottom: 10px;
  transition: 300ms;
  border-radius: 10px;
}

.sidenav-item:hover {
  background-color: lightgray;
  transition: 300ms;
}

.sidenav-link {
  color: inherit;
  font-size: 20px;
  display: block;
}


</style>
