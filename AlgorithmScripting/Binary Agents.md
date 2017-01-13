[题目：传入二进制字符串，翻译成英语句子并返回。](https://www.freecodecamp.com/challenges/binary-agents)
```
function binaryAgent(str) {
  var i = 0;
  var res = '';
  while(i < str.length){
    var temp_str = str.slice(i, i+8);
    var ascii_num = parseInt(temp_str, 2);
    res = res + String.fromCharCode(ascii_num);
    i = i + 9;
    
  }
  return res;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

```
