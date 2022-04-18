const button = document.getElementsByTagName("button")[0];
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p")[0];
const hex = document.getElementsByTagName("span")[0];
const colorInput = document.getElementById("color");
const hidden = document.getElementsByClassName("hidden")[0];

const generateBg = () => {
    let color = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + color;
    hex.innerHTML  = "#" + color;
    colorInput.value = "#" + color;
}

const checkBlack = () => {
    for (let i = 0; i < h1.length; i++) {
        if (hex.textContent = "#000000") {
            h1[i].style.color = "white";
        } else if (hex.textContent != "#000000"){
            h1[i].style.color = "black";
        }   
    }
}

const bgSet = () => {
    console.log(colorInput.value)
    body.style.backgroundColor = colorInput.value;
    hex.innerHTML  = colorInput.value;
}

button.addEventListener("click", generateBg)
colorInput.addEventListener("input", bgSet)
