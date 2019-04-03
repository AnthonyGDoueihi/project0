
const ttt = {
  board: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  movesLeft: 9,

  winningSets: [
    ['1', '2', '3'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
  ],
  //player 1 is 0 'O'
  //player 2 is 1 'X'
  turn: 0,
  victor: -1,

  movesMade: [[],[]],

  //for AI games
  playerTurn: true,
  easyAI: false,
  hardAI: false,

  newGame: function(gameType){

      this.board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      this.movesMade = [[],[]];
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

  playerMakeMove: function(pos){
    if(this.board[pos] === 'X' || this.board[pos] === 'O'){
      return;
    };
    if( this.turn === 0 ){
      this.board[pos] = 'O';
    }else{
      this.board[pos] = 'X';
    };

    this.movesMade[this.turn].push((pos + 1).toString());

    this.playerTurn = false,
    this.checkWin();

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

    render();

    if( this.movesLeft === 0 ){
      this.draw();
    }else {
      this.checkAI();
    }
  },

  checkWin: function(){
    if( this.movesLeft <= 5 ){
      for ( let set of this.winningSets) {

       if(this.movesMade[this.turn].includes(set[0]) && this.movesMade[this.turn].includes(set[1]) && this.movesMade[this.turn].includes(set[2])){
         return this.winner(this.turn);
        };
      };
    }

    this.endOfMove();
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

      const rand = Math.floor(Math.random() * 9);

      if( this.board[rand] !== 'X' && this.board[rand] !== 'O' ){
        this.board[rand] = 'X';
        this.movesMade[this.turn].push((rand + 1).toString());
        placed = true;
      };
    };

    this.checkWin();

  },

  hardAIMakeMove: function(){

    //TODO make hard ai
    this.checkWin();
  },
}
