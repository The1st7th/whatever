function Player(name) {
  this.name = name;
  this.position = [];
  Player.allplayers.push(this);
}

Player.allplayers = [];

var player = "X";
//var playerX=[];
//var playerO=[];
var check;
var playerX = new Player("X");
var playerO = new Player("O");
console.log(playerX);
console.log(playerO);
var results=[[1,2,3],[4,5,6],[7,8,9],[2,5,8],[1,4,7],[3,5,7],[1,5,9],[3,6,9]];

function winner(playerW){
  console.log(playerW);
for (var i = 0; i < results.length; i++){
  if(playerW.position[0] == results[i][0]){

    for (var j = 0; j < playerW.position.length;j++){
      if ( playerW.position[j]== results[i][1]){


        for (var j = 0; j < playerW.position.length;j++){
          if ( playerW.position[j] == results[i][2] ){
            $(".playerTurn").text("it is the player "+ playerW.name +" won");
            check = true;

      }
    }
  }
}
}
}
}

function play(box){
  check = false
  if (box.innerHTML == ""){
  if (player === "X"){
  box.innerHTML = player;


  playerX.position.push(parseInt(box.id));
  playerX.position.sort(function(a, b){return a - b});
  console.log("playerX "+ playerX.position);

winner(playerX);
if( check == false){
player = playerO.name;
$(".playerTurn").text("it is the player "+ player+" turn");
}else{
  return;
}


}
 else if (player === "O"){
box.innerHTML = player;


playerO.position.push(parseInt(box.id));
playerO.position.sort(function(a, b){return a - b});
console.log("playerO "+ playerO.position);

winner(playerO);
if(check == false){
player = playerX.name;
$(".playerTurn").text("it is the player "+player+" turn");
}else{
  return;
}

}
}
else {
alert("not allowed to replace a box");
}
}

//''|| player[0]== 4 ||player[0] == 7||player[0] == 2 ||player[0] ==3
