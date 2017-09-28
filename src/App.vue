<template>
  <div id="app">
      <div class="space"></div>
      <router-view :store="$store" @login="onLogin"></router-view>
  </div>
</template>

<script>
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
  @import "styles/components/background";
</style>
