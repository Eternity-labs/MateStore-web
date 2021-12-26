<template>
  <el-row class="el-main-navbar" :gutter="1">
    <el-col class="navbar-icon el-col-flex col-left">
      <div class="col-left-padding">
        <img src="../assets/MetaStore.png" />
      </div>
    </el-col>
    <el-col class="el-col-input el-col-flex col-mind">
      <div>
        <el-input v-model="input" placeholder="Search">
          <i slot="prefix" style="display: flex; align-items: center">
            <img class="input-icon-size" src="../assets/search_img.png" alt />
          </i>
        </el-input>
      </div>
    </el-col>
    <el-col class="el-col-flex col-right">
      <div class="parent-center col-right-padding">
        <div style="margin-right: 30px">NOT IN ALPHA</div>
        <div style="width: 30px">
          <img src="../assets/yuyan_icon.png" class="default-icon" />
          <p class="center">EN</p>
        </div>
        <div style="margin-left: 50px">
          <p>{{ netWork == '' ? '' : netWork.params[0].chainName }}</p>
          <div style="font-size: 16px; display: flex">
            <img
              src="../assets/polygon.svg"
              style="width: 21px; height: 21px; align-self: center"
            />
            {{ balance }} MATIC
          </div>
        </div>
        <div style="margin-left: 50px">
          <div class="gods-number">99+</div>
          <img
            src="../assets/gouwuche_icon.png"
            @click="dialogVisible = true"
            class="default-icon"
          />
          <el-dialog
            title="SHOPPING CART"
            :visible.sync="dialogVisible"
            class="shop-dialog"
          >
            <div>
              <div
                v-for="cart in shoppingStore"
                :key="cart.id"
                class="shop-cart-box"
              >
                <el-container>
                  <el-aside>
                    <img class="shop-cart-img" :src="cart.image" />
                  </el-aside>
                  <el-main>
                    <p class="shop-cart-title">
                      <span>{{ cart.title }}</span>
                      <span style="float: right; color: #ea3323"
                        >${{ cart.price }}</span
                      >
                    </p>
                    <p class="shop-cart-context">
                      <span>{{ cart.context }}</span>
                      <span style="float: right">${{ cart.oldPirce }}</span>
                    </p>
                    <p>
                      <el-button icon="el-icon-my-shop-delete" type="text"
                        >detach</el-button
                      >
                      <el-button icon="el-icon-my-shop-collect" type="text"
                        >collect</el-button
                      >
                    </p>
                  </el-main>
                </el-container>
              </div>
              <div>
                <p>
                  <span class="shop-cart-box-sum-title"
                    >Subtotal (2 items)</span
                  >
                  <span style="float: right">$40</span>
                </p>
                <p>
                  <span>save</span>
                  <span style="float: right; color: #008952">$40</span>
                </p>
                <p>Value tax is calculated at the time of settlement</p>
                <p></p>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button
                @click="dialogVisible = false"
                class="footer-button-view"
                >View shopping cart</el-button
              >
              <el-button
                @click="dialogVisible = false"
                class="footer-button-set"
                >settlement</el-button
              >
            </span>
          </el-dialog>
        </div>
        <div style="margin-left: 50px">
          <el-menu
            background-color="#000000"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-submenu index="1">
              <template slot="title">
                <img
                  v-if="!account"
                  src="../assets/geren_icon.png"
                  class="default-icon"
                />
                <div v-else class="account">{{ account }}</div>
              </template>
              <el-menu-item index="1-1" class="profile-menu-item"
                >Profile</el-menu-item
              >

              <el-menu-item index="1-2" class="profile-menu-item"
                >Staking</el-menu-item
              >
              <el-menu-item index="1-3" class="profile-menu-item"
                >Referral</el-menu-item
              >
              <el-menu-item index="1-4" class="profile-menu-item"
                >Inventory</el-menu-item
              >
              <el-menu-item index="1-5" class="profile-menu-item"
                >Avatar</el-menu-item
              >
              <el-menu-item index="1-6" class="profile-menu-item"
                >Settings</el-menu-item
              >
              <el-menu-item
                index="1-7"
                class="profile-menu-item"
                style="color: red"
                >Log Out</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import bn from '../js/bn'
import walletUtil from '../utils/wallet/utils'

