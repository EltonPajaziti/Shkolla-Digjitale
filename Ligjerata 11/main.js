function showMessage(){
    alert("This message is inside a function!")
}

showMessage();

function sum(x,y){
    return x+y;
}

// console.log(sum(20,5));
document.writeln(sum(20,5));

// var arrowfunction=()=>alert("Hello World!");
// arrowfunction();

var arrowfunction=name=> alert(`Hello ${name}`);
arrowfunction("Elton Pajaziti");

function name1(){
    var localVar="Elton";
    alert(localVar);
}

name1();


// alert(localVar);// te kjo smunum me perdor se localVar u kan variabel veq brenda funksionit

function seconds(minutes){
    return minutes*60;
}

document.writeln(seconds(60)+ "<br>");

var car ={name:"Mercedes", color:"red",year:2020,kilometers:0, startEngine:function(){alert("Vrooom!")},
get getkilometers(){
    return this.kilometers;
},
set setkilometers(km){
    this.kilometers = km;
}};
console.log(car.getkilometers);
car.setkilometers(100);
console.log(car.getkilometers);

document.write(car.name + "<br>"+ car.color+"<br>" + car.year + "<br>" +car.kilometers);
document.write("<br>"+ car['color']);

car.startEngine();


var computer= new Object();
computer.name="Lenovo";
computer.CPU="Intel Core i7";
computer.RAM="32GB";
computer.GPU="GeForce GT730 2GB Dual DP HP";
computer.type=function(){
    return this.name+ " ," + this.CPU + " ," + this.RAM + " ," + this.GPU;
}

document.write("<br>" + computer.type());


delete computer.GPU;
document.write("<br>" + computer.type());


function Computer(name, CPU, RAM, GPU){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
    this.GPU=GPU;
}

var computer1= new Computer("MacBook Pro", "M1 Chip", "8GB", "5600M GPU");
var computer2= new Computer("HP", "Intel i3 Core", "4GB", "Integrated");
document.write("Computer 1:"+ computer1);
console.log("Computer 2:"+ computer2);
