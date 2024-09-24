function Gameboard(){
    const rows = 3;
    const columns = 3;
    const boardLength = rows * columns;
    const board = [];
    let position = 1;

    for(let i=0; i<rows; i++){
        board[i] = [];
        for(let j=0; j<columns; j++){
            board[i].push(Cell());
            board[i][j].position = position;
            position++;
            // console.log(board[i][j]);
        }
    }

    const getRows = () => rows;
    const getColumns = () => columns;

    return {board, getRows, getColumns};
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
    const gameboard = Gameboard();

    const switchTurn = () => playerTurn = playerTurn === players[0] ? players[1] : players[0];

    const choseCell = () => {
        let row = prompt("Select row:");
        let column = prompt("Select column:");

        // console.log(checkCell(row, column));
        if (checkCell(row, column)) gameboard.board[row][column].setValue(playerTurn);
        else{
            alert("Position already taken or out of bounds!");
            choseCell();
        }

    }

    const checkCell = (row, column) => {
        // console.log("hola");
        // console.log(row);
        // console.log(column);
        // console.log(gameboard.board[row][column].getValue());

        if (gameboard.board[row][column].getValue() === 0 && row <= gameboard.getRows() && column <= gameboard.getColumns()){
            return true;
        }
        else{
            return false;
        }

    }

    const playTurn = () => {
        choseCell();
        // switchTurn();
        evaluateGame();
        // console.log(playerTurn);
    }

    const displayBoard = () => {
        gameboard.board.forEach((ele) => {
            console.log("\n");
            let rowDisplay = "";
            ele.forEach((ele) => {
                rowDisplay = rowDisplay + ("[" + ele.getValue().name + "]");
            });
            console.log(rowDisplay);
        })
    }

    const evaluateGame = () => {
        const completeRow = "";
        const rows = gameboard.getRows();
        const columns = gameboard.getColumns();

        function isUndefined(array){
            // console.log(array.length);
            for(let i=0; i<array.length; i++){
                // console.log(array[i]);

                if(array[i].getValue() === 0) {
                    // console.log("UNDEFINED FOUND");
                    return true;
                }
            }
            
            return false;
        }

        // check rows
        for(let i=0; i<gameboard.getRows(); i++){
            let allEqual = true;

            for(let j=0; j<gameboard.getColumns(); j++){
                if(gameboard.board[i][j].getValue() !== gameboard.board[i][0].getValue() 
                || gameboard.board[i][j].getValue() === 0){
                    allEqual = false;
                    break;
                }
            }

            if(allEqual){
                console.log("complete line in row " + i);
            }
        }

        // CHECK COLUMNS
        for(let j=0; j<gameboard.getRows(); j++){
            let allEqual = true;
            
            for(let i=0; i<gameboard.getRows(); i++){
                if(gameboard.board[i][j].getValue() !== gameboard.board[0][j].getValue() 
                || gameboard.board[i][j].getValue() === 0){
                    allEqual = false;
                    break;
                }
            }

            if(allEqual){
                console.log("complete line in column " + j);
            }
        }

        //CHECK DIAGONALS
        for(let i=0; i<gameboard.getColumns(); i++){
            let allEqual = true;

            if(gameboard.board[i][i].getValue() !== gameboard.board[0][0].getValue() 
            || gameboard.board[i][i].getValue() === 0){
                allEqual = false;
                break;

            }

            if(allEqual){
                console.log("complete diagonal line");
            }
        }

        // for(let i=0; i<gameboard.getRows(); i++){
        //     let allEqual = true;

        //     if(gameboard.board[i][gameboard.getRows()-1-i].getValue() !== gameboard.board[0][gameboard.getRows()-1].getValue() 
        //     || gameboard.board[i][gameboard.getRows()-1-i].getValue() === 0){
        //         allEqual = false;
        //         break;

        //     }

        //     if(allEqual){
        //         console.log("complete diagonal line");
        //     }
        // }

        
        // for(let i=0; i<gameboard.getColumns(); i++){
        //     // console.log(gameboard.board[i].length);
        //     const allEqual = false;
        //     if (isUndefined(gameboard.board[i])) continue;

        //     for(let j=0; j<gameboard.getRow)

        //     // const allEqual = gameboard.board[i].every(ele => {
        //     //     if(ele === undefined) return false;
        //     //     else return ele.getValue() === gameboard.board[i][0].getValue();
        //     // })

        //     if(allEqual){
        //         console.log("complete line in row " + i);
        //     }
        // }
    }

    return{playTurn, displayBoard};
}

const game = GameController();
game.playTurn();
game.playTurn();
game.playTurn();
// game.playTurn();
// game.playTurn();
// game.playTurn();
game.displayBoard();

