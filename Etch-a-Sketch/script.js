const grid = document.getElementById("grid");
let cellsPerSide = 16;
let totalCells;
let cellSize;

function getTotalCells(){
    return cellsPerSide**2;
}

function getCellSize(){
    return grid.offsetWidth/cellsPerSide;
}

function newGrid(){
    cells = getCellNumber();
    if(cells !== null && typeof(cells) !== "undefined"){
        cellsPerSide = cells;
        removeGrid();
        paintNewGrid();
        console.log("NEW GRID!");
    }
}

function getCellNumber(){
    let input = prompt("Cells per side:");
    if(input === null){ //User cancels
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

    return cells;
}

function paintNewGrid(){
    totalCells = getTotalCells();
    cellSize = getCellSize();

    for(i=0; i<totalCells; i++){
        const cell = document.createElement("div");
        cell.addEventListener("mousedown", (e) => {
            e.preventDefault;
            cell.style.backgroundColor = "black";

        });
        cell.addEventListener("mouseover", () => {
            if (isMouseDown) {
                cell.style.backgroundColor = "black";
            }
        });
        cell.style.boxSizing = "border-box";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
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


///NEW GRID BUTTON///
const cellNumberBtn = document.querySelector("#cellNumberBtn");
cellNumberBtn.addEventListener("click", newGrid);


///PAINTING LOGIC///
let isMouseDown = false;
document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isMouseDown = true;
    }
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});



///ON START///
paintNewGrid();