/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:19:23
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:19:37
 * @Email        : tongzonghua@360.cn
 * @Description  : 验证回文字符串
 * @FilePath     : /algorithm-101/String/Part_03/01_palindrome.js
 */
/**
 * 验证给定字符串是否是回文串
 * 只考虑字母、数字，忽略大小写
 */

//  方法一
// 将字符串转为数组，再对数组首尾一致性比较
function isPalindrome(s) {
  const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('')
  let i = 0, j = arr.length - 1
  while (i < j) {
    if (arr[i] === arr[j]) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}


// 方法二
// 去除字符串中的非字母数字，翻转字符串，如果和原字符串一致，则是回文字符串
function isPalindrome2(s) {
  s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  const sCopy = s.split('').reverse().join('')
  return s === sCopy
}


console.log(` "A man, a plan, a canal: Panama"==>${isPalindrome("A man, a plan, a canal: Panama")}`);
console.log(`"race a car"==>${isPalindrome("race a car")}`);

console.log(` "A man, a plan, a canal: Panama"==>${isPalindrome2("A man, a plan, a canal: Panama")}`);
console.log(`"race a car"==>${isPalindrome2("race a car")}`);
