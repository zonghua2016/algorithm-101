/*
 * @Author       : tongzonghua
 * @Date         : 2021-05-07 12:25:24
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2021-05-07 12:25:25
 * @Email        : tongzonghua@360.cn
 * @Description  : 质数
 * @FilePath     : /algorithm-101/02_Math/Part_01/03_prime.js
 */
function isPrime(n) {

  if (n === 2 || n === 3) return true

  if (n % 6 !== 1 && n % 6 !== 5) return false

  const sqrtN = Math.sqrt(n)
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false
  }

  return true
}

console.log(isPrime(34));

/**
 * 方法二：埃拉托斯特尼筛法
 */