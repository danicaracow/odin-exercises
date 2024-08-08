// const CELLS_NUMBER = 256;
const grid = document.getElementById("grid");
let cellsPerSide = 16;
let totalCells;
let cellSize;
// console.log(cellsPerSide);
// console.log(totalCells);
// console.log(cellSize);

const cellNumberBtn = document.querySelector("#cellNumberBtn");
cellNumberBtn.addEventListener("click", newGrid);
//width: calc(100% / 16)

function getTotalCells(){
    return cellsPerSide**2;
}

function getCellSize(){
    return grid.offsetWidth/cellsPerSide;
}

function newGrid(){
    cells = getCellNumber();
    console.log(cells);
    console.log(typeof(cells));
    if(cells !== null){
        cellsPerSide = cells;
        removeGrid();
        paintNewGrid();
        console.log("NEW GRID!");
    }
}

function getCellNumber(){
    let input = prompt("Cells per side:");
    if(input === null){
        return;
    }
    
    let cells = Number(input);
    if(cells === NaN){
        alert("You have to insert a number!");
        return getCellNumber();
    }
    else if(cells>100){
        cells = 100;
    }
    else if(cells<16){
        cells = 16;
    }
    // console.log(cells);
    // console.log(typeof(cells));
    return cells;
}

function paintNewGrid(){
    totalCells = getTotalCells();
    cellSize = getCellSize();

    for(i=0; i<totalCells; i++){
        const cell = document.createElement("div");
        cell.style.boxSizing = "border-box";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        // cell.style.height = "50px";
        cell.style.border = "1px solid black";
        cell.style.boxSizing = "border-box";
        grid.appendChild(cell);
    }
}

function removeGrid(){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}


paintNewGrid();