/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:19:58
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:19:58
 * @Email        : tongzonghua@360.cn
 * @Description  : strStr()
 * @FilePath     : /algorithm-101/String/Part_03/02_strStr.js
 */
/**
 * 在haystack中查找needle字符串出现的第一个位置，如果不存在则返回-1
 * needle不存在则返回0
 */

/**
 * 方法一：遍历截取字符串对比
 * 从haystack中截取与需查找字符串needle长度相等的内容后，对比截取的内容与匹配字符串是否相等，如果相等则返回开始截取的小标
 * 特殊场景：
 * 1. needle 长度为0，直接返回0
 * 2. needle的字符长度大于haystack，返回-1
 * 3. needle的字符长度等于haystack，判断是否相等
 */
function strStr(haystack, needle) {
  const hayLen = haystack.length,
    nedLen = needle.length
  if (!nedLen) return 0
  if (nedLen > hayLen) return -1
  if (hayLen === nedLen) return haystack === needle ? 0 : -1
  for (let i = 0; i <= hayLen - nedLen; i++) {
    if (haystack[i] !== needle[0]) continue
    if (haystack.substr(i, nedLen) === needle) return i
  }
  return -1
}
/**
 * 方法二：双层循环对比字符
 * 1. 如果haystack循环到首尾字符和needle一直，则进入needle循环
 * 2. 判断每个字符是否相等
 */
function strStr2(haystack, needle) {
  const hayLen = haystack.length,
    nedLen = needle.length
  if (!nedLen) return 0
  if (nedLen > haystack) return -1
  if (nedLen === hayLen) return haystack === needle ? 0 : -1
  for (let i = 0; i <= hayLen - nedLen; i++) {
    if (haystack[i] === needle[0] && haystack[i + nedLen - 1] === needle[nedLen - 1]) {
      if (nedLen === 1) return i
      for (let j = 0; j < nedLen; j++) {
        if (haystack[i + j] !== needle[j]) break
        if (j === nedLen - 1) return i
      }
    }
  }
  return -1
}



const haystack = 'hello world', needle = 'll'
console.log(strStr2(haystack, needle));
