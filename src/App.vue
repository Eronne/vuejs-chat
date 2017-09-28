<template>
  <div id="app">
      <router-view :store="$store" @login="onLogin"></router-view>
  </div>
</template>

<script>
// import './js/stars'

export default {
  methods: {
    onLogin (username) {
      this.connect(username)
      this.$store.user = {
        name: username
      }
    }
  }
}
</script>

<style lang="scss">
  @import "styles/index";
</style>
