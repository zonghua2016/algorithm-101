/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:16:54
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:17:01
 * @Email        : tongzonghua@360.cn
 * @Description  : 字符串翻转整数
 * @FilePath     : /algorithm-101/String/Part_01/03_string_flip_array.js
 */

/**
 * 把字符串转成整数
 * 1. 保留正负号
 * 2. 首字符不能转换成整数，则返回0
 */
function atoi(s) {
  // let sNum = s.trim().match(/^(-|\+)?\d+/g)
  // sNum = sNum && Number(s.trim().match(/^(-|\+)?\d+/g)[0])
  // --------- or ----------
  const sNum = parseInt(s)
  if (isNaN(parseInt(sNum))) return 0
  return Math.max(Math.min(sNum, Math.pow(2, 31) - 1), Math.pow(-2, 31))
}

const testList = ['42', '-42', '4193 with words', 'words and 987', '-91283472332']

testList.forEach(item => {
  console.log(`${item} 结果: ${atoi(item)}`);
})