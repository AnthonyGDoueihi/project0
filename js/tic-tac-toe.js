
const ttt = {
  board: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
  movesLeft: 9,

  winningSets: [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],

  //player 1 is 0 'O'
  //player 2 is 1 'X'
  turn: 1,
  victor: -1,

  //for AI games
  playerTurn: false,
  easyAI: false,
  hardAI: false,

  newGame: function(gameType){

      this.board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
      this.movesLeft = 9;
      this.victor = -1;
      this.playerTurn = false;

      if(gameType === 'vsLocal'){
        this.easyAI = false;
        this.hardAI = false;
      }else if(gameType === 'aiEasy'){
        this.easyAI = true;
        this.hardAI = false;
      }else if(gameType === 'aiHard'){
        this.easyAI = false;
        this.hardAI = true;
      }else if(gameType === 'vsOnline'){
        //TODO however the shit this happens
      }

      if( this.turn === 0 ){
        this.turn = 1;
      }else{
        this.turn = 0;
      };

      $render();
      this.checkAI();
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

  playerMakeMove: function(pos){
    if(this.board[pos] === 'X' || this.board[pos] === 'O'){
      return;
    };

    if( this.turn === 0 ){
      this.board[pos] = 'O';
    }else{
      this.board[pos] = 'X';
    };

    this.playerTurn = false,
    this.checkWin();

  },

  checkWin: function(){
    if( this.movesLeft <= 5 ){
       if(this.isWin(this.turn)){
         return this.winner(this.turn);
        };
    }

    this.endOfMove();
  },

  isWin: function(player, board = this.board){
    let check;
    if(player === 0){
      check = 'O';
    }else{
      check = 'X';
    }

    for ( let set of this.winningSets ) {
       if(board[set[0]] === check && board[set[1]] === check && board[set[2]] === check){
         return true;
       };
    };
    return false;
  },

  endOfMove: function(){

    if( this.turn === 0 ){
      this.turn = 1;
    }else{
      this.turn = 0;
    };

    this.movesLeft --;

    $render();

    if( this.movesLeft === 0 ){
      this.draw();
    }else {
      this.checkAI();
    }
  },

  draw: function(){
    this.victor = 3;
    $render();
  },

  winner: function(player){
    this.victor = player;
    $render();
  },

  easyAIMakeMove: function(){

    let placed = false;
    while( !placed ){

      const rand = Math.floor(Math.random() * 9);

      if( this.board[rand] !== 'X' && this.board[rand] !== 'O' ){
        this.board[rand] = 'X';
        placed = true;
      };
    };

    this.checkWin();

  },

  hardAIMakeMove: function(){

    this.board[hardAI.minmax(this.board, 'X').index] = 'X';
    this.checkWin();
  },
}

const hardAI = {
  iter: 0,

  emptySpots: function(board){
    const spots = board.filter(function(s){
      return (s !== 'O' && s !== 'X')
    });
    return spots;
  },

  minmax: function(newBoard, player){
    const availableSpots = this.emptySpots(newBoard);

    if(ttt.isWin(0, newBoard)){
      return {score: -10}
    }else if(ttt.isWin(1, newBoard)){
      return {score: 10}
    }else if(availableSpots.length === 0){
      return {score: 0}
    }

    const moves = [];

    for(let i = 0; i < availableSpots.length; i++){

      let move = {score: 0};
      move.index = newBoard[availableSpots[i]];

      newBoard[availableSpots[i]] = player;

      if(player === 'X'){
        this.iter ++;
        const result = this.minmax(newBoard, 'O');
        move.score += result.score;
      }else{
        this.iter --;
        const result = this.minmax(newBoard, 'X');
        move.score += result.score;
      }

      newBoard[availableSpots[i]] = move.index;

      moves.push(move);

    }

    // console.log(moves);
    // debugger;

    let bestMove;
    if ( player === 'X' ){

      let bestScore = -10000;

      for( var i = 0; i < moves.length; i++ ){

        if( moves[i].score > bestScore ){

          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{
      let bestScore = 10000;

      for( var i = 0; i < moves.length; i++ ){

        if( moves[i].score < bestScore ){

          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

   return moves[bestMove];
  },

}
