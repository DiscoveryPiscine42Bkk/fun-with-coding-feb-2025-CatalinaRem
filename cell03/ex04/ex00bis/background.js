let clickCount = 0;

document.getElementById("randomButton").addEventListener("click", function () {
  clickCount++;

  // สุ่มสี
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;

  // เพิ่มขนาดปุ่มทีละ 10%
  this.style.transform = `scale(${1 + clickCount * 0.1})`;
});