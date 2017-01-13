[题目：返回小于或等于num的斐波纳契奇数之和](https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers)
```
function sumFibs(num) {
  var arr = [];
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 2;
  if(num == 1){
    return 2;
  }
  
  var sum = 2;
  var i = 2;
  while(arr[i] <= num){
    if(arr[i] % 2 == 1){
        sum = sum + arr[i];
      }
    i++;
    arr[i] = arr[i-1] + arr[i-2];
  }
  
  return sum;
}

sumFibs(5);
```
