var inputStr = '';
var numStr = '';

$(document).ready(function(){
  $('button').click(function() {
      inputStr += $(this).val();
      showInput(inputStr);

      if(isNumber($(this).val())){
          numStr += $(this).val();
          showNumber(numStr);
          console.log(numStr);
      }
      if(isOperationSign($(this).val())){
          numStr = '';
          showNumber(0);

      }
      if(isEqualSign($(this).val())){
          inputStr = inputStr.slice(0, inputStr.length - 1);
          var res = eval(inputStr);
          res = res.toFixed(10);
          console.log(typeof res);
          console.log("res = " + res);
          showNumber(res);
          inputStr = '';
      }
      if($(this).val() === 'ac'){
          inputStr = '';
          numStr = '';
          showNumber('0');
          showInput('0');
      }
  });
});

function showInput(inputStr){
    $('#history').text(inputStr);
}

function showNumber(numStr){
    $('#answer').text(numStr);
}

function isNumber(value){
    return value >= 0 && value <= 9;
}

function isOperationSign(value){
    return value === '+' || value === '-' || value === '*' || value === '/';
}

function isEqualSign(value){
    return value === '=';
}


