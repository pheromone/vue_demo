<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination dot"  slot="pagination"></div>

  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: '0001',
          imgUrl: 'http://ww1.sinaimg.cn/large/0073sXn7ly1ft82s05kpaj30j50pjq9v.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1ft5q7ys128j30sg10gnk5.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow :hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #fff
    .swiper-img
      width: 100%
    .dot
       position :absolute
       top: 20%
       left: 50%
</style>
