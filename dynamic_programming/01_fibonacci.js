// Fibonacci using caching

function fibonacci() {
  const cache = {};
  return function calculateFib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      const result = calculateFib(n - 1) + calculateFib(n - 2);
      cache[n] = result;
      return result;
    }
  };
}

function calculateFibNoCache(n) {
  if (n < 2) {
    return n;
  }
  return calculateFibNoCache(n - 1) + calculateFibNoCache(n - 2);
}

console.time("fibb");
console.log(calculateFibNoCache(50));
console.timeEnd("fibb");

/**
 * input: 50
 * output: 12586269025
 * time: 2m 24s
 *
 * console output:
 * 12586269025
 * fibb: 2:24.366 (m:ss.mmm)
 */

const fib = fibonacci();

console.time("fibbCache");
console.log(fib(50));
console.timeEnd("fibbCache");

/**
 * input: 50
 * output: 12586269025
 * time: 2m 24s
 *
 * console output:
 * 12586269025
 * fibbCache: 0.737ms
 */
