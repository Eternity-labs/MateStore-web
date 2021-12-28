<template>
  <el-container>
    <el-main>
      <router-view />
    </el-main>
    <div class="aside-right">
      <ul>
        <li @click="goTo('home')">
          <img src="../assets/HOME.png">
          <span>HOME</span>
        </li>
        <li @click="goTo('alpha')">
          <img src="../assets/ALPHA.png">
          <span>ALPHA</span>
        </li>
        <li @click="goTo('market')">
          <img src="../assets/MARKET.png">
          <span>MARKET</span>
        </li>
        <li @click="goTo('create')">
          <img src="../assets/CREATE.png">
          <span>CREATE</span>
        </li>
        <li @click="goTo('map')">
          <img src="../assets/MAP.png">
          <span>MAP</span>
        </li>
        <li @click="goTo('about')">
          <img src="../assets/ABOUT.png">
          <span>ABOUT</span>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import router from '../router'

export default {
  data () {
    return {

    }
  },
  methods: {
    goTo (pathName) {
      router.push({ name: pathName})
    }
  }
}
</script>

<style scoped>
.aside-right{
  width: 82px;
  float: right;
  padding-top:51px;
}
ul li,li *{
  text-align:center;
  width: 47px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
}
li span{
  line-height: 37px;
}
</style>
