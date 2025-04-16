let container = document.querySelector("#container");

for (let i = 0; i<256; i++){
    let newPixel = document.createElement("div");
    newPixel.style.width = "60px";
    newPixel.style.height = "60px";
    newPixel.style.backgroundColor = "red";
    container.appendChild(newPixel);
}