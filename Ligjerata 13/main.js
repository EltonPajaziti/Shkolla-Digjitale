


var input1=document.getElementById("input1_id");
var input2=document.getElementById("input2_id");
var answer= document.getElementById("text1");
var btn2=document.getElementById("answer");

btn2.addEventListener("click", function(){
    answer.innerHTML = parseInt(input1.value)+ parseInt(input2.value); 
})


var input = document.getElementById("input_id");
var butoni = document.getElementById("pergjigjja");
var answer1 = document.getElementById("text12");

butoni.addEventListener("click", function () {
    var inputValue = parseInt(input.value);
    if (inputValue > 10) {
        answer1.innerHTML = inputValue + " është më e madhe se 10";
    } else if (inputValue === 10) {
        answer1.innerHTML = inputValue + " është e barabartë me 10";
    } else {
        answer1.innerHTML = inputValue + " është më e vogël se 10";
    }
});
