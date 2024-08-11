let size = 16, r, g, b;
const container = document.createElement("div");
container.classList.add("container");

document.body.appendChild(container);

function fillGrid(size) {
    for (i = 0; i <(size*size); i++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("gridBox");
            
            gridBox.style.width = `${700/size}px`;
            gridBox.style.width = `${700/size}px`;
            
            container.appendChild(gridBox);

    }
    const gridBoxes = document.querySelectorAll("div")
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover" , () => {
            gridBox.style.backgroundColor = randomColor();
        });
    } );
}

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
fillGrid(16);

const resize = document.querySelector(".resize");


    resize.addEventListener("click", () => {
        size = prompt("enter the grid size ");
        clearGrid();
    })

const clear = document.querySelector(".clear");
clear.addEventListener("click" , () => {
    clearGrid();
})

function clearGrid() {
    container.innerHTML = "";
    fillGrid(size);
    
    
    }
    

