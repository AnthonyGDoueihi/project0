const tofe = {
  grid: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],

  swipeRight: function(){
    for ( let x = 0; x < this.grid.length; x++){
      for ( let y = this.grid[0].length - 2; y >= 0; y--){
        this.checkRight(x, y);
      }
    }

    this.randomSquare();
    $render();
  },

  checkRight: function(x, y){
    if( y + 1 < this.grid.length ){
      if( this.grid[x][y + 1] === this.grid[x][y] ){
        this.grid[x][y + 1] *= 2;
        this.grid[x][y] = 0;
      } else if ( this.grid[x][y + 1] === 0 ){
        this.grid[x][y + 1] = this.grid[x][y];
        this.grid[x][y] = 0;
        this.checkRight(x, y + 1);
      }
    }
  },

  swipeLeft: function(){
    for ( let x = 0; x < this.grid.length; x++){
      for ( let y = 1; y < this.grid[0].length; y++){
        this.checkLeft(x, y);
      }
    }

    this.randomSquare();
    $render();
  },

  checkLeft: function(x, y){
    if( y - 1 >= 0 ){
      if( this.grid[x][y - 1] === this.grid[x][y] ){
        this.grid[x][y - 1] *= 2;
        this.grid[x][y] = 0;
      } else if ( this.grid[x][y - 1] === 0 ){
        this.grid[x][y - 1] = this.grid[x][y];
        this.grid[x][y] = 0;
        this.checkLeft(x, y - 1);
      }
    }
  },

  swipeUp: function(){
    for ( let y = 0; y < this.grid[0].length; y++ ){
      for ( let x = 1; x < this.grid.length; x++ ){
        this.checkUp(x, y);
      }
    }

    this.randomSquare();
    $render();
  },

  checkUp: function(x, y){
    if( x - 1 >= 0 ){
      if( this.grid[x - 1][y] === this.grid[x][y] ){
        this.grid[x - 1][y] *= 2;
        this.grid[x][y] = 0;
      } else if ( this.grid[x - 1][y] === 0 ){
        this.grid[x - 1][y] = this.grid[x][y];
        this.grid[x][y] = 0;
        this.checkUp(x - 1, y);
      }
    }
  },

  swipeDown: function(){
    for ( let y = 0; y < this.grid[0].length; y++) {
      for ( let x = this.grid.length - 2; x >= 0; x-- ){
        this.checkDown(x, y);
      }
    }

    this.randomSquare();
    $render();
  },

  checkDown: function(x, y){
    if( x + 1 < this.grid[0].length ){
      if( this.grid[x + 1][y] === this.grid[x][y] ){
        this.grid[x + 1][y] *= 2;
        this.grid[x][y] = 0;
      } else if ( this.grid[x + 1][y] === 0 ){
        this.grid[x + 1][y] = this.grid[x][y];
        this.grid[x][y] = 0;
        this.checkDown(x + 1, y);
      }
    }
  },

  randomSquare: function(){
    let placed = false;
    while (!placed){
      const randX = Math.floor(Math.random() * this.grid.length);
      const randY = Math.floor(Math.random() * this.grid[0].length);

      if(this.grid[randX][randY] === 0){
        this.grid[randX][randY] = 2;
        placed = true;
      }
    }
  },

}
