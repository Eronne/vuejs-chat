<template>
  <article v-bind:class="[classUser ? 'current-user': 'other-user']" class="message animated fadeIn">
    <p>User : {{data.author.username}} | Time : {{data.createdAt}} | Content : {{ data.body }}</p>
  </article>
</template>

<script>
  export default {
    name: 'message',
    props: ['data'],
    data () {
      return {
        classUser: false
      }
    },
    methods: {
      convertData () {
        let userId = this.data.author.id
        let storeId = this.$store.user.id
        if (userId === storeId) {
          this.classUser = true
        }
      }
    },
    created () {
      this.convertData()
    }
  }
</script>

<style lang="scss">
</style>
