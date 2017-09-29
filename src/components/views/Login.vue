<template>
  <main>
    <div class="container animated zoomIn">
      <img src="../../assets/img/login/logo.png" alt="Logo" class="logo">
      <p @class="error" v-if="error">Username should be between 1 and 15 characters</p>

      <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Username" v-model="username">
        <button>Connexion</button>
      </form>

      <div class="avatars">
        <!--<p>Choisis ton avatar !</p>-->
      </div>
    </div>
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
          this.$router.push('/')
        }
      }
    },
    created () {
      this.store.$watch('user', (user) => {
        if (user.id) {
          this.$router.push('/')
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/theme/variables";
  @import "../../styles/views/login";
</style>
