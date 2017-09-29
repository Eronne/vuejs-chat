<template>
  <div class="user">
    <li class="animated fadeIn">{{ data.username }}</li>
    <img src="../../assets/img/login/logo.png" alt="avatar" class="avatar">
  </div>
</template>

<script>
  export default {
    name: 'user',
    props: ['data']
  }
</script>

<style lang="scss">
  .user {
    display: flex;
    align-items: center;
    transform: rotate(-50deg);

    img, li {
      display: inline-block;
    }

    img {
      width: 30px;
      height: 30px;
      margin-left: 12px;
    }
  }
</style>
