const $firstRender = function(){
  //renders only once at the start of a new game. Creates the visual board
  $('.game').empty();

  for ( let i = 0; i < ms.revealedGrid.length; i++ ){

    $('.game').append(`<div class="row" id="${i}"></div>`);

    const $row = $(`.game div#${i}`);

    for ( let j = 0; j < ms.revealedGrid[0].length; j++ ){

      $row.append(`<div class="hidden square" id="c${i}r${j}"></div>`);

      $( `#c${i}r${j}` ).on('click', function(){
        ms.checkSquare(i, j);

      });

      $( `#c${i}r${j}` ).on('contextmenu', function(event){
        event.preventDefault();
        ms.placeFlag(i, j);

      });

    };
  };
  $infoBarRender();
  $faceRender();
}

const $infoBarRender = function(){
  $('#timer').html(ms.seconds);
  $('#mines').html(ms.flagsLeft);
}

const $revealSquare = function(c, r){
  //takes a square as input and checks what is underneath, replacing the class to change the visual
  const $square = $( `#c${c}r${r}` );
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

const $flagSquare = function(c, r){
  const $square = $( `#c${c}r${r}` );

  if( ms.revealedGrid[c][r] === 'f'){
    $square.removeClass('hidden');
    $square.addClass('flag');
  }else{
    $square.addClass('hidden');
    $square.removeClass('flag');
  }
}

const $faceRender = function(){
  if( ms.victory === 1 ){
    $('#smiley').attr('src', 'images/face-win.png');
  }else if( ms.victory === 0 ){
    $('#smiley').attr('src', 'images/face-dead.png');
  }else{
    $('#smiley').attr('src', 'images/face-norm.png');
  };
}

$(document).ready(function(){

  $( '#newGame' ).on( 'click', function(){
    //restricts row to 35 or it will reach further than the max width
    let r = $('#custom-rows').val();
    if( r > 35 ){
      r = 35;
    }
    ms.newGame($( '#game-select' ).val(), $('#custom-columns').val() , r, $('#custom-mines').val());
  });

  //default first load
  ms.newGame('small');

})
