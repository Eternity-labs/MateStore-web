<template>
  <div class="footers">
    <div class="footers-left">
      <div class="title">Communtity</div>
      <div class="communtity-wrap">
        <div class="top-box flex-center">
          <img src="../../assets/image/footer/discord.png" alt="">
          <img src="../../assets/image/footer/telegram.png" alt="">
          <img src="../../assets/image/footer/discord.png" alt="">
          <img src="../../assets/image/footer/twitter.png" alt="">
          <img src="../../assets/image/footer/facebook.png" alt="">
        </div>
        <div class="bottom-box flex-center">
          <img src="../../assets/image/footer/discord.png" alt="">
          <img src="../../assets/image/footer/discord.png" alt="">
        </div>
      </div>
    </div>
    <div class="footers-right">
      <div class="title">Pages</div>
      <div class="top-box flex-center">
        <span class="item-text">Pages</span>
        <span class="item-text">News</span>
        <span class="item-text">Create</span>
        <span class="item-text">Market</span>
        <span class="item-text item-width">Play</span>
      </div>
      <div class="top-box flex-center">
        <span class="item-text">Careers</span>
        <span class="item-text">Map</span>
        <span class="item-text">Sand</span>
        <span class="item-text">Press</span>
        <span class="item-text item-width">Terms of use Licensers</span>
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
  .footers{
    padding: 1px 0 0 300px;/*no*/
    display: flex;
    .footers-left{
      width: 50%;/*no*/
      .title{
        font-size: 26px;/*no*/
        color: #ffffff;
        margin-bottom: 4px;/*no*/
      }
      .communtity-wrap{
        .top-box{
          margin-bottom: 10px;/*no*/
          img{
            width: 28px;/*no*/
            height: 28px;/*no*/
            margin-right: 20px;/*no*/
            cursor: pointer;
          }
        }
        .bottom-box{
          img{
            width: 28px;/*no*/
            height: 28px;/*no*/
            margin-right: 20px;/*no*/
            cursor: pointer;
          }
        }
      }
    }
    .footers-right{
      .title{
        font-size: 26px;/*no*/
        color: #ffffff;
        margin-bottom: 0;/*no*/
      }
      .top-box,.bottom-box{
        cursor: pointer;
        .item-text{
          width: 80px;/*no*/
          height: 24px;/*no*/
          font-size: 12px;/*no*/
          color: #ffffff;
          display: flex;
          align-items: center;
        }
         .item-width{
          width: 130px;
        }
      }
    }
  }
</style>