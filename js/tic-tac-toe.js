
const ttt = {
  board: [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']],
  movesLeft: 9,

  //player 1 is 0 'O'
  //player 2 is 1 'X'
  turn: 0,
  victor: -1,

  //for AI games
  playerTurn: true,
  easyAI: false,
  hardAI: false,

  newGame: function(gameType){

      this.board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
      this.movesLeft = 9;
      this.victor = -1;
      if(gameType === 'vsLocal'){
        this.easyAI = false;
        this.hardAI = false;
      }else if(gameType === 'aiEasy'){
        this.easyAI = true;
        this.hardAI = false;
      }else if(gameType === 'aiHard'){
        //TODO make work
      }else if(gameType === 'vsOnline'){
        //TODO however the shit this happens
      }

      this.checkAI();
      render();
  },

  playerMakeMove: function(column, row){
    if(this.board[column][row] !== '_'){
      //TODO warn to place in valid place
      return;
    };

    if( this.turn === 0 ){
      this.board[column][row] = 'O';
    }else{
      this.board[column][row] = 'X';
    };

    this.playerTurn = false,
    ttt.endOfMove();

  },

  checkAI: function(){
    if( this.turn === 1 ){
      if( this.easyAI ){
        this.easyAIMakeMove();
        return;
      }else if( this.hardAI ){
        this.hardAIMakeMove();
        return;
      }
    }
    this.playerTurn = true;

  },

  endOfMove: function(){
    if( this.turn === 0 ){
      this.turn = 1;
    }else{
      this.turn = 0;
    };
    this.movesLeft --;
    this.checkWin();
  },

  checkWin: function(){
    render();

    for ( let i = 0; i < 3; i++ ){
      if( this.board[i][0] !== '_' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] ){
        if( this.board[i][0] === 'X' ){
            this.winner(1);
            return;
        }else{
          this.winner(0);
          return;
        };
      };

      if( this.board[0][i] !== '_' && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] ){
        if( this.board[i][0] === 'X' ){
            this.winner(1);
            return;
        }else{
          this.winner(0);
          return;
        };
      };
    }

    if ( this.board[1][1] !== '_' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] ){
      if( this.board[1][1] === 'X' ){
          this.winner(1);
          return;
      }else{
        this.winner(0);
        return;
      };
    };

    if ( this.board[1][1] !== '_' && this.board[2][0] === this.board[1][1] && this.board[1][1] === this.board[0][2] ){
      if( this.board[1][1] === 'X' ){
          this.winner(1);
          return;
      }else{
        this.winner(0);
        return;
      };
    };

    if( this.movesLeft === 0 ){
      this.draw();
      return;
    }
    this.checkAI();
  },

  draw: function(){
    this.victor = 3;
    render();
  },

  winner: function(player){
    this.victor = player;
    render();
  },

  easyAIMakeMove: function(){

    let placed = false;
    while( !placed ){

      const rColumn = Math.floor(Math.random() * 3);
      const rRow = Math.floor(Math.random() * 3);

      if( this.board[rColumn][rRow] === '_' ){
        this.board[rColumn][rRow] = 'X';
        placed = true;
      };
    };


    this.endOfMove();

  },

  hardAIMakeMove: function(){

    //TODO make hard ai
    this.endOfMove();
  },
}
