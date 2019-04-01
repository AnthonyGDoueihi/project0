
const ttt = {
  board: [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']],
  movesLeft: 9,

  //player 1 is 0 'O'
  //player 2 is 1 'X'
  turn: 0,

  //for AI games
  playerTurn: true,
  easyAI: false,
  hardAI: false,

  playerMakeMove: function(column, row){
    if(this.board[column][row] !== '_'){
      //TODO warn to place in valid place
      return;
    };

    if( this.turn === 0 ){
      this.board[column][row] = 'O';
      this.turn = 1;
    }else{
      this.board[column][row] = 'X';
      this.turn = 0;
    };
    this.movesLeft --;
    this.checkWin();
    this.checkAI();
  },

  checkAI: function(){
    if( this.turn === 1 ){
      if( this.easyAI ){
        this.easyAIMakeMove();
      }

      if( this.hardAI ){
        this.hardAIMakeMove();
      }
    }
  },

  easyAIMakeMove: function(){
    let placed = false;
    while( !placed ){

      const rColumn = Math.floor(Math.random() * 3);
      const rRow = Math.floor(Math.random() * 3);

      if( this.grid[rColumn][rRow] === '_' ){
        this.grid[rColumn][rRow] = 'X';
        placed = true;
      };
    };
  },

  checkWin: function(){
    for ( let i = 0; i < 3; i++ ){
      if( this.board[i][0] !== '_' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] ){
        if( this.board[i][0] === 'X' ){
            this.victor(0);
            return;
        }else{
          this.victor(1);
          return;
        };
      };

      if( this.board[0][i] !== '_' && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] ){
        if( this.board[i][0] === 'X' ){
            this.victor(0);
            return;
        }else{
          this.victor(1);
          return;
        };
      };
    }

    if ( this.board[1][1] !== '_' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] ){
      if( this.board[1][1] === 'X' ){
          this.victor(0);
          return;
      }else{
        this.victor(1);
        return;
      };
    };

    if ( this.board[1][1] !== '_' && this.board[2][0] === this.board[1][1] && this.board[1][1] === this.board[0][2] ){
      if( this.board[1][1] === 'X' ){
          this.victor(0);
          return;
      }else{
        this.victor(1);
        return;
      };
    };

    if( this.movesLeft === 0 ){
      this.draw();
    }
  },

  draw: function(){
    //TODO print the draw and move on
  },

  victor: function(player){
    //TODO print the you win and move on
  },

  newGame: function(){
      this.board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
      this.movesLeft = 9;
      this.checkAI();
      render();
  },
}
