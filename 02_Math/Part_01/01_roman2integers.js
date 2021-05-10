/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:24:36
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:24:37
 * @Email        : tongzonghua@360.cn
 * @Description  : 罗马数字转整数
 * @FilePath     : /algorithm-101/02_Math/Part_01/01_roman2integers.js
 */
/**
 * 罗马数字：I， V， X， L， C， D 和  M
 * 对应：1，5，10，50，100，500，1000
 * 
 * I 可以放在 V(5) 和 X(10) 的左边，来表示 4 和 9
 * X 可以放在 L(50) 和 C(100) 的左边，来表示 40 和90
 * C 可以放在 D(500) 和 M(1000) 的左边，来表示 400 和 900
 */
function romanToIntOne(num) {
  const roman = {
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900
  },
    list = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
  let res = 0
  // 先遍历特殊值
  for (const key in roman) {
    console.log(222, key);

    if (num.includes(key)) {
      const reg = new RegExp(key)
      num = num.replace(reg, '')
      res += roman[key]
    }
  }
  for (const i of num) {
    res += list[i]
  }
  return res
}

/**
 * 方法二：switch + includes
 * 先遍历累加所有罗马数字
 * 再处理特殊数字
 */
function romanToIntOne2(num) {
  let res = 0
  for (const c of num) {
    switch (c) {
      case 'I':
        res += 1;
        break;
      case 'V':
        res += 5;
        break;
      case 'X':
        res += 10;
        break;
      case 'L':
        res += 50;
        break;
      case 'C':
        res += 100;
        break;
      case 'D':
        res += 500;
        break;
      case 'M':
        res += 1000;
        break;
    }
  }
  // 处理特殊组合
  if (/IV|IX/g.test(num)) res -= 2
  if (/XL|XC/g.test(num)) res -= 20
  if (/CD|CM/g.test(num)) res -= 200
  return res
}

console.log(romanToIntOne2("MCMXCIV"));