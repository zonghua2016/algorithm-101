/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:24:55
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:24:55
 * @Email        : tongzonghua@360.cn
 * @Description  : Fizz Buzz
 * @FilePath     : /algorithm-101/02_Math/Part_01/02_fizz_buzz.js
 */
/**
 * 输入从1到n数字的字符串
 * 1. 如果n是3的倍数，输出“Fizz”
 * 2. 如果n是5的倍数，输出“Buzz”
 * 3. 如果n同时是3和5的倍数，输出“FizzBuzz”
 */
/**
 * 方法一：遍历
 */
function fizzbuzz(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(i.toString())
    }
  }
  return arr
}

/**
 * 方法二：字符串累加
 */
function fizzbuzz2(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    let str = ''
    if (i % 3 === 0) str += 'Fizz'
    if (i % 5 === 0) str += 'Buzz'
    if (i % 3 !== 0 && i % 5 !== 0) str += i
    arr.push(str)
  }
  return arr
}


console.log(fizzbuzz2(15));
