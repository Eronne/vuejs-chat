<template>
  <div id="app">
    <icon class="logo" name="logo"></icon>
    <router-view></router-view>
    <hr>
    <div>
      <button @click="increment">You clicked this button {{ $store.state.count }} times</button>
    </div>
  </div>
</template>

<script>
import store from 'store'
import { mapActions, mapGetters } from 'vuex'
export default {
  store,
  computed: mapGetters([
    'countPlural'
  ]),
  methods: {
    ...mapActions([
      'increment'
    ]),
    onLangClick (lang) {
      this.setLang(lang) // mixin method
      this.increment() // store action
    }
  }
}
</script>

<style lang="stylus">
@import "../node_modules/typus" // base styles
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 50%

#app
  align() // jeet
  text-align center

.icon-logo
  margin-bottom 2.5rem
</style>
