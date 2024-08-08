///GRID GENERATION///
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
        cell.addEventListener("mousedown", handleMouseDown);
        cell.addEventListener("mouseover", handleMouseOver);
        cell.style.boxSizing = "border-box";
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.border = "1px solid black";
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


///PAINTING///
let isMouseDown = false;
document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isMouseDown = true;
    }
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function Paint(cell){
    cell.style.backgroundColor = getRandomColor();
    cell.removeEventListener("mousedown", handleMouseDown);
    cell.removeEventListener("mouseover", handleMouseOver);
}

function getRandomColor(){
    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    console.log(`rgb(${num1}, ${num2}, ${num3})`);
    return `rgb(${num1}, ${num2}, ${num3})`;
}

function handleMouseDown(event) {
    Paint(event.target);
    isMouseDown = true;
}

function handleMouseOver(event) {
    if (isMouseDown) {
        Paint(event.target);
    }
}



///ON START///
paintNewGrid();