<template>
  <div id="app">
      <router-view :store="store" @login="onLogin"></router-view>
  </div>
</template>

<script>
// import './js/stars'
import {bus} from './main'

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
  created () {
    bus.$on('newMessage', (data) => {
      console.log('bus event:', data)
      this.store.messages.push(data)
    })
    if (!this.store.user.name) {
      this.$router.push('/login')
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

<style lang="scss">
  @import "styles/index";
</style>
