<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Message" v-model="message">
    <button>Envoyer</button>
  </form>
</template>

<script>
  import {bus} from '../../main'
  export default {
    name: 'messageForm',
    data () {
      return {
        message: ''
      }
    },
    methods: {
      onSubmit (e) {
        this.sendMessage(this.message)
        bus.$emit('newMessage', this.message)
        e.target.querySelector('input').value = ''
        this.message = ''
      }
    }
  }
</script>
