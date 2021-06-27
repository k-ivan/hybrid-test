<template>
  <h1>Login please</h1>
  <div class="login">
    <div
      v-if="invalidLogin"
      class="toast toast--error"
    >
      a hacking attempt was detected, I am trying to find out your location
    </div>
    <form
      action="#0"
      @submit.prevent="handleLogin"
    >
      <div class="form-group">
        <label for="name">User</label>
        <input
          id="name"
          v-model="user"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': v$.user.$error }"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': v$.password.$error }"
        >
      </div>
      <button class="btn btn--primary">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import fakeStore from '../fakeStore.js';
import { ADMIN_CREDENTIALS } from '../constants';

export default {
  name: 'Login',
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: '',
      password: '',
      invalidLogin: false
    }
  },
  validations() {
    return {
      user: {required},
      password: {required}
    }
  },
  methods: {
    handleLogin() {
      this.invalidLogin = false;

      this.v$.$touch()
      if (this.v$.$invalid) return;

      if (
        this.user === ADMIN_CREDENTIALS.user &&
        this.password === ADMIN_CREDENTIALS.password
      ) {
        fakeStore.user = this.user;
        fakeStore.isAdmin = true;
        this.$router.push({ name: 'Dasboard' });
      } else {
        this.invalidLogin = true;
      }
    }
  }
}
</script>
