<template>
  <div id="app">
    <router-view :store="store" @ login="onLogin"></router-view>
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
  }
}
</script>

<style lang="sass">
/*@import "styles/theme"*/

</style>
