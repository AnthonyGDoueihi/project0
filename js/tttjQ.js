let oIcon = 'images/naught.png';
let xIcon = 'images/cross.png';

const $render = function(){

  for ( let i = 0; i < 9; i++ ){

    $('.oMove').on( 'error', function(){
      oIcon = 'images/naught.png';
      $render();
      return;
    })

    $('.xMove').on( 'error', function(){
      xIcon = 'images/cross.png';
      $render();
      return;
    })

    if(ttt.board[i] === 'O'){
      $( `#id${i}` ).html(`<img class='oMove' src="${oIcon}" alt="Naught">`);

    }else if(ttt.board[i] === 'X'){
      $( `#id${i}` ).html(`<img class='xMove' src="${xIcon}" alt="Cross">`);

    }else{
      $( `#id${i}` ).html(``);

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
  $('#reload-img').on( 'click', function(){

    xIcon = $('#x-img').val();
    oIcon = $('#o-img').val();
  });


  $( '#id0' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(0);
    }
  });

  $( '#id1' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(1);
    }
  });

  $( '#id2' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(2);
    }
  });

  $( '#id3' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(3);
    }
  });

  $( '#id4' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(4);
    }
  });

  $( '#id5' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(5);
    }
  });

  $( '#id6' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(6);
    }
  });

  $( '#id7' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(7);
    }
  });

  $( '#id8' ).on( 'click', function(){
    if(ttt.playerTurn){
      ttt.playerMakeMove(8);
    }
  });

  $( '#newGame' ).on( 'click', function(){
    ttt.newGame($( '#game-select' ).val());
  });

  ttt.newGame('vsLocal');

})
