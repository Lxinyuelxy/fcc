[题目：求小于等于给定数值的质数之和。](https://www.freecodecamp.com/challenges/sum-all-primes#?solution=%0A)
```
function sumPrimes(num) {
  if(num == 2) return 2;
  if(num == 3 || num == 4) return 5;
  var sum = 5;
  for(var i = 5; i <= num;){
    if(isPrimeNumber(i)){
      sum = sum + i;
      i = i + 2;    //除了2和3，没有质数会相邻出现了吧？
    }else{
      i = i + 1;
    }
    
  }
  return sum;
}

function isPrimeNumber(number){
  var temp = parseInt( Math.sqrt(number)+1 );
  for(var i = 2; i < temp; i++){
    if(number % i === 0)
      return false;
  }
  return true;
}

sumPrimes(10);
```
