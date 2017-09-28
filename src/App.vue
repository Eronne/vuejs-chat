<template>
  <div id="app">
    <router-view :store="store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store: {
        user: {}, // User informations
        users: ['Erwann', 'Alexandre', 'Omar'], // User List
        messages: ['Bonjour', 'Hello'] // Message List
      }
    }
  },
  methods: {
    onLogin (username) {
      this.store.user = {
        name: username
      }
    }
  },
  created: function () {
    if (!this.store.user.name) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
  @import "styles/index";
</style>
