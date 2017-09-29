<template>
  <main class="overlay animated fadeIn">
      <div class="container">
        <user-list class="user-list" :users="$store.users"></user-list>

        <message-list :messages="$store.messages"></message-list>

        <div class="message-form">
          <div class="content">
            <div class="infos">
              <p class="time">{{ time }}</p>
              <p class="typing animated fadeIn infinite">Quelqu'un est en train d'écrire</p>
            </div>
            <message-form class="animated slideInUp"></message-form>
          </div>
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
    data () {
      return {
        time: new Date().toLocaleTimeString('fr-FR').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3')
      }
    },
    components: {
      UserList,
      MessageList,
      MessageForm
    }
  }
</script>

<style lang="scss">
  @import "../../styles/theme/variables";

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    position: fixed;

    .container {
      .user-list {
        position: relative;
        height: 15vh;
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-around;

        p{
          margin: 0;
        }
      }

      .message-list {
        height: 65vh;
        overflow: auto;
      }

      .message-form{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;

        .content {
          .infos {
            display: flex;
            justify-content: space-between;

            .time, .typing {
              margin-top: 0;
              display: inline-block;
            }

            .typing {
              margin-right: 60px;
            }
          }

          input, button {
            color: $principal;
            border: 1px solid $principal;
            background-color: transparent;
            padding: 10px;
            font-size: 1em;
          }

          input {
            box-sizing: border-box;
            margin-right: 20px;
            width: 70vw;
          }

          button {
            width: 40px;
          }
        }
      }
    }
  }
</style>
