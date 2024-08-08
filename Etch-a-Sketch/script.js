const CELLS_NUMBER = 256;
const grid = document.getElementById("grid");
const gridSize = grid.offsetWidth/16;
console.log(gridSize);

for(i=0; i<CELLS_NUMBER; i++){
    const cell = document.createElement("div");
    cell.style.boxSizing = "border-box";
    cell.style.width = gridSize + "px";
    cell.style.height = gridSize + "px";
    // cell.style.height = "50px";
    cell.style.border = "1px solid black";
    cell.style.boxSizing = "border-box";
    grid.appendChild(cell);
}

//width: calc(100% / 16)