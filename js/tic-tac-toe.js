
const ttt = {
  board: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
  movesLeft: 9,

  //all winning combinations
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

  //for AI games, the AI will always be player 2
  playerTurn: false,
  easyAI: false,
  hardAI: false,

  newGame: function(gameType){

    //reset all values
      this.board = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
      this.movesLeft = 9;
      this.victor = -1;
      this.playerTurn = false;

      //set up AI
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


      //The player who placed last round (winner or otherwise) will place second this time
      if( this.turn === 0 ){
        this.turn = 1;
      }else{
        this.turn = 0;
      };

      $render();
      this.checkAI();
  },

  checkAI: function(){

    //AI is always player 2 so check if turn and which ai is playing
    if( this.turn === 1 ){
      if( this.easyAI ){
        this.easyAIMakeMove();
        return;
      }else if( this.hardAI ){
        this.hardAIMakeMove();
        return;
      }
    }
    //otherwise it is a players turn
    this.playerTurn = true;
  },

  playerMakeMove: function(pos){
    //If position already taken, try again
    if(this.board[pos] === 'X' || this.board[pos] === 'O'){
      return;
    };

    //If not place dependant on turn
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
    //Done in this way so the minimax function can all it too
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
    //Switches whose turn is next
    if( this.turn === 0 ){
      this.turn = 1;
    }else{
      this.turn = 0;
    };

    this.movesLeft --;

    $render();
    //checks if draw, otherwise continues
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
    //easy AI isnt really ai, it picks a random point and places
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
    //calls other object because there is alot and this is cleaner
    this.board[hardAI.minmax(this.board, 'X').index] = 'X';
    this.checkWin();
  },
}

const hardAI = {
  //iter is for testing
  iter: 0,

  // take input array and returns the empty positions
  emptySpots: function(board){
    const spots = board.filter(function(s){
      return (s !== 'O' && s !== 'X')
    });
    return spots;
  },

  minmax: function(newBoard, player){
    const availableSpots = this.emptySpots(newBoard);

    //checks if theoretical placement resulted in a win and returns a positive or negative value as a result
    if(ttt.isWin(0, newBoard)){
      return {score: -10}
    }else if(ttt.isWin(1, newBoard)){
      return {score: 10}
    }else if(availableSpots.length === 0){
      return {score: 0}
    }

    //creates array for potential moves and loops through all moves to see which will lead to victory or not loss
    const moves = [];

    for(let i = 0; i < availableSpots.length; i++){

      let move = {score: 0};
      move.index = newBoard[availableSpots[i]];

      newBoard[availableSpots[i]] = player;

      //Recall this function until there is a victory loss or tie condition met
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

    //loops through all moves on this level, and returns either a positive for the AI, or a negative for the player
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
    //returns to higher level of minimax
   return moves[bestMove];
  },

}
