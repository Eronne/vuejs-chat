<template>
  <main>
    <div class="container">
      <div class="user-list">
        <!-- TODO: Put condition for -s -->
        <h1 v-if="this.store.users.length >= 1">{{ this.store.users.length }} Astronautes en ligne</h1>
        <h1 v-else>{{ this.store.users.length }} Astronaute en ligne</h1>
        <user-list class="list" :users="store.users"></user-list>
      </div>

      <div class="messages">
        <h1>Hello {{ this.store.user.name }}</h1>

        <div class="message-list">
          <message-list :messages="store.messages"></message-list>
        </div>
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

<style lang="scss" scoped>
  .container {
    display: flex;

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
      margin: 0;
      width: 90vw;
      height: 100vh;
      position: fixed;
      right: 0;
      background-color: #41b883;

      .message-list {
        background-color: red;
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
  }
</style>
