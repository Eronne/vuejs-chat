<template>
  <li class="animated fadeIn">{{ data.username }}</li>
</template>

<script>
  export default {
    name: 'user',
    props: ['data']
  }
</script>

<style lang="scss">
  li {
    display: inline-block;
    transform: rotate(-50deg);
  }
</style>
