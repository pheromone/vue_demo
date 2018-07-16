<template>
  <div class='icons' >
    <div class="icon" v-for="item of icons" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl" />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      icons: [
        {
          id: '001',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '002',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '003',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '004',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '005',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '006',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '007',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        },
        {
          id: '008',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import "~@styles/variables.styl"
  .icons
    overflow: hidden
    height :0
    padding-bottom :50%
    .icon
      position :relative
      overflow :hidden
      float :left
      height :0
      width :25%
      padding-bottom :25%
      .icon-img
        position :absolute
        top: 0
        left :0
        right :0
        bottom :22px
        box-sizing :border-box
        padding :2px
        .icon-img-content
          display :block
          margin : 0 auto
          height : 100%
      .icon-desc
        position :absolute
        left :0
        right :0
        bottom :0
        height : 22px
        line-height : 22px
        color :$darkTextColor
        text-align :center

</style>
