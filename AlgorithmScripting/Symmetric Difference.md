[题目：创建一个函数，接受两个或多个数组，返回所给数组的对等差分数组.](https://www.freecodecamp.com/challenges/symmetric-difference)
##### 思路：
1. 对传进来的所有数组去重（保持每个元素只出现一次）；
2. 两两合并数组； 
3. 在合并得到的数组中，删除所有重复部分。
```
function sym() {
  var arr = [];
  for(var i = 0; i < arguments.length; i++){
    arr[i] = arguments[i];
    arr[i] = del(arr[i]);
    
}
  var res = arr.reduce(function(a, b){
    a = unique(a.concat(b));
    return a;
  });
  return res;
}

function del(array){ //去重
  var res = [];
  for(var i = 0; i < array.length; i++){
    if(res.indexOf(array[i]) == -1){
      res.push(array[i]);
    }
  }
  return res;
}

function unique(array){ //删除全部重复部分
  array.sort();
  var res = [];
  
  var index = 0, i = 0;
  while(i < array.length){
   var temp = array[i];
   index = array.lastIndexOf(temp);
   if(index == i){
     i = i + 1;
     res.push(temp);
   }else{
     i = index + 1;
   }
  }
  return res;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

```
