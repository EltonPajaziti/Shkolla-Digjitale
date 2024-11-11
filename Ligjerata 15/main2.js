// function printNames(){
// document.write("Ariana" + "<br>");
// setTimeout(function(){
//     document.write("Donika");
// }, 3000);
// //pjesa e callback brenda nje funksioni me thirr nje funksion tjeter 

// document.write("Eltoni");
// }

// printNames();

var color=['red', 'green', 'blue', 'purple'];
function changeColor(){
    document.querySelector('body').style.backgroundColor=
    color[Math.floor(Math.random()*color.length)];
}

changeColor();

var names=['Antigona', ' Grenti', 'Donika'];
function changeName(){
    document.querySelector('p').innerHTML=names[Math.floor(Math.random()*names.length)];
}

setInterval(changeColor,1000);
setInterval(changeName,1000);