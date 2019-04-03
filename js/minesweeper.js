const ms = {
  grid: [],
  revealedGrid: [],

  minesLeft: 0,
  safeLeft: 0,

  newGame: function(gameType, r = 1 , c = 1, m = 0){
    this.grid = [];
    this.revealedGrid = [];

    this.minesLeft = 0;
    this.safeLeft = 0;

    if( gameType === 'small'){
      this.createGrid(8, 8, 10);
    }else if( gameType === 'medium'){
      this.createGrid(16, 16, 40);
    }else if( gameType === 'large'){
      this.createGrid(24, 24, 99);
    }else if( gameType === 'custom'){
      if(r * c > m){
        this.createGrid(r, c, m);
      }
    }
  },

  createGrid: function(c, r, m){
    this.grid = [];
    this.revealedGrid = [];

    this.safeLeft = (c * r) - m;
    this.minesLeft = m;

    for ( let i = 0; i < c; i++ ){
      this.grid.push([]);
      this.revealedGrid.push([]);
      for ( let j = 0; j < r; j++ ){
        this.grid[i].push('0');
        this.revealedGrid[i].push('0');
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

                if(!(x === i && y === j)){

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
    firstRender();
  },

  checkSquare: function(c, r){
    if( this.revealedGrid[c][r] === 'f' ){
      return;
    }

    if ( this.grid[c][r] === '0' ){
      this.safeLeft --;
      this.revealSquare(c, r);

      for ( let x = c - 1; x <= c + 1; x++){

        for( let y = r - 1; y <= r + 1; y++){

          if( x >= 0 && y >= 0 && x < this.grid.length && y < this.grid[0].length){

            if(this.revealedGrid[x][y] !== '1'){

              if(!(x === c && y === r)){

                this.checkSquare(x, y);

              }
            }
          }
        }

      }

    }else if(this.grid[c][r] === 'm'){

      this.youLose();
      this.revealSquare(c, r);

    }else{

      this.safeLeft --;
      this.revealSquare(c, r);

    }

  },

  revealSquare: function(c, r){
    this.revealedGrid[c][r] = '1';
    if( this.safeLeft === 0 ){
      this.youWin();
    }
    revealSquare(c, r);
  },

  placeFlag: function(c, r){
    if(this.revealedGrid[c][r] === '0'){
      this.revealedGrid[c][r] = 'f';
      flagSquare(c, r);
    }else if(this.revealedGrid[c][r] === 'f'){
      this.revealedGrid[c][r] = '0';
      flagSquare(c, r);
    }

  },

  youLose: function(){
    console.log("you lose");
    //TODO win lose effects
  },

  youWin: function(){
    console.log("you win");
  },

}
