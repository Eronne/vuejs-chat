import io from 'socket.io-client'

export default {
  install (Vue, options) {
    const socket = io(options.api)
    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('new message', (message) => {
      console.log(message)
    })

    Vue.mixin({
      methods: {
        sendMessage (text) {
          socket.emit('new message', text)
        }
      }
    })
  }
}
