<template>
  <article v-bind:class="[classUser ? 'current-user': 'other-user']">
    <p>User : {{data.author.username}}</p>
    <p>Time : {{data.createdAt}}</p>
    <p>Content : {{ data.body }}</p>
    <hr>
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
