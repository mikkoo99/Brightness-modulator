let red = 255;
let green = 255;
let blue = 255;
const changeColor = (e) => {
    if (e.keyCode === 38 && red >=0) {
        document.body.style.backgroundColor = `rgb(${red-=3},${green-=3},${blue-=3})`;
    } else if (e.keyCode === 40 && red <=256) {
        document.body.style.backgroundColor = `rgb(${red+=3},${green+=3},${blue+=3})`
    }
}
window.addEventListener('keydown', changeColor)