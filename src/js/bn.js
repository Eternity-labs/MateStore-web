/*
 * @Author: your name
 * @Date: 2021-10-21 11:50:16
 * @LastEditTime: 2021-10-21 18:01:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \A_chain_bridge\chain_bridge\js\BNUtils.js
 */
const Big = require('big.js')
Big.PE = 50
// const Big1 = require('bignumber.js')

function parseNumber (number, power) {
  return roundFun(new Big(String(number)).div(new Big(10).pow(power)).toNumber(), 4)
}

function pow (number, power) {
  // console.log(new Big(number).times(new Big(10).pow(power)).toString())
  return new Big(number).times(new Big(10).pow(power)).toString()
}

function roundFun (value, n) {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n)
}

module.exports = {
  parseNumber,
  pow,
  roundFun
}
