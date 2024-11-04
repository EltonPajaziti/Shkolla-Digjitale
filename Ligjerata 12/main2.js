var programmingL=['JavaScript','Python', 'PHP'];

console.log(programmingL);
document.write(programmingL);
programmingL.push("Java");
document.write("<br>");
document.write(programmingL);
programmingL.pop();
document.write("<br>");
document.write(programmingL);

programmingL.unshift("C++");//E shton ne fillim te vargut 
document.write("<br>");
document.write(programmingL);

programmingL.splice(1,0,"Ruby");//ne poziten 1 me shtu Ruby edhe te parametri i dyte kallxon sa me i hek dmth se kena largu asnjo
document.write("<br>");
document.write(programmingL);

console.log(Math.random()*5);// me presje dhjetore max 5
console.log(Math.floor(Math.random()*5));


//Array Destructuring 
var students=["Elton", "Ariana"];
var[s1, s2]=students;
console.log(s1);
console.log(s2);

var places=["London", "Paris", "New York", "Berlin"];
var[firstPlace, , secondPlace]=places;
console.log(firstPlace);
console.log(secondPlace);



var numbers=[1,2,3,4,5,6];
var [firstNumber, secondNumber, ...otherNumbers]=numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(otherNumbers);
