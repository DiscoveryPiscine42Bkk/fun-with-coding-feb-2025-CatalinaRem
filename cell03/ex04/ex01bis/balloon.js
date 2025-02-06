const balloon = document.getElementById("balloon");
let size = 200;
const maxSize = 420;
const minSize = 200;
const colors = ["red", "green", "blue"];
let colorIndex = 0;

balloon.addEventListener("click", () => {
    if (size >= maxSize) {
        size = minSize; // Reset size if it exceeds maxSize
        colorIndex = 0; // Reset color to red
    } else {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;
    }
    updateBalloon();
});

balloon.addEventListener("mouseleave", () => {
    if (size > minSize) {
        size -= 5;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    }
});

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}