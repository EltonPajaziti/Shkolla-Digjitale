var button1= document.getElementById("btn1");
// var button1= document.querySelector("button"); e merr veq butonin e pare
//ndersa querySelectorAll i merr krejt 

button1.onclick = function(){
    alert("Hello World!");
}

button1.addEventListener('click', function(){
    alert("Hello Again");
})
//te addEventListener gjithmone na duhen 2 parametra eventi qe ka me ndodh  edhe funksioni qe ka me ndodh kur tbahet ai event 

var button2= document.getElementById("btn2");
var button3= document.getElementById("btn3");

button2.onmouseleave= function(){
    alert("Mouse leave");
}

button3.onmouseover= function (){
    alert("Mouse hover");
}
 
//stilizimi 3 menyra tu e shkru direkt css me id edhe me atribute 


var v_text= document.getElementById("txt1");
var v_button=document.getElementById("btn1");

// v_button.onclick= function(){
//     v_text.style.color="red";
//     v_text.style.backgroundColor="lightgrey";
//     v_text.style.alignItems="center";
//     v_text.style.padding="20px";
//     v_text.style.fontSize="100px";
// }


// // mouse over css
// v_text.onmouseover= function(){
//     v_text.style.cssText="color:red; background-color:lightgrey; align-items:center; font-size:100px; padding:20px;"
// }

v_button.onclick= function(){
    v_text.classList.add("test");
}



