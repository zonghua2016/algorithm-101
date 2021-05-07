/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:15:00
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 14:52:19
 * @Email        : tongzonghua@360.cn
 * @Description  : 翻转整数
 * @FilePath     : /algorithm-101/01_String/Part_01/01_flip_integer.js
 */
/**
 * 给定有符号整数，带符号翻转
 * 1. 如果超出数值临界范围返回0
 */

// 方法一：翻转字符串方法
function reverse(num) {
  // 如果不是数字，优先返回
  if (typeof num !== 'number') {
    return
  }
  const res = String(Math.abs(num)).split('').reverse().join(''),
    result = num > 0 ? parseInt(res, 10) : 0 - parseInt(res, 10)

  // 判断临界值
  if (res >= Math.pow(-2, 31) && res <= Math.pow(2, 31) - 1) {
    return result
  }
  return 0
}

// 方法二 欧几里得算法
function reverse2(num) {
  let numAbs = Math.abs(num),
    res = 0

  while (numAbs !== 0) {
    // 借鉴欧几里得算法，从res的最后一位开始取值并拼成新的数
    res = (numAbs % 10) + (res * 10)
    numAbs = Math.floor(numAbs / 10)
  }
  
  res = num > 0 ? res : res * -1
  
  // 边界值
  if (res >= Math.pow(-2, 31) && res <= Math.pow(2, 31) - 1) {
    return res
  }
  return 0
}

console.log(reverse2(123));
console.log(reverse2(-123));
console.log(reverse2(120));
