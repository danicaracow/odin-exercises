function Gameboard(){
    const rows = 3;
    const columns = 3;
    const boardLength = rows * columns;
    const board = [];
    let position = 1;

    for(i=0; i<rows; i++){
        board[i] = [];
        for(j=0; j<columns; j++){
            board[i].push(Cell());
            board[i][j].position = position;
            position++;
            // console.log(board[i][j]);
        }
    }

    return board;
}

function Cell(){
    let value = 0;
    let position = 0;
    
    const setValue = (player) => {value = player};
    const getValue = () => value;

    return {setValue, getValue};
}

function GameController(){
    const players = [{name: "Hugo"}, {name: "Petra"}];
    let playerTurn = players[0];
    const board = Gameboard();

    const switchTurn = () => playerTurn = playerTurn === players[0] ? players[1] : players[0];

    const choseCell = () => {
        const cell = 0;
        
        const row = prompt("Select row:");
        const column = prompt("Select column:");
        
        if (board[row][column].getValue() === 0){
            board[row][column].setValue(playerTurn);
            console.log(board[row][column]);
        }

        // console.log(board[row][column].getValue());

    }

    const playTurn = () => {
        choseCell();
        switchTurn();
        // console.log(playerTurn);
    }

    const displayBoard = () => {
        board.forEach((ele) => {
            console.log("\n");
            let rowDisplay = "";
            ele.forEach((ele) => {
                rowDisplay = rowDisplay + ("[" + ele.getValue().name + "]");
            });
            console.log(rowDisplay);
        })
    }

    return{playTurn, displayBoard};
}

const game = GameController();
game.playTurn();
game.playTurn();
game.displayBoard();

