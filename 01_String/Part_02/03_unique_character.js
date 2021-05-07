/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:18:35
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:18:35
 * @Email        : tongzonghua@360.cn
 * @Description  : 字符串中的第一个唯一字符
 * @FilePath     : /algorithm-101/String/Part_02/03_unique_character.js
 */
/**
 * 找到并返回给定字符串中第一个不重复的字符，不存在，则返回-1
 */
// 方法一 库函数
// 如果某个字符从头开始的索引和从尾开始的索引相等，就说明这个字符只出现一次
function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
}

// 方法二 哈希
// 遍历两次，第一次遍历，用一个哈希对象保存所有字符出现的次数；
// 第二次遍历，找出哈希对象中只出现一次的字符的下标
function firstUniqChar2(s) {
  const hash = {}
  for (const k of s) {
    // 如果hash[k]不存在，则置为0，同时+1
    hash[k] = hash[k] || 0
    hash[k] += 1
  }
  // for (let i = 0; i < s.length; i++) {
  //   hash[s[i]] = hash[s[i]] || 0
  //   hash[s[i]] += 1
  // }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i
  }
  return -1
}



console.log(`loveleetcode==>${firstUniqChar2('loveleetcode')}`);
