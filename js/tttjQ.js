let oIcon = 'images/naught.png';
let xIcon = 'images/cross.png';

const $render = function(){

//loop through the board to render the move images
  for ( let i = 0; i < 9; i++ ){
    //If image load has error, fix link and rerender
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

  //If the game is over print the result, if not print whose turn it is
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

  //loop through positions and create event listeners
  for ( let i = 0; i < 9; i++ ){
    $( `#id${i}`).on( 'click', function(){

      if( ttt.playerTurn ){
        ttt.playerMakeMove(i);
      }
    })
  }

  $( '#newGame' ).on( 'click', function(){
    ttt.newGame($( '#game-select' ).val());
  });

  //default first load
  ttt.newGame('vsLocal');

})
