
<template>
  <div class="page-view">
    <transition name="fade">
      <div v-show="headBtn" class="header-wrap">
        <div class="title">Welcome to NFT game market</div>
        <div class="discribe">
          The city is building, and you are the creator !
        </div>
        <div @click="removeHead" class="remove-box">
          <img src="../../assets/image/market/remove.png" alt="" />
        </div>
      </div>
    </transition>
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
   <div class="tags-wrap flex-center">
        <div class="left-box">Tags:</div>
        <div class="right-box flex-center">
          <el-button
            @click="changeTag(i)"
            class="item-tag"
            :class="tagIndex == i ? 'item-tag-active' : 'item-tag-normal'"
            v-for="(item, i) in tagsList"
            :Key="`a${i}`"
            >{{ item }}</el-button
          >
        </div> 
      </div>
      <div class="group-list">
        <el-row>
          <el-col :span="6" v-for="(item, index) in listData" :Key="`b${index}`"
            ><div @click="navMarketDetails" class="group-item">
              <img src="../../assets/image/market/goods.jpg" alt="" /></div
          ></el-col>
        </el-row>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      headBtn: true,
      searchContent: "",
      tagsList: ["all", "art", "wearable", "weapon", "exterior"],
      tagIndex: 0,
      listData:[1,1,1,1,1,1,1,1]
    };
  },
  created() {},
  methods: {
    changeTag(index) {
      this.tagIndex = index;
    },
    removeHead() {
      this.headBtn = false;
    },
    navMarketDetails(){
      this.$router.push('/market/details')
    }
  },
};
</script>

<style scoped lang="scss">
.page-view {
  padding: 20px 35px;
}
.header-wrap {
  width: 100%;
  height: 134px;
  background: url(../../assets/image/market/headBg.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
  position: relative;
  padding: 29px 30px 30px 43px;
  margin-bottom: 6px;
  .title {
    font-size: 25px;
    color: #abb3be;
    opacity: 0.9;
  }
  .discribe {
    font-size: 14px;
    color: #abb3be;
    opacity: 0.9;
    margin-top: 10px;
  }
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
.tags-wrap {
  padding: 0px 0 8px;
  .left-box {
    font-size: 13px;
    color: #fff;
    margin-right: 20px;
  }
  .right-box {
    .item-tag {
      width: 56px;
      height: 18px;
      border-radius: 3px;
      margin-right: 10px;
      border: none;
      font-size: 11px;
      color: #bdccce;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .item-tag-active {
      background: #2e7187;
    }
    .item-tag-normal {
      background: #5a5a5a;
    }
  }
}
.group-list {
  background: #0d4473;
  border-radius: 7px;
  padding: 8px 6px 6px;
  margin-top: 6px;
  .group-item {
    width: 98%;
    margin-bottom: 6px;
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
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
