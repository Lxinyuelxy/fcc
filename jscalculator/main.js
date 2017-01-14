var inputStr = '';
var numStr = '';

$(document).ready(function(){
  $('button').click(function() {
      if($(this).val() !== 'ce'){
          inputStr += $(this).val();
          showInput(inputStr);
      }
      if(isNumber($(this).val())){
          numStr += $(this).val();
          showNumber(numStr);
      }
      if(isOperationSign($(this).val())){
          numStr = '';
      }
      if(isEqualSign($(this).val())){
          inputStr = inputStr.slice(0, inputStr.length - 1);
          var res = eval(inputStr);
          if(confirmDigits(res) > 10){
              res = res.toFixed(10);
          }
          showNumber(res);
          inputStr = '';
          numStr = '';
      }
      if($(this).val() === 'ac'){
          inputStr = '';
          numStr = '';
          showNumber('0');
          showInput('0');
      }
      if($(this).val() === 'ce'){
         while( isNumber(inputStr[inputStr.length-1]) ){
              inputStr = inputStr.slice(0, -1);
         }
          numStr = '';
          showNumber('0');
          showInput(inputStr);
      }
  });
});

function showInput(inputStr){
    $('#history').text(inputStr);
}

function showNumber(numStr){
    $('#answer').text(numStr);
}

function confirmDigits(res){
    if(res.toString().split(".")[1] === undefined){
        return 0;
    }
    else{
        return res.toString().split(".")[1].length;
    }
    
}

function isNumber(value){
    return value >= 0 && value <= 9 || value === '.';
}

function isOperationSign(value){
    return value === '+' || value === '-' || value === '*' || value === '/';
}

function isEqualSign(value){
    return value === '=';
}


