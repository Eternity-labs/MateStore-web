
<template>
  <div class="page-view">
    
    <div class="search-wrap">
      <div class="search-box flex-center">
        <img
          class="search-img"
          src="../../assets/image/market/search.png"
          alt=""
        />
        <el-input
          v-model="searchContent"
          type="text"
          placeholder="Search"
          class="search-input"
        ></el-input>
        <div class="sort-box flex-center">
          <span>Sort</span>
          <img src="../../assets/image/market/bottomAction.png" alt="" />
        </div>
      </div>
    </div>
    
   <div class="group-wrap-title">all / The holy Frail</div>
      <div class="group-wrap">
        <div @click="navBack" class="remove-box">
          <img src="../../assets/image/market/remove.png" alt="" />
        </div>
        <div class="left-box">
          <img src="../../assets/image/market/goods.jpg" alt="" />
          <el-button class="left-btn">Buy</el-button>
          <el-button class="left-btn">Add to cart</el-button>
        </div>
        <div class="right-box">
          <div class="title">The holy Frail</div>
          <div class="discribe-title">About</div>
          <div class="content marginBottom-one">
            The owner of metastore will have the right to forge, upload and sell
            NFT. Can have all the power in the game, any game can sell accounts
            through metastore, bringing more convenient channels for game
            producers. Metastore holders can sell real-world goods online. Store
            is an important part of meta-universe interaction. Users holding
            Store are equivalent to gaining all the power between the virtual
            and real world.
          </div>
          <div class="discribe-title">Description</div>
          <div class="content">
            The owner of metastore will have the right to forge, upload and sell
            NFT. Can have all the power in the game, any game can sell accounts
            through metastore, bringing more convenient channels for game
            producers. Metastore holders can sell real-world goods online. Store
            is an important part of meta-universe interaction. Users holding
            Store are equivalent to gaining all the power between the virtual
            and real world.
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: ""
    };
  },
  created() {},
  methods: {
    navBack(){
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped lang="scss">
.page-view {
  padding: 20px 35px;
}
.search-wrap {
  padding: 14px 0 20px;
  .search-box {
    position: relative;
    background: #0d4473;
    width: 100%;
    height: 26px;
    border-radius: 4px;
    padding: 0 10px;
    .search-img {
      width: 15px;
      height: 15px;
      margin-right: 2px;
    }
    .search-input {
      font-size: 13px;
      width: 60%;
      opacity: 0.9;
    }
    .sort-box {
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 10;
      width: 117px;
      height: 26px;
      border-radius: 4px;
      background-color: #1e5c92;
      padding: 0 11px 0 12px;
      justify-content: space-between;
      font-size: 12px;
      color: #b0b0cb;
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
}

.group-wrap-title{
  font-size: 11px;
  color: #7BA0B5;
  padding: 0 0 12px;
  margin-top: -8px;
}
.group-wrap {
  background: #0d4473;
  border-radius: 7px;
  padding: 14px 30px 70px 23px;
  display: flex;
  position: relative;
  .remove-box {
    position: absolute;
    top: 4px;
    right: 4px;
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    img {
      width: 14px;
      height: 14px;
    }
  }
  .left-box {
    width: 125px;
    margin-right: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    img {
      width: 100%;
      height: auto;
      margin-bottom: 5px;
      border-radius: 12px;
    }
    .left-btn {
      width: 100%;
      height: 22px;
      border-radius: 11px;
      border: none;
      font-size: 10px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #5093cc;
      margin: 0 0 8px 0;
    }
  }
  .right-box {
    width: 100%;
    .title,
    .discribe-title {
      color: #b3e3ff;
      font-weight: bold;
    }
    .title {
      font-size: 19px;
      margin-bottom: 12px;
    }
    .discribe-title {
      font-size: 14px;
    }
    .content {
      font-size: 9px;
      color: #7d9fbb;
      line-height: 12px;
    }
    .marginBottom-one {
      margin-bottom: 10px;
    }
  }
}
.search-wrap /deep/ .el-input__inner {
  background: transparent;
  border: none;
  height: 30px;
  padding-left: 5px;
  color: #b0b0cb;
}
.el-input.el-input__inner {
  background-color: rgba(255, 255, 255, 0.247);
}
.search-input::-webkit-input-placeholder {
  font-size: 13px;
  color: #b0b0cb;
} /* 使用webkit内核的浏览器 */
.search-input:-moz-placeholder {
  font-size: 13px;
  color: #b0b0cb;
} /* Firefox版本4-18 */
.search-input::-moz-placeholder {
  font-size: 13px;
  color: #b0b0cb;
} /* Firefox版本19+ */
.search-input:-ms-input-placeholder {
  font-size: 13px;
  color: #b0b0cb;
} /* IE浏览器 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
