<template>
  <ul>
    <user v-for="user in users" :data="user"></user>
  </ul>
</template>

<script>
  import User from './User.vue'

  export default {
    components: {User},
    name: 'userList',
    props: ['users']
  }
</script>

<style lang="scss">
  ul {
    display: flex;
  }
</style>