export default {
  data () {
    return {
      input: '',
      dialogVisible: false,
      profileDialogVisible: false,
      account: '',
      netWork: '',
      balance: 0,
      shoppingStore: [
        {
          image:
            'https://img-blog.csdnimg.cn/20201014180756928.png?x-oss-process=image/resize,m_fixed,h_64,w_64',
          title: 'cescsc',
          context: 'ksdjhfjashdjkfd',
          price: 13,
          oldPirce: 20
        },
        {
          image:
            'https://img-blog.csdnimg.cn/20201014180756928.png?x-oss-process=image/resize,m_fixed,h_64,w_64',
          title: 'cescsc',
          context: 'ksdjhfjashdjkfd',
          price: 13,
          oldPirce: 20
        }
      ]
    }
  },
  created: function () {
    // this.initAccount()
  },
  methods: {
    handleSelect () {},
    initAccount () {
      this.$web3.eth.getChainId().then(chainId => {
        if (chainId !== 80001) {
          this.$web3.currentProvider
            .request(walletUtil.netArgs.testNet)
            .then(() => {
              this.initAccount()
            })
        }
        this.$web3.eth.requestAccounts().then(account => {
          this.netWork = walletUtil.netArgs.testNet
          console.log(account)
          this.account = account[0]
          this.$web3.eth.getBalance(account[0]).then(balance => {
            this.balance = bn.parseNumber(balance, 18)
            console.log(this.balance)
          })
        })
      })
    }
  }
}
</script>

<style scoped>
.col-left {
  width: 497px;
}

.col-mind {
  width: 561px;
}

.col-right {
  width: 862px;
}

.gods-number {
  width: 28px;
  height: 14px;
  margin-left: 15px;
  background: #8d9cf7;
  border-radius: 7px;
}

.default-icon {
  width: 28px;
  height: 28px;
}

.col-left-padding {
  padding-left: 322px;
}

.col-left-padding img {
  width: 151px;
  height: 24px;
}

.col-right-padding {
  padding-left: 22px;
}

.input-icon-size {
  width: 15px;
  height: 15px;
}

.el-main-navbar {
  width: 100%;
  height: 60px;
  background: #000000;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  vertical-align: middle;
}

.el-row .el-col {
  height: 100%;
}

.el-col-flex > div {
  align-self: center;
  display: flex;
}

.navbar-icon {
  /*width: 497px;*/
  /*padding-left: 332px;*/
}

.el-col-input {
  padding: 0 22px 0 24px;
}

.el-col-flex {
  display: flex;
}

.el-col-input >>> .el-input__inner {
  border-radius: 4px;
  height: 30px !important;
  background-color: #333333;
  color: #e0e0e0;
  font-size: 12px;
  font-weight: 400;
  line-height: 77px;
  border-color: black;
  padding-left: 90px;
  display: flex;
  width: 561px;
}

.el-col-input >>> .el-input__prefix {
  display: flex;
  padding: 0 23px;
}

.input-icon {
  padding: 0px;
}

.center {
  margin: 0px;
  text-align: center;
  align-self: center;
}

.parent-center div {
  align-self: center;
}

* >>> .el-menu--horizontal {
  border-bottom: none;
}

* >>> .el-submenu__icon-arrow {
  display: none;
}

.profile-menu-item {
  font-size: 16px;
  color: #ffffff;
  line-height: 166px;
  font-weight: 400;
}

.shop-dialog {
  border-radius: 10px;
  padding: 0px 0px 0px 934px;
}

.shop-dialog >>> .el-dialog {
  margin: 60px 0px 0px 0px !important;
  padding: 0px !important;
  width: 665px;
  height: 718px;
  background: #ffffff;
  border-radius: 10px;
}

.shop-dialog >>> .el-dialog__header {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  width: 632px;
  height: 70px;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 0px;
  padding-left: 33px;
  display: flex;
  align-self: center;
}

.shop-dialog >>> .el-dialog__title {
  align-self: center;
}

.shop-dialog >>> .el-dialog__headerbtn {
  top: 22px;
}

.shop-dialog >>> .el-dialog__footer {
  position: absolute;
  left: 0px;
  bottom: 106px;
  padding-left: 37px;
}

.shop-cart-img {
  width: 144px;
  height: 144px;
}

.shop-cart-box >>> .el-aside {
  width: auto !important;
}

.shop-cart-box >>> .el-main {
  padding: 0px 0px 0px 20px;
}

.shop-cart-title {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 55px;
}

.shop-cart-context {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
}

.shop-cart-box >>> .el-button {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 55px;
}

.shop-cart-box-sum-title {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
}

.footer-button-view {
  width: 282px;
  height: 55px;
  border: 1px solid #99a4ec;
  border-radius: 10px;
  color: #a4b0f9;
}

.footer-button-set {
  width: 282px;
  background: #a4b0f9;
  height: 55px;
  border: 1px solid #99a4ec;
  border-radius: 10px;
  color: #ffffff;
  margin-left: 27px;
}

.account {
  color: #ffffff;
  font-size: 12px;
  width: 200px;
  overflow: hidden;
}
</style>
