<template>
  <article v-bind:class="[classUser ? 'current-user': 'other-user']" class="message animated fadeIn">
      <p class="send">{{data.createdAt | moment}}</p>
      <div class="infos">
        <img src="../../assets/img/login/logo.png" alt="avatar" class="avatar">
        <!--<avatars class="avatar" :color="data.author.color"></avatars>-->
        <p class="author">{{data.author.username}}</p>
      </div>
      <hr>
      <div class="content">
        <p>{{ data.body }}</p>
      </div>
  </article>
</template>

<script>
  import moment from 'moment'
  import avatars from 'src/components/avatar/Avatar.vue'

  export default {
    component: {avatars},
    name: 'message',
    props: ['data'],
    data () {
      return {
        classUser: false
      }
    },
    filters: {
      moment (data) {
        return moment(data.createdAt).format('HH:mm')
      }
    },
    methods: {
      moment () {
        return moment()
      },
      convertData () {
        let userId = this.data.author.id
        let storeId = this.$store.user.id
        if (userId === storeId) {
          this.classUser = true
        }
      }
    },
    created () {
      this.convertData()
    },
    mounted () {
      this.$nextTick(() => {
        let messageList = document.querySelector('.message-list')
        messageList.scrollLeft = messageList.scrollWidth
      })
    }
  }
</script>

<style lang="scss">
  .message {
    min-width: 22%;
    display: inline-block;
    margin: 30px;
    word-wrap: break-word;

    p{
      margin: 0;
    }

    .send{
      font-size: 0.7em;
      margin-bottom: 8px;
    }

    .infos {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

    .avatar, .author {
      display: inline-block;
    }

    .avatar{
      width: 30px;
      height: 30px;
      margin-right: 12px;
    }

    .content {
      max-height: 80%;
      overflow: auto;
      box-sizing: border-box;
      padding-top: 15px;
    }
  }
</style>
