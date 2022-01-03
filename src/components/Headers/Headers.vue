<template>
  <div class="headers">
    <div class="headers-left">
      MetaStore
    </div>
    <div class="headers-right flex-center">
      <div class="search-box flex-center">
        <img src="../../assets/image/header/search.png" alt="">
      </div>
      <div class="loadmore-box flex-center">
        <img src="../../assets/image/header/loadmore.png" alt="">
      </div>
      <div class="cart-box flex-center">
        <img src="../../assets/image/header/cart.png" alt="">
      </div>
      <div class="message-box flex-center">
        <img src="../../assets/image/header/notice.png" alt="">
        <span>12</span>
      </div>
      <div class="user-box flex-center">
        <img src="../../assets/image/header/avatar.jpg" alt="">
        <span>Pixelz Warrios</span>
      </div>
    </div>
    
  </div>
</template>


<script>

export default {
  data() {
    return {
      
    };
  },
  components: {

  },
  methods: {
    
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.headers {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 8px 0 2px;
  align-items: center;
  .headers-left{
    font-size:14px;
    color: #64A2FF;
    font-weight: bold;
  }
  .headers-right{
    .user-box{
      font-size:10px;
      color: #BDBDD5;
      margin-left: 14px;
      cursor: pointer;
      img{
        width:17px;
        height: 17px;
        margin-right: 8px;
        border-radius: 2px;
      }
    }
    .message-box{
      width: 24px;
      height: 14px;
      background: linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%);
      border-radius: 14px;
      justify-content: center;
      font-size:8px;
      color: #ffffff;
      padding: 0 15px;
      margin-left: 10px;
      cursor: pointer;
      img{
        width: 8px;
        height: 8px;
        margin-right: 2px;
      }
    }
  }
  .search-box,.loadmore-box,.cart-box{
    height:32px;
    padding: 0 10px;
    cursor: pointer;
    img{
      width: 12px;
      height: 12px;
    }
  }
  .cart-box,.search-box{
    img{
      width: 14px;
      height: 14px;
    }
  }
}

</style>