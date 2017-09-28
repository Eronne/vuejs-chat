import io from 'socket.io-client'
import Vue from 'vue'

export const store = new Vue({
  data: {
    user: {}, // User informations
    users: ['Erwann', 'Alexandre', 'Omar'], // User List
    messages: ['Bonjour', 'Hello'] // Message List
  }
})

export default {
  install (Vue, options) {
    const socket = io(options.api)

    Vue.prototype.$store = store

    // Events
    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('new message', (data) => {
      // data = {
      //   author:
      //   body:
      // }
    })

    socket.on('user connected', (user) => {
      console.log(user)
      store.user = user
    })

    Vue.mixin({
      methods: {
        connect (username, avatarURL) {
          socket.emit('user connected', {
            username,
            avatarURL
          })
        },
        sendMessage (text) {
          socket.emit('new message', text)
        }

      // SendWizz…
      }
    })
  }
}
