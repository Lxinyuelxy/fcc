var player = {
    role : ''
};
var comp = {
    role : ''
};
var game = {
    alive : true,
  //  gameOver : false
};
var IDList = {
    'top-left' : 0,
    'top-middle' : 1,
    'top-right' : 2,
    'center-left' : 3,
    'center-middle' : 4,
    'center-right' : 5,
    'bottom-left' : 6,
    'bottom-middle' : 7,
    'bottom-right' : 8
}
$(document).ready(function(){
    setTimeout(showGameResult(), 5000);
    choosePlayerRole();    
});

function choosePlayerRole(){
    $('#iconModal').modal({
        show: true,
        backdrop: true,
        keyboard: false
    });
    $('#leftButton').click(() => {
        player.role = 'x';
        comp.role = 'o';
        initGame();
        startGame();;
    });
    $('#rightButton').click(() => {
        player.role = 'o';
        comp.role = 'x';
        initGame();
        startGame();
    });
}

function initGame(){
    const ID = ['top-left', 'top-middle', 'top-right',
                'center-left', 'center-middle', 'center-right',
                'bottom-left', 'bottom-middle', 'bottom-right'];
    game.cell = [];
    for(let i = 0; i < 9; i++){
        game.cell[i] = {
            status: 'none',
            strID: '#' + ID[i]
        }
    }
   // game.alive = true;
}

function startGame(){
    let randNum = generateRandNum();
    game.cell[randNum].status = 'comp';
    let id = game.cell[randNum].strID;
    $(id).append('<h1>' + comp.role + '</h1>');
}

$('.col-xs-4').click(function(){ //player's turn
    if(game.alive){
        let index = IDList[$(this).attr('id')];
        if(game.cell[index].status === 'none'){
             $(this).append('<h1>' + player.role + '</h1>');
             game.cell[index].status = 'player';
             compTurn();
             if(checkOver()){
                setTimeout(showGameResult(), 5000);
          
             }
        }else{
            alert('请重新选择！');
        }
    }
});

function compTurn(){
    let index = generateRandNum();
    
    while(game.cell[index].status !== 'none'){
        index = generateRandNum();     
    }
    game.cell[index].status = 'comp';
    let id = game.cell[index].strID;
    $(id).append('<h1>' + comp.role + '</h1>');
    console.log('compTurn!!');
}

function checkOver(){
    const caseOfWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < caseOfWin.length; i++){
        for(var j = 0; j < caseOfWin[i].length; j++){
            let index = caseOfWin[i][j];
            if(game.cell[index].status !=='comp') break;
        }
        if(j === caseOfWin[i].length){
            game.alive = false;
            return true;
        }
    }
    return false; 
}

function showGameResult(){
    alert('you lose!');
}

function generateRandNum(){
    let randNum = Math.floor(Math.random() * game.cell.length)
    console.log('randNum = '+randNum);
    return randNum;
}