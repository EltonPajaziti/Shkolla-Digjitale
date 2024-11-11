var car={ brand:"BMW", year:2020, color:"red"};

var x;

for(x in car){
    document.write(car[x] + "<br>");
}

var names=['Ariana', 'Leon', 'Elsa'];
var x;
document.write("<br>");
for(x of names){
    document.write(x + "<br>");
}

let i=0;
do{

    document.write(i);
    i+=1;
}while(i<5);


var vargu=["Elton", "Elion"];
for(i=0;i<vargu.length;i++){
    document.write(vargu[i]+ "<br>");
}
vargu.pop();

document.write("<br>");
for(i=0;i<vargu.length;i++){
    document.write(vargu[i]+ "<br>");
}

var emri= document.getElementById("emri");
var butoni= document.getElementById("add");
var btn=document.getElementById("show");
var a=[];

butoni.addEventListener("click", function(){
    a.push(emri.value); 
})

btn.addEventListener("click", function(){
    document.getElementById("outputi").innerHTML=a.join(",");
})



