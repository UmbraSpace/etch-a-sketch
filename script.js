let container = document.querySelector("#container");

function generateGrid (sideLength){
    let pixelQuantity = sideLength * sideLength;
    let pixelSize = (960 / sideLength).toString() + "px";

    for (let i = 0; i<pixelQuantity; i++){
        let newPixel = document.createElement("div");
        newPixel.style.width = pixelSize;
        newPixel.style.height = pixelSize;
        newPixel.style.backgroundColor = "red";
        container.appendChild(newPixel);
    }

}

generateGrid(16);
