/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:21:38
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-08 15:51:04
 * @Email        : tongzonghua@360.cn
 * @Description  : 最长回文子串
 * @FilePath     : /algorithm-101/01_String/Part_03/04_longest_palindrome_substring.js
 */
/**
 * 方法一：动态规划法
 * 动态规划的思想，是希望把问题划分成相关联的子问题；然后从最基本的子问题触发来推到较大的子问题，直到所有的子问题都解决
 */



/**
 * 方法二：中心扩展
 */
function longestPalindrome(s) {
  if (s == null || s.length < 1) return ''
  let start = 0, end = 0
  const expandFromCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromCenter(s, i, i)
    const len2 = expandFromCenter(s, i, i + 1)
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.substring(start, end + 1)
}

console.log(longestPalindrome("babad"));
