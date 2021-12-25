<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>

import Navbar from "@/layout/Navbar";
import AppMain from "@/layout/AppMain";

export default {
  components: {Navbar, AppMain},
  data() {
    return {}
  }
}
</script>

<style scoped>

.app-wrapper {
  @include clearfix;
  height: 100%;
  width: 100%;

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  transition: width 0.28s;
  z-index: 2 !important;
}
}
</style>
