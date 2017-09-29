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
  @import "../../styles/views/chat";
</style>
