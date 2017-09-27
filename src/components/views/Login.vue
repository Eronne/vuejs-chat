<template>
  <main>
    <h1 v-if="store.user">{{ store.user.name }}</h1>
    <form @submit.prevent="onSubmit">
      <p @class="error" v-if="error">Username should be between 1 and 15 characters</p>
      <input type="text" placeholder="Username" v-model="username">
      <button>Se connecter</button>
    </form>
  </main>
</template>

<script>
  export default {
    props: ['store'],
    data () {
      return {
        error: false,
        username: ''
      }
    },
    methods: {
      onSubmit (e) {
        // Validation
        if (!this.username.match(/^\w{1,15}$/)) {
          this.error = true
        } else {
          this.$emit('login', this.username)
        }
      }
    }
  }
</script>

