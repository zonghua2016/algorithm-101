/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:20:35
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:20:43
 * @Email        : tongzonghua@360.cn
 * @Description  : 最长公共前缀
 * @FilePath     : /algorithm-101/String/Part_03/03_longest_common_prefix.js
 */
/**
 * 方法一：递归
 * 1. 查找前 n-1个字符串的最长公共前缀 m
 * 2. 查找 m 与最后一个字符串的公共前缀
 */
function longestCommonPrefix(strs) {
  function findCommonPrefix(a, b) {
    let i = 0
    while (i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
      i++
    }
    return i > 0 ? a.substring(0, i) : ''
  }
  
  if (strs.length > 0) {
    let commonPrefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
      commonPrefix = findCommonPrefix(commonPrefix, strs[i])
    }
    return commonPrefix
  }
  return ''
}

/**
 * 方法二：循环迭代
 */
function longestCommonPrefix2(strs) {
  if (strs.length === 0) return ''

  let i = 0,
    flag = true
  while (flag) {
    if (strs[0].length > i) {
      const char = strs[0].charAt(i)
      for (let j = 1; j < strs.length; j++) {
        if (strs[j].length <= i || strs[j].charAt(i) !== char) {
          flag = false
          break
        }
      }
    } else {
      flag = false
    }
    i++
  }
  return strs[0].substring(0, i - 1)
}


console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
