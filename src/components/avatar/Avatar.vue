<template>
    <div :class="'color-' + color"></div>
</template>

<script>
  export default {
    name: 'avatars',
    props: {
      color: {type: String, default: 'red'}
    }
  }
</script>

<style lang="scss">
  @import "../../styles/utils/palette";

  @each $color in $colorsName {
    div.color-#{$color} {
      background-color: #{map_get($colors, $color)};
    }
  }

  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }
</style>
