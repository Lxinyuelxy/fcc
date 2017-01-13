[题目：遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。](https://www.freecodecamp.com/challenges/wherefore-art-thou)
```
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var index = 0;
  var key = Object.keys(source);
  
  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < key.length; j++){
      if(collection[i].hasOwnProperty(key[j]) && collection[i][key[j]] == source[key[j]]);
      else break;   
    }
    if(j == key.length){
      arr[index] = collection[i];
      index++;
    }
    //else break;    
  }
  
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```
