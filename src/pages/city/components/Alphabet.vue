<template>
  <div class="list">
    <ol>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/variables.styl"
   .list
    display :flex
    flex-direction :column
    justify-content :center
    position :absolute
    right :0
    top: 1.58rem
    bottom :0
    width : .4rem
    .item
      line-height : .4rem
      text-align :center
      color :$bgColor
</style>
