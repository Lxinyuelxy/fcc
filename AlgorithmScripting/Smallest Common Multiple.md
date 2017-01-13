[题目：找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。](https://www.freecodecamp.com/challenges/smallest-common-multiple)
```
function smallestCommons(arr) {
  if(arr[0] > arr[1]){
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  
  var result = arr[0];
  for(var i = arr[0] + 1; i <= arr[1]; i++){
    result = LCM(result, i);
  }
  return result;
}

function LCM(num1, num2){
  var product = num1 * num2;
  if(num1 > num2){
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }
  var num3;
  while(num2 !== 0){
    num3 = num1 %num2;
    num1 = num2;
    num2 = num3;   
  }
  return product/num1;
}

```
