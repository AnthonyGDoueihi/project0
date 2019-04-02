const render = function(){

  for ( let i = 0; i < 3; i++ ){
    for( let j = 0; j < 3; j++){

      if(ttt.board[i][j] === 'O'){
        $( `#id${i}${j}` ).html(`<img class='move' src="images/naught.png" alt="Naught">`);

      }else if(ttt.board[i][j] === 'X'){
        $( `#id${i}${j}` ).html(`<img class='move' src="images/cross.png" alt="Cross">`);

      }else{
        $( `#id${i}${j}` ).html(``);
      }
    }
  }

  let wordsToSay = "";
  if(ttt.victor === -1){
    if(ttt.turn === 0){
        wordsToSay += "Player One's Turn ";
      }else{
        wordsToSay += "Player Two's Turn ";
      }
    }else if(ttt.victor === 0){
      wordsToSay += "Player One Wins ";
    }else if(ttt.victor === 1){
      wordsToSay += "Player Two Wins ";
    }else if(ttt.victor === 3){
      wordsToSay += "A Tie ";
    }

  $('p.help').html(wordsToSay);
}

$(document).ready(function(){
  $( '#id00' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(0, 0);
    }
  });

  $( '#id10' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(1, 0);
    }
  });

  $( '#id20' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(2, 0);
    }
  });

  $( '#id01' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(0, 1);
    }
  });

  $( '#id11' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(1, 1);
    }
  });

  $( '#id21' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(2, 1);
    }
  });

  $( '#id02' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(0, 2);
    }
  });

  $( '#id12' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(1, 2);
    }
  });

  $( '#id22' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(2, 2);
    }
  });

  $( '#newGame' ).on( 'click', function(){
    ttt.newGame($( '#game-select' ).val());
  });

  ttt.newGame();

})
