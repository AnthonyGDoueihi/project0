const $firstRender = function(){
  //renders only once at the start of a new game. Creates the visual board
  const $grid = $('.grid');
  $grid.empty();

  $grid.css('grid-template-columns', `repeat (${tofe.grid.length}, 1fr)`);
  $grid.css('grid-template-rows', `repeat (${tofe.grid[0].length}, 1fr)`);


  for ( let i = 0; i < tofe.grid.length; i++ ){
    for ( let j = 0; j < tofe.grid[0].length; j++ ){

      $grid.append(`<div class="square" id="r${i}c${j}"></div>`);
      const $square = $(`#r${i}c${j}`);
      $square.append(`<p>${tofe.grid[j][i]}</p>`);
      $square.css('grid-column',`${i + 1}/${i + 1}`).css('grid-row', `${j + 1}/${j + 1}`).css('min-width', '1em').css('min-height', '1em');
    };
  };

  $render();

}

const $render = function(){
  for ( let i = 0; i < tofe.grid.length; i++ ){
    for ( let j = 0; j < tofe.grid[0].length; j++ ){
      $(`#r${i}c${j}`).children('p').html(tofe.grid[j][i]);
    };
  };
}

$(document).ready(function(){


  $( '#newGame' ).on( 'click', function(){

  });

  $firstRender();
})

$(document).keydown(function(e){
  if (e.which == 37) {
    e.preventDefault();
     tofe.swipeLeft();
     return;
  }
  if (e.which == 38) {
    e.preventDefault();
     tofe.swipeUp();
     return;
  }
  if (e.which == 39) {
    e.preventDefault();
     tofe.swipeRight();
     return;
  }
  if (e.which == 40) {
    e.preventDefault();
     tofe.swipeDown();
     return;
  }

});
