<template>
  <div class="aside-wrap">
    <div @click="changeMenu(item,i)"
      class="item-menu"
      v-for="(item, i) in menuList"
      :key="i"
      :to="item.path"
    >
      <img :src="item.icon" alt="menuIcon" />
      <span :class="menuIndex == i ? 'text-active' : 'text-normal'">{{
        item.title
      }}</span>
      <div class="message" v-show="i==2"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menuList: [
        {
          title: "Market",
          icon: require("../../assets/image/aside/aside1-a.png"),
          path: "/market",
        },
        {
          title: "Wallet",
          icon: require("../../assets/image/aside/aside2.png"),
          path: "/wallet",
        },
        {
          title: "Messages",
          icon: require("../../assets/image/aside/aside3.png"),
          path: "/wallet",
        },
        {
          title: "Trade",
          icon: require("../../assets/image/aside/aside4.png"),
          path: "/wallet",
        },
        {
          title: "Account Setting",
          icon: require("../../assets/image/aside/aside5.png"),
          path: "/wallet",
        },
      ],
      menuIndex: 0,
    };
  },
  methods: {
    changeMenu(item,index){
      this.menuIndex=index;
      this.$router.push({path:item.path})
    }
  },
};
</script>
<style scoped lang="scss">
.item-menu {
  height: 80px;/*no*/
  padding-left: 48px;/*no*/
  display: flex;
  align-items: center;
  position: relative;
  font-size: 22px;/*no*/
  cursor: pointer;
  img {
    width: 28px;/*no*/
    height: 28px;/*no*/
    margin-right: 20px;/*no*/
  }
  .text-active {
    color: #53b9ea;
  }
  .text-normal {
    color: #6f6c99;
  }
  .message{
      position: absolute;
      width: 8px;/*no*/
      height: 8px;/*no*/
      background: linear-gradient(180deg, #FF40A5 0%, #E14CD1 100%);
      border-radius: 50%;
      right: 30px;/*no*/
      top: 50%;
      transform: translateY(-50%);
  }
}
</style>