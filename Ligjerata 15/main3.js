var circle = document.getElementById("circle");
var time = document.getElementById("time");
var timeStart;

function showCircle() {
    circle.style.display = "block";
    circle.style.backgroundColor = randomColor();
    circle.style.top = Math.random() * 500 + "px";
    circle.style.left = Math.random() * 900 + "px";
    timeStart = new Date().getTime();
}

showCircle();

circle.onclick = function() {
    circle.style.display = "none";
    setTimeout(showCircle, 1000);
    var timeEnd = new Date().getTime();
    var elapsedTime = (timeEnd - timeStart) / 1000;
    time.innerHTML = elapsedTime + 's';
}

function randomColor() {
    var s = '0123456789ABCDEF';
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += s[Math.floor(Math.random() * 16)];
    }
    return color;
}
