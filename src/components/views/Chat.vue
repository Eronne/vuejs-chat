<template>
  <main>
    <user-list :users="store.users"></user-list>
    <message-list :messages="store.messages"></message-list>
    <message-form></message-form>
  </main>
</template>

<script>
  import UserList from '../users/UserList'
  import MessageList from '../messages/MessageList'
  import MessageForm from '../messages/MessageForm'

  export default {
    name: 'chat',
    props: ['store'],
    components: {
      UserList,
      MessageList,
      MessageForm
    }
  }
</script>
