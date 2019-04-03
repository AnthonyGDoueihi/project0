const render = function(){

  for ( let i = 0; i < 9; i++ ){

    if(ttt.board[i] === 'O'){
      $( `#id${i + 1}` ).html(`<img class='move' src="images/naught.png" alt="Naught">`);

    }else if(ttt.board[i] === 'X'){
      $( `#id${i + 1}` ).html(`<img class='move' src="images/cross.png" alt="Cross">`);

    }else{
      $( `#id${i + 1}` ).html(``);

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
  $( '#id1' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(0);
    }
  });

  $( '#id2' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(1);
    }
  });

  $( '#id3' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(2);
    }
  });

  $( '#id4' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(3);
    }
  });

  $( '#id5' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(4);
    }
  });

  $( '#id6' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(5);
    }
  });

  $( '#id7' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(6);
    }
  });

  $( '#id8' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(7);
    }
  });

  $( '#id9' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(8);
    }
  });

  $( '#newGame' ).on( 'click', function(){
    ttt.newGame($( '#game-select' ).val());
  });

  ttt.newGame();

})
