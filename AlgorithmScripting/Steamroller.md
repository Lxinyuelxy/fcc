[题目：对嵌套的数组进行扁平化处理。](https://www.freecodecamp.com/challenges/steamroller)
```
function steamroller(arr) {
  var res = [];
  for(var i = 0; i < arr.length; i++){
    judge(arr[i], res);
  }
  return res;
}

function judge(unknown, res){
  if(Array.isArray(unknown)){
    for(var i = 0; i < unknown.length;i++){
      judge(unknown[i],res);
    }
  }else{
    res.push(unknown);
  }
}

steamroller([1, [2], [3, [[4]]]]) ;
```
