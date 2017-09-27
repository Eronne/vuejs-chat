<template>
  <div>
    <message v-for="message in messages" :data="message"></message>
    <!-- Messages -->
  </div>
</template>

<script>
  import Message from './Message.vue'

  export default {
    components: {Message},
    name: 'messageList',
    props: ['messages']
  }
</script>
