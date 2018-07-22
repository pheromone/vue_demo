<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendData" :key="item.id">
        <div class="item-img-wrapper">
         <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendData: [
        {
          id: '001',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg',
          title: '今天下大雨',
          desc: '00000000000000000'
        },
        {
          id: '002',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg',
          title: '热门景点',
          desc: '嘻嘻嘻嘻嘻嘻嘻嘻'
        },
        {
          id: '003',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg',
          title: '热门景点',
          desc: '4444444444444444'
        },
        {
          id: '004',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg',
          title: '周末去西双版纳',
          desc: '33333333333333'
        },
        {
          id: '005',
          imgUrl: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsq9iq8ttrj30k80q9wi4.jpg',
          title: '周末去西双版纳',
          desc: '1111111111111'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins.styl"
  .recommend-title
    margin-top :4px
    line-height :32px
    background :#eee
    text-indent :4px
  .item
    felx:1
    .item-img-wrapper
      overflow :hidden
      width : 100%
      height : 140px
      .item-img
       width :100%
    .item-info
      padding : 1px
      .item-title
        line-size: 22px
        ellipsis()
      .item-desc
        line-height : 15px
        ellipsis()
</style>
