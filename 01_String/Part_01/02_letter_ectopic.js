/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:15:52
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:16:14
 * @Email        : tongzonghua@360.cn
 * @Description  : 有效的字母异位词
 * @FilePath     : /algorithm-101/String/Part_01/letter_ectopic.js
 */
/**
 * 判断给定的两个字符串，是否只是变动了某个字符的位置
 */
// 方法一 利用数组sort
function isAnagram1(s, t) {
  const sortFn = s => s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')
  return sortFn(s) === sortFn(t)
}

// 方法二 计数累加
function isAnagram2(s, t) {
  if (s.length !== t.length) return false

  const hash = {}
  for (const k of s) {
    hash[k] = hash[k] || 0
    hash[k] += 1
  }
  for (const k of t) {
    if (!hash[k]) return false
    hash[k] -= 1
  }
  return true
}

const s = "anagram", t = "nagaram"
// console.log(isAnagram1(s, t));
console.log(isAnagram2(s, t));
