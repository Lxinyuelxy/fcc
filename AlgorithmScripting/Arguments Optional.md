[题目：创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。](https://www.freecodecamp.com/challenges/arguments-optional)
```
function add() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        var x = arguments[0];
        return function(y) {
            if (typeof y === 'number') return x + y;
        };
    } else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number')
        return arguments[0] + arguments[1];
}

var add2 = add(2);
add2(3);

```
