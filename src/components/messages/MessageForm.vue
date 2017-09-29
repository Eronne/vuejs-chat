<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Message" v-model="message"><!-- White space bug
    --><button>></button>
  </form>
</template>

<script>
  export default {
    name: 'messageForm',
    data () {
      return {
        message: ''
      }
    },
    methods: {
      onSubmit (e) {
        if (this.message.length > 0) {
          this.sendMessage(this.message)
          this.message = ''
        }
      }
    }
  }
</script>
