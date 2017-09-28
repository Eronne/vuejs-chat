<template>
  <main>
    <div class="container animated zoomIn">
      <img src="../../assets/img/login/logo.png" alt="Logo" class="logo">
      <p v-if="store.user">{{ store.user.name }}</p>
      <p @class="error" v-if="error">Username should be between 1 and 15 characters</p>

      <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Username" v-model="username">
        <button>Décoller</button>
      </form>
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
    }
  }
</script>

<style lang="scss" scoped="">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 55%;
      border: 1px solid white;
      border-radius: 3px;

      @media (max-width: 980px) {
        width: 60%;
      }

      .logo {
        position: absolute;
        top: -56px;
      }

      form{
        display: block !important;

        ::placeholder{
          color: #a5a5a5;
          text-transform: uppercase;
        }

        input, button {
          display: block;
        }

        input {
          width: 15vw;
          text-align: center;
          padding: 8px;
          margin-bottom: 6vh;
          color: #ffffff;
          border: none;
          border-bottom: 1px solid white;
          background-color: transparent;
          box-sizing: border-box;
        }

        button {
          width: 15vw;
          margin: 0 auto;
          padding: 15px;
          color: #ffffff;
          background-color: transparent;
          border: 1px solid white;
          border-radius: 3px;
        }
      }
    }
  }
</style>
