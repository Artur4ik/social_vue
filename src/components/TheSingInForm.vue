<script lang="ts">
import { defineComponent } from 'vue'
import SignService from "@/services/SignService";
import type ResponseData from "@/types/ResponseData";
import { useAuthStore } from '../stores/auth'

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      isFetching: false,
      isInvalidEmail: false,
      isInvalidPassword: false,
    }
  },
  setup () {
    const auth = useAuthStore();
    return {
      auth,
    }
  },
  methods: {
    signIn() {
      this.isInvalidEmail = false;
      this.isInvalidPassword = false;
      if (!this.email) {
        this.isInvalidEmail = true;
      }
      if (!this.password) {
        this.isInvalidPassword = true;
      }
      if (this.isInvalidEmail || this.isInvalidPassword) {
        return;
      }
      this.isFetching = true;
      SignService.signIn(this.email, this.password)
        .then((response: ResponseData) => {
          this.auth.setToken(response.data.data.token)
          this.$router.push('/')
        })
        .catch((error: any) => {
          this.isFetching = false;
          error.response.data.errors.forEach( (e: any) => {
            if (e.source.pointer == '/data/attributes/email') {
              this.isInvalidEmail = true;
            }
            if (e.source.pointer == '/data/attributes/password') {
              this.isInvalidPassword = true;
            }
          });
        });
    },
    signInButtonText() {
      return this.isFetching ? 'signing in...' : 'Sign in'
    },
  },
});
</script>

<template>
  <div class="sign-form">
    <div class="input-group mb-3 has-validation">
      <span class="input-group-text" id="email-input">@</span>
      <input :disabled="isFetching"
             :class="{ 'is-invalid': isInvalidEmail }"
             v-model="email"
             type="text"
             class="form-control"
             placeholder="E-mail"
             aria-label="Username"
             aria-describedby="email-input"
             required>
      <div class="invalid-feedback">
        Please provide a valid email.
      </div>
    </div>

    <div class="input-group mb-3 has-validation">
      <span class="input-group-text" id="basic-addon2">🔑</span>
      <input :disabled="isFetching"
            :class="{ 'is-invalid': isInvalidPassword }"
             v-model="password"
             type="password"
             class="form-control"
             placeholder="Password"
             aria-label="Recipient's username"
             aria-describedby="basic-addon2"
             required>
      <div class="invalid-feedback">
        Please provide a valid password.
      </div>
    </div>
    <div>
      <button :disabled="isFetching" @click="signIn()" type="button" class="btn btn-primary btn-sm sign-in-btn">
        <span v-show="isFetching" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        {{ signInButtonText() }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.sign-form {
  padding: 15px;
  width: 300px;
}
.sign-in-btn {
  width: 100%;
}
.is-invalid {
  margin: 0;
}
</style>
