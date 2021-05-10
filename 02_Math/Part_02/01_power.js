/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:25:49
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:25:49
 * @Email        : tongzonghua@360.cn
 * @Description  : 幂
 * @FilePath     : /algorithm-101/02_Math/Part_02/01_power.js
 */
/**
 * 3的幂次方，需要判断当前数字是否可以一直被3整除
 * 特殊情况：如果n===1，即3的0次幂，应该输出true
 */
/**
 * 方法一：循环求解
 */
function isPowerOfThree(n) {
  if (n < 1) return false
  while (n > 1) {
    if (n % 3 !== 0) {
      return false
    } else {
      n /= 3
    }
  }
  return true
}

/**
 * 方法二：递归求解
 */
function isPowerOfThree2(n) {
  if (n <= 0) return false
  if (n === 1) return true
  if (n % 3 === 0) {
    return isPowerOfThree2(n / 3)
  }
  return false
}

/**
 * 方法三：magic
 * 1. 求出在js整数范围内，3的幂的最大值
 * 2. 用最大致除n，如果等于0，则是3的幂次方
 */
function isPowerOfThree3(n) {
  if (n <= 0) return false
  const maxPow = parseInt(Math.log(Math.pow(2, 31)) / Math.log(3)),
    maxVal = Math.pow(3, maxPow)
  return maxVal % n === 0
}

console.log(isPowerOfThree3(9));
console.log(isPowerOfThree3(45));
