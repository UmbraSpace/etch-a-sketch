let container = document.querySelector("#container");
let button = document.querySelector('button');
const containerSize = 900;


function generateGrid (sideLength){
    let pixelQuantity = sideLength * sideLength;
    let pixelSize = (containerSize / sideLength).toString() + "px";

    for (let i = 0; i<pixelQuantity; i++){
        let newPixel = document.createElement("div");
        newPixel.style.width = pixelSize;
        newPixel.style.height = pixelSize;
        newPixel.style.backgroundColor = "#000000";
        newPixel.style.opacity = 0;
        newPixel.addEventListener("mouseenter", () =>
            {
                let newOpacity = Number(newPixel.style.opacity) + 0.1;
                newPixel.style.opacity = newOpacity;
            })

        container.appendChild(newPixel);
    }

}

button.addEventListener("click", () => {
    let gridSideLength;
    do {
        gridSideLength = prompt("Side length of new grid? (Must be 100 or less)");
    } while (gridSideLength > 100);
    
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    
    generateGrid(gridSideLength);
})

generateGrid(16);
