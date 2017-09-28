import io from 'socket.io-client'
import Vue from 'vue'

export const store = new Vue({
  data: {
    user: {}, // User informations
    users: [], // User List
    messages: [] // Message List
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

    socket.on('new message', (message) => {
      store.messages.push(message)
    })

    socket.on('getUsers', (users) => {
      for (let i = 0; i < users.length; i++) {
        store.users.push(users[i])
      }
    })

    socket.on('user connected', (user) => {
      store.user = user
    })

    socket.on('user joined', (user) => {
      store.users = user.clients
    })

    socket.on('user left', (userId) => {
      store.users = store.users.filter(user => user.id !== userId)
    })

    Vue.mixin({
      methods: {
        connect (username, avatarURL) {
          socket.emit('user connected', {
            username,
            avatarURL
          })
        },
        sendMessage (message) {
          socket.emit('new message', message)
        }

      // SendWizz…
      }
    })
  }
}
