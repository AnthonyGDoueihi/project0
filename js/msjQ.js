const firstRender = function(){
  $('.game').empty();

  for ( let i = 0; i < ms.revealedGrid.length; i++ ){

    $('.game').append(`<div class="row" id="${i}"></div>`);

    const $row = $(`.game div#${i}`);

    for ( let j = 0; j < ms.revealedGrid[0].length; j++ ){
      // $row.append(`<div class="hidden" id-"${i}${j}"><img src="images/cell.png"></div>`);
      $row.append(`<div class="hidden square" id="${i}${j}"></div>`);

      $( `#${i}${j}` ).on('click', function(){

        ms.checkSquare(i, j);

      });

      $( `#${i}${j}` ).on('contextmenu', function(){

        ms.placeFlag(i, j);

      });

    };
  };

}

const revealSquare = function(c, r){
  const $square = $( `#${c}${r}` );
  $square.removeClass('hidden');

  if( ms.grid[c][r] === '0'){
    $square.addClass('zero');

  } else if( ms.grid[c][r] === '1'){
    $square.addClass('one');

  } else if( ms.grid[c][r] === '2'){
    $square.addClass('two');

  } else if( ms.grid[c][r] === '3'){
    $square.addClass('three');

  } else if( ms.grid[c][r] === '4'){
    $square.addClass('four');

  } else if( ms.grid[c][r] === '5'){
    $square.addClass('five');

  } else if( ms.grid[c][r] === '6'){
    $square.addClass('six');

  } else if( ms.grid[c][r] === '7'){
    $square.addClass('seven');

  } else if( ms.grid[c][r] === '8'){
    $square.addClass('eight');

  } else if( ms.grid[c][r] === '9'){
    $square.addClass('nine');

  }else if( ms.grid[c][r] === 'm'){
    $square.addClass('explodeMine');

  }
}

const flagSquare = function(c, r){
  const $square = $( `#${c}${r}` );

  if( ms.revealedGrid[c][r] === 'f'){
    $square.removeClass('hidden');
    $square.addClass('flag');
  }else{
    $square.addClass('hidden');
    $square.removeClass('flag');
  }
}

$(document).ready(function(){

  $( '#newGame' ).on( 'click', function(){
    ms.newGame($( '#game-select' ).val());
  });

  ms.newGame('small');

})
