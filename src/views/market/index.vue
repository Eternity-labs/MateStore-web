<template>
  <div>
    <div class="market-left">
      <h2>Welcome to the NFT Marketplace</h2>
      <h5>
        Here you can search and buy creator's ASSETS with SAND to incorporate
        them into your LAND
      </h5>
      <div style="text-align: right" class="market-nft-select-dev">
        <span>Sort by</span>
        <el-select
          v-model="value"
          class="market-nft-select"
          :popper-append-to-body="false"
          placeholder="请选择"
        >
          <el-option
            class="market-nft-select"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="text-align: left">
        <h3>NFTs For Sale</h3>
      </div>
      <div class="line"></div>
      <div class="nft-list-div">
        <el-row :gutter="35">
          <el-col :span="6" v-for="o in 8" :key="o">
            <div>
              <el-card :body-style="{ padding: '30px' }" class="card-nft">
                <img
                  src="https://img-blog.csdnimg.cn/20201014180756928.png?x-oss-process=image/resize,m_fixed,h_64,w_64"
                  class="nft-list-image"
                />
                <div>
                  <span>BOBBY THE BODYBULL...</span>
                  <el-row style="display: flex">
                    <el-col
                      :span="12"
                      style="text-align: left; margin: 0px"
                      class="nft-foot-left"
                    >
                      $22
                    </el-col>
                    <el-col
                      :span="12"
                      style="text-align: right; margin: 0px"
                      class="nft-foot-right"
                    >
                      <el-button
                        icon="el-icon-my-shop-add-shop"
                        class="nft-foot-right-btn"
                      >
                      </el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <div class="market-right">
      <h3>SHOP</h3>
      <el-collapse accordion class="market-nft-chose">
        <el-collapse-item title="FOR SALE" name="1">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="NFT COLLECTIONS" name="2">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="NFT TYPE" name="3">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="BEHAVIORS" name="5">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="SLOTS" name="6">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="CATALYST" name="7">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="GEMS" name="8">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="BIOMES" name="9">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="TAGS" name="10">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="COORDINATES" name="11">
          <div>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: 'Newest',
          label: 'Newest'
        },
        {
          value: 'Name(A-Z)',
          label: 'Name(A-Z)'
        },
        {
          value: 'Name(Z-A)',
          label: 'Name(Z-A)'
        },
        {
          value: 'Highest price',
          label: 'Highest price'
        },
        {
          value: 'Lowest price',
          label: 'Lowest price'
        }
      ],
      value: 'Newest'
    }
  }
}
</script>

<style lang="less" scoped>
.market-left {
  width: 1500px;
  float: left;
  height: calc(100vh - 187px);
  padding: 80px 0 50px 80px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
  text-align: center;
  overflow: scroll;
}
h2 {
  font-size: 48px;
  font-family: PingFang SC;
  font-weight: bold;
  margin: 0;
  line-height: 48px;
  color: #000000;
}
h3 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 30px;
  margin: 0;
}
h5 {
  font-size: 20px;
  margin: 0;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 58px;
}
.market-right {
  width: 228.1px;
  float: right;
  padding-top: 46px;
  padding-right: 20px;
}
.market-nft-select {
  width: 214px;
  height: 46px;
  background: #000000;
  border-radius: 10px;
  text-align: center;
}
.market-nft-select >>> .el-input__inner {
  background: inherit;
  border: none;
}
>>> .el-select-dropdown {
  background: #000000;
  border-radius: 10px;
  border: 1px solid #000000;
}
.market-nft-select >>> .el-select-dropdown >>> .el-popper {
  border: none;
}
.market-nft-select-dev {
  margin-right: 67px;
}
.line {
  width: 45rem;
  border-bottom: 2px solid #cccccc;
  margin-top: 23px;
}
.nft-list-div {
  padding-right: 43px;
  margin-top: 40px;
}
.nft-list-image {
  width: 195px;
  height: 260px;
}

.nft-list-div >>> .el-col {
  margin-bottom: 50px;
}
.nft-foot-left {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ea3323;
  line-height: 55px;
}
.nft-foot-right {
  border-radius: 1px;
  line-height: 55px;
  display: flex;
  justify-content: end;
}
.nft-foot-right-btn {
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;

  align-self: center;
}
.card-nft {
  background: linear-gradient(0deg, #fb4dc1, #724ee2);
  padding: 2px;
  border-radius: 10px;
}
.card-nft >>> .el-card__body {
  background: #ffffff;
  border-radius: 10px;
}
/*.card-nft::after{*/
/*  position: absolute;*/
/*  top: -1px; bottom: -1px;*/
/*  left: -1px; right: -1px;*/
/*  background: linear-gradient(0deg, #FB4DC1, #724EE2);*/
/*  content: '';*/
/*  z-index: -1;*/
/*  border-radius: 10px;*/
/*}*/
.market-nft-chose {
  border: 1px solid #cccccc;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}
.market-nft-chose >>> .el-collapse-item__header {
  border-bottom: 1px solid #cccccc;
  padding-left: 25px;
}
</style>
