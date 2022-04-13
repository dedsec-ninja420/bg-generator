const button = document.getElementsByTagName("button")[0];
const body = document.getElementsByTagName("body")[0];
const p = document.getElementsByTagName("p")[0];
const hex = document.getElementsByTagName("span")[0];
const colorInput = document.getElementById("color");

const generateBg = () => {
    let color = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + color;
    hex.innerHTML  = "#" + color;
    colorInput.value = "#" + color;
}

const bgSet = () => {
    body.style.backgroundColor = colorInput.value;
}

button.addEventListener("click", generateBg)
colorInput.addEventListener("input", bgSet)