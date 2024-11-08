var text="I attend Digital School";
var result= text.search(/Digital School/);
var result2=text.replace(/Digital School/, "Gjin Gazull");
console.log(result);
console.log(result2);

var testi="abcdef";
var regex= new RegExp('abc');
console.log(regex.test(testi));


var text2="Hello World, this is my World !";

var regex=/World/;
// var regex=/World/g; nese dojna me gjet krejt fjalt WORLD brenda fjalie jo veq nja qe e gjan 
console.log(text2.match(regex));


// function validate(){
//     var name=document.getElementById("name");
//     var age=document.getElementById("age");
//     var city=document.getElementById("city");

//     var valid_name ='/^[A-Za-z]+$/';
//     var valid_age ='/^[0-9]+$/';

//     if(!(name.match(valid_name)) || !(age.match(valid_age)) || city==''){
//         if(!(name.match(valid_name))){
//             document.getElementById("name_error").style.visibility="visible";
//         }

//         if(!(age.match(valid_age))){
//             document.getElementById("age_error").style.visibility="visible";
//         }
//         if(city==''){
//             document.getElementById("city_error").style.visibility="visible";
//         }
//         return false;
//     }
//     else{
//         return true;
//     }
// }



// main2.js

// Funksioni i validimit të formularit
function validate() {
    // Merr inputet dhe span-et e gabimeve
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    const nameError = document.getElementById("name_error");
    const ageError = document.getElementById("age_error");
    const cityError = document.getElementById("city_error");

    // Regex për validime
    const validName = /^[A-Za-z]+$/;
    const validAge = /^[0-9]+$/;

    let isValid = true;

    // Validimi i fushës Name
    if (!validName.test(name)) {
        nameError.style.visibility = "visible";
        isValid = false;
    } else {
        nameError.style.visibility = "hidden";
    }

    // Validimi i fushës Age
    if (!validAge.test(age)) {
        ageError.style.visibility = "visible";
        isValid = false;
    } else {
        ageError.style.visibility = "hidden";
    }

    // Validimi i fushës City
    if (city === "") {
        cityError.style.visibility = "visible";
        isValid = false;
    } else {
        cityError.style.visibility = "hidden";
    }

    // Kthen true nëse nuk ka gabime, përndryshe false
    return isValid;
}


