<template>
  <main>
    <user-list></user-list>
    <message-list></message-list>
    <message-form></message-form>
  </main>
</template>

<script>
  import UserList from '../users/UserList'
  import MessageList from '../messages/MessageList'
  import MessageForm from '../messages/MessageForm'

  export default {
    name: 'chat',
    components: {
      UserList,
      MessageList,
      MessageForm
    }
  }
</script>
