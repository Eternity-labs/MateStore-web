<template>
  <div class="app-wrapper">
    <el-container class="app-box">
      <el-header class="heads" height="72px">
        <headers />
      </el-header>
      <el-container class="section-wrap">
        <el-aside width="300px" class="main-aside">
          <side-bar></side-bar>
        </el-aside>
        <el-main class="main-container">
          <div class="main-container-views" ref="sectionMain">
            <transition name="nodebook" mode="out-in">
              <router-view />
            </transition>
          </div>
        </el-main>
      </el-container>

      <el-footer class="footer-container" height="135px">
        <Footer />
      </el-footer>
    </el-container>
    <el-backtop target=".main-container-views" :bottom="100">
      <div class="scrollTop">
        <i class="el-icon-upload2"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import sideBar from "../components/Sidebar/index.vue";
import Headers from "../components/Headers/Headers.vue";
import Footer from "../components/Footer/Footer.vue";
import router from "../router";
export default {
  data() {
    return {};
  },
  components: {
    sideBar,
    Headers,
    Footer,
  },
  created() {
    router.afterEach((to, from, next) => {
      let main = this.$refs.sectionMain;
      console.log(main.scrollTop)
      main.scrollTop=0;
    });
  },
  methods: {},
};
</script>

<style>
.app-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 2s;
}
.heads {
  background: #232051;
}
.main {
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}
.section-wrap {
  height: calc(100% - 282px);
}
.main-aside {
  height: 100%;
  background: linear-gradient(
    180deg,
    #1b1942 0%,
    rgba(27, 25, 66, 0.85) 57.44%,
    #17163b 100%
  );
  transition: all 0.5s;
  scrollbar-width: none; /* Firefox */
}
.main-aside::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.main-container {
  width: 100%;
  height: 100%;
  padding: 0 !important;
}
.el-menu {
  border: none !important;
}
.footer-container {
  background: #191b2c;
  padding: 0 !important;
}
.main-container-views {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: "-moz-scrollbars-none";
  scrollbar-width: none; /*  火狐   */
  background: #f5f7f9;
  background: radial-gradient(
    123.22% 129.67% at 100.89% -5.6%,
    #201d47 0%,
    #17153a 100%
  );
}
.main-container-views::-webkit-scrollbar {
  display: none; /*  Chrome  */
  width: 0 !important ; /*  Chrome  */
}

.scrollTop {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  font-size: 30px;
  font-weight: bolder;
}

.nodebook-enter,
.nodebook-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

.nodebook-enter-to,
.nodebook-leave {
  transform: scale(1);
  opacity: 1;
}
.nodebook-enter-active,
.nodebook-leave-active {
  transition: all 0.3s;
}
</style>