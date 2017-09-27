<template>
  <div>
    <message v-for="message in messages"></message>
    <!-- Messages -->
  </div>
</template>

<script>
  import Message from './Message.vue'

  export default {
    name: 'messageList',
    data () {
      return {
        messages: ['Bonjour', 'Hello']
      }
    },
    components: {
      Message
    }
  }
</script>
