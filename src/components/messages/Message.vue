<template>
  <article>
    <p>User : {{data.author.username}}</p>
    <p>Time : {{data.createdAt}}</p>
    <p>Content : {{ data.body }}</p>
    <hr>
  </article>
</template>

<script>
  export default {
    name: 'message',
    props: ['data']
  }
</script>
