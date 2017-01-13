[题目：将给定的数字转换成罗马数字](https://freecodecamp.cn/challenges/roman-numeral-converter#?solution=function%20convert(num)%20%7B%0A%20%20var%20len%20%3D%20String(num).length%3B%0A%20%20var%20arr%20%3D%20%5B%5D%3B%0A%20%20var%20result%20%3D%20%5B%5D%3B%0A%20%20var%20index%20%3D%200%3B%0A%20%20while(len%3E0)%7B%0A%20%20%20%20var%20temp%20%3D%20Math.pow(10%2Clen-1)%3B%0A%20%20%20%20arr%5Bindex%5D%20%3D%20parseInt(num%2Ftemp)*temp%3B%0A%20%20%20%20num%20%3D%20num%20-%20arr%5Bindex%5D%3B%0A%20%20%20%20index%2B%2B%3B%0A%20%20%20%20len--%3B%0A%20%20%7D%0A%0A%20%20for(var%20i%20%3D%200%3Bi%20%3C%20arr.length%3Bi%2B%2B)%7B%0A%20%20%20%20result%5Bi%5D%20%3D%20transform(arr%5Bi%5D)%3B%0A%20%20%7D%0A%20%20%0A%20%20return%20result.join('')%3B%0A%7D%0A%0Afunction%20transform(value)%7B%0A%20%20var%20power%20%3D%20String(value).length%20-%201%3B%0A%20%20var%20size%20%3D%20value%2F(Math.pow(10%2Cpower))%3B%0A%20%20var%20result%3B%0A%20%0A%20%20%0A%20%20if(power%20%3D%3D%3D%200)%7B%0A%20%20%20%20if(size%20%3E%3D%201%20%26%26%20size%20%3C%3D%203)%20result%20%3D%20toRoman(%22I%22%2Cnull%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%204)%20result%20%3D%20toRoman(%22I%22%2C%22V%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3E%3D%205%20%26%26%20size%20%3C%3D%208)%20result%20%3D%20toRoman(%22V%22%2C%22I%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%209)%20result%20%3D%20toRoman(%22I%22%2C%22X%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%2010)%20result%20%3D%20%22X%22%3B%0A%20%20%20%20%0A%20%20%7Delse%20if(power%20%3D%3D%3D%201)%7B%0A%20%20%20%20if(size%20%3E%3D%201%20%26%26%20size%20%3C%3D%203)%20result%20%3D%20toRoman(%22X%22%2Cnull%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%204)%20result%20%3D%20toRoman(%22X%22%2C%22L%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3E%3D%205%20%26%26%20size%20%3C%3D%208)%20result%20%3D%20toRoman(%22L%22%2C%22X%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%209)%20result%20%3D%20toRoman(%22X%22%2C%22C%22%2Csize%2Cpower)%3B%0A%20%20%20%20%0A%20%20%7Delse%20if(power%20%3D%3D%3D%202)%7B%0A%20%20%20%20if(size%20%3E%3D%201%20%26%26%20size%20%3C%3D%203)%20result%20%3D%20toRoman(%22C%22%2Cnull%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%204)%20result%20%3D%20toRoman(%22C%22%2C%22D%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3E%3D%205%20%26%26%20size%20%3C%3D%208)%20result%20%3D%20toRoman(%22D%22%2C%22C%22%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%209)%20result%20%3D%20toRoman(%22C%22%2C%22M%22%2Csize%2Cpower)%3B%0A%20%20%20%20%0A%20%20%7Delse%20if(power%20%3D%3D%3D%203)%7B%0A%20%20%20%20if(size%20%3E%3D%201%20%26%26%20size%20%3C%3D%203)%20result%20%3D%20toRoman(%22M%22%2Cnull%2Csize%2Cpower)%3B%0A%20%20%20%20if(size%20%3D%3D%3D%204)%20result%20%3D%20toRoman(%22M%22%2C%22C%22%2Csize%2Cpower)%3B%0A%20%20%7D%0A%20%20return%20result%3B%0A%7D%0A%0Afunction%20toRoman(target1%2Ctarget2%2Csize%2Cpower)%7B%0A%20%20var%20roman%20%3D%20%5B%5D%3B%0A%20%20if(size%20%3E%3D%205%20%26%26%20size%20%3C%3D%208)%7B%0A%20%20%20%20var%20i%20%3D%205%3B%0A%20%20%20%20roman%5B0%5D%20%3D%20target1%3B%0A%20%20%20%20while(i%20%3C%20size)%7B%0A%20%20%20%20%20%20roman.push(target2)%3B%0A%20%20%20%20%20%20i%2B%2B%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20if(size%20%3D%3D%204%20%7C%7C%20size%20%3D%3D%209)%7B%0A%20%20%20%20roman%5B0%5D%20%3D%20target1%3B%0A%20%20%20%20roman.push(target2)%3B%0A%20%20%7D%0A%20%20%0A%20%20if(size%20%3E%3D%201%20%26%26%20size%20%3C%3D%203%20)%7B%0A%20%20%20%20for(var%20j%20%3D%200%3Bj%20%3C%20size%3Bj%2B%2B)%7B%0A%20%20%20%20%20%20roman.push(target1)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20return%20roman.join('')%3B%0A%20%20%0A%7D%0Aconvert(6)%3B%0A)
```
function convert(num) {
  var len = String(num).length;
  var arr = [];
  var result = [];
  var index = 0;
  while(len>0){
    var temp = Math.pow(10,len-1);
    arr[index] = parseInt(num/temp)*temp;
    num = num - arr[index];
    index++;
    len--;
  }

  for(var i = 0;i < arr.length;i++){
    result[i] = transform(arr[i]);
  }
  
  return result.join('');
}

function transform(value){
  var power = String(value).length - 1;
  var size = value/(Math.pow(10,power));
  var result;
 
  
  if(power === 0){
    if(size >= 1 && size <= 3) result = toRoman("I",null,size,power);
    if(size === 4) result = toRoman("I","V",size,power);
    if(size >= 5 && size <= 8) result = toRoman("V","I",size,power);
    if(size === 9) result = toRoman("I","X",size,power);
    if(size === 10) result = "X";
    
  }else if(power === 1){
    if(size >= 1 && size <= 3) result = toRoman("X",null,size,power);
    if(size === 4) result = toRoman("X","L",size,power);
    if(size >= 5 && size <= 8) result = toRoman("L","X",size,power);
    if(size === 9) result = toRoman("X","C",size,power);
    
  }else if(power === 2){
    if(size >= 1 && size <= 3) result = toRoman("C",null,size,power);
    if(size === 4) result = toRoman("C","D",size,power);
    if(size >= 5 && size <= 8) result = toRoman("D","C",size,power);
    if(size === 9) result = toRoman("C","M",size,power);
    
  }else if(power === 3){
    if(size >= 1 && size <= 3) result = toRoman("M",null,size,power);
    if(size === 4) result = toRoman("M","C",size,power);
  }
  return result;
}

function toRoman(target1,target2,size,power){
  var roman = [];
  if(size >= 5 && size <= 8){
    var i = 5;
    roman[0] = target1;
    while(i < size){
      roman.push(target2);
      i++;
    }
  }
  
  if(size == 4 || size == 9){
    roman[0] = target1;
    roman.push(target2);
  }
  
  if(size >= 1 && size <= 3 ){
    for(var j = 0;j < size;j++){
      roman.push(target1);
    }
  }
  
  return roman.join('');
  
}
convert(6);
```
