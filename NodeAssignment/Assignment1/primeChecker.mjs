// primeChecker.mjs

/*
export function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  */

  //You must use i <= Math.sqrt(n) to make sure perfect square numbers like 49, 121, 169, etc. are correctly identified as non-prime.
export function isPrime(n){
    if (n <= 1) return false;
   
  
    for (let i = 2; i <= Math.sqrt(n); i ++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  //using es6 module u can also export as may functions as u want 
export function isPositive(n) {
    return n > 0;
  }

 // export { isPrime, isPositive };