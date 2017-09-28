<template>
  <li>{{ data.username }}</li>
</template>

<script>
  export default {
    name: 'user',
    props: ['data']
  }
</script>
