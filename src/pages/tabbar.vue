<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="HomePage">
      <img slot="icon" :src="this.atabs[0]">
      主页
    </mt-tab-item>
    <mt-tab-item id="Mine">
      <img slot="icon" v-bind:src="this.atabs[1]">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
  data () {
    return {
      message: this.selected,
      atabs: this.tabs
    }
  },
  props:{
    selected: String,
    tabs: Array
  },
  watch: {
    message: function (val, oldVal) {
      switch (val) {
        case 'Homepage':
          this.$router.push('/homepage')
          break
        case 'Mine':
          this.$router.push('/mine')
          break
      }
    }
  }
}
</script>template>

</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>

</style>
