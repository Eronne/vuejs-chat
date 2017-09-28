<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Message" v-model="message">
    <button>Envoyer</button>
  </form>
</template>

<script>
  import Message from 'src/models/Message'

  export default {
    name: 'messageForm',
    data () {
      return {
        message: ''
      }
    },
    methods: {
      onSubmit (e) {
        this.sendMessage(new Message(this.message, this.$store.user))
        if (this.message.length > 0) {
          e.target.querySelector('input').value = ''
          this.message = ''
        }
      }
    }
  }
</script>
