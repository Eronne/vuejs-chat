<template>
  <main>
    <div class="container">
      <div class="user-list">
        <h1>User List</h1>
        <user-list class="list" :users="store.users"></user-list>
      </div>

      <div class="messages">
        <message-list class="message-list" :messages="store.messages"></message-list>
        <message-form class="message-form"></message-form>
      </div>
    </div>

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

<style lang="scss" scoped="">
  .container {
    display: flex;
  }

  .user-list {
    width: 10vw;
    height: 100vh;
    background-color: #bbbbbb;

    .list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }

  .messages {
    position: relative;

    .message-list {
      margin: 0;
      width: 90vw;
      height: 100vh;
      background-color: #41b883;
    }

    .message-form {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 90vw;
      padding: 20px;
      background-color: cadetblue;
    }
  }
</style>
