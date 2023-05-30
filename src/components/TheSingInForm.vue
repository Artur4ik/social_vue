<script lang="ts">
import { defineComponent } from 'vue'
import SignService from "@/services/SignService";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    signIn() {
      SignService.signIn(this.email, this.password)
        .then((response: ResponseData) => {
          console.log(response.data);
        })
        .catch((e: any) => {
          console.log(e);
        });
    },
  },
});
</script>

<template>
  <div class="sign-form">
    <h1 class="sign-text">Social</h1>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input v-model="email" type="text" class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon2">🔑</span>
      <input v-model="password" type="password" class="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <div>
      <button @click="signIn()" type="button" class="btn btn-primary btn-sm sign-in-btn">Sign in</button>
    </div>
  </div>
</template>

<style scoped>
.sign-text {
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ff4a4a, #3c7aff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sign-form {
  padding: 15px;
}
.sign-in-btn {
  width: 100%;
}
</style>
