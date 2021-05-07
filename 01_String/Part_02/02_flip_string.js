/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:17:44
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:17:52
 * @Email        : tongzonghua@360.cn
 * @Description  : 反转字符串
 * @FilePath     : /algorithm-101/String/Part_02/02_flip_string.js
 */
/**
 * 将输入的字符串反转过来
 */
// 方法一 首尾替换法(ES6语法)
function reverseString(s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
  return s
}

// 中间变量首尾替换法
function reverseString2(s) {
  for (let i = 0; i < s.length / 2; i++) {
    // 使用中间变量临时保存 s[i]
    const temp = s[i];
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = temp
  }
  return s
}

console.log(`${["h", "e", "l", "l", "o"]}==>${reverseString2(["h", "e", "l", "l", "o"])}`);
