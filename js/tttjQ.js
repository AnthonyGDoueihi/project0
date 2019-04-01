const render = function(){

  for ( let i = 0; i < 3; i++ ){
    for( let j = 0; j < 3; j++){

      if(ttt.board[i][j] === 'O'){
        $( `#${i}${j}` ).html(`<img class='move' src="images/naught.png" alt="Naught">`);

      }else if(ttt.board[i][j] === 'X'){
        $( `#${i}${j}` ).html(`<img class='move' src="images/cross.png" alt="Cross">`);

      }else{
        $( `#${i}${j}` ).html(``);
      }
    }
  }

  let wordsToSay = "";

  if(ttt.turn === 0){
      wordsToSay += "Player One's Turn ";
  }else{
    wordsToSay += "Player Two's Turn ";
  }

  $('p.help').html(wordsToSay);
}

$(document).ready(function(){
  $( '#00' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(0, 0);
      render();
    }
  });

  $( '#10' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(1, 0);
      render();
    }
  });

  $( '#20' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(2, 0);
      render();
    }
  });

  $( '#01' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(0, 1);
      render();
    }
  });

  $( '#11' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(1, 1);
      render();
    }
  });

  $( '#21' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(2, 1);
      render();
    }
  });

  $( '#02' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(0, 2);
      render();
    }
  });

  $( '#12' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(1, 2);
      render();
    }
  });

  $( '#22' ).on( 'click', function(){
    if(playerTurn){
      ttt.playerMakeMove(2, 2);
      render();
    }
  });

})
