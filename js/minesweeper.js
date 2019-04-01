const ms = {
  grid: [],

  minesLeft: 0,
  safeLeft: 0,

  createGrid: function(c, r, m){
    this.grid = [];
    this.safeLeft = (c * r) - m;
    this.minesLeft = m;

    for ( let i = 0; i < c; i++ ){
      this.grid.push([]);
      for ( let j = 0; j < r; j++ ){
        this.grid[i].push('0');
      };
    };

    for (let i = 0; i < m; i++){

      let minePlaced = false;
      while( !minePlaced ){

        const rColumn = Math.floor(Math.random() * c);
        const rRow = Math.floor(Math.random() * r);

        if( this.grid[rColumn][rRow] === '0' ){
          this.grid[rColumn][rRow] = 'm';
          minePlaced = true;
        };
      };
    };

    for ( let i = 0; i < c; i++ ){

      for ( let j = 0; j < r; j++ ){

        if ( this.grid[i][j] !== 'm'){
          let count = 0;

          for ( let x = i - 1; x <= i + 1; x++){

            for( let y = j - 1; y <= j + 1; y++){

              if( x >= 0 && y >= 0 && x < c && y < r){

                if(!(x === i && y === i)){

                  if(this.grid[x][y] === 'm'){

                    count++;
                  }
                }
              }
            }
          }
          this.grid[i][j] = count.toString();

        }
      }
    };

  },

  checkSquare: function(c, r){
    if ( grid[c][r] === '0' ){
      this.safeLeft --;

      for ( let x = i - 1; x <= c + 1; x++){

        for( let y = j - 1; y <= r + 1; y++){

          if(!(x === c && y === r)){

            this.checkSquare(x, y);

          }

        }

      }

    }else if(grid[c][r] === 'm'){

      this.youLose();

    }else{

      this.safeLeft --;
      
    }

    this.revealSquare(c, r);
  },

  revealSquare: function(c, r){
    //TODO visually reveal the Square in css/html
  },

  placeFlag: function(c, r){
    //TODO place flag
  },

  youLose: function(){
    //TODO win lose effects
  },

  checkVictory: function(){
    if (safeLeft === 0){
      this.youWin();
    };
  },

  youWin: function(){

  }
}
