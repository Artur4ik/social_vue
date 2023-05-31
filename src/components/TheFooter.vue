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
  <div class="footer-basic">
    <footer>
      <ul class="list-inline">
        <li class="list-inline-item"><RouterLink to="/">Home</RouterLink></li>
        <li v-show="auth.isAuthentificated" class="list-inline-item"><a href="javascript:void(0)" @click="$router.push('/feed')">Feed</a></li>
        <li v-show="auth.isAuthentificated" class="list-inline-item"><a href="javascript:void(0)" @click="signOut()">Log out</a></li>
        <li class="list-inline-item"><RouterLink to="/about">About</RouterLink></li>
      </ul>
      <p class="copyright">Artur Shakhbazyan - {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style scoped>
.footer-basic {
  border-top: 1px solid rgb(218, 218, 218);
  padding: 20px 0;
  background-color:#ffffff;
  color:#4b4c4d;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}
</style>
