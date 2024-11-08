// var shuma=0;
// for(i=15;i<=47;i++){
//     shuma=shuma+i;
// }

// console.log(shuma);



// var a=[3,4,6,7];
// var n= a.length;
// var s=0;
// for(j=0;j<n;j++){
//  s+=a[j];
// }

// console.log(s);

// var s=0;
// for(x of a){
//     s+=x;
// }
// console.log(s);

// var s=0;
// for(x in a){
//     s+=x;
// }
// console.log(s);

//in per indeksa of per vlera 
var emri= document.getElementById("emri");
var butoni= document.getElementById("ruaj");
var a=[];

butoni.addEventListener("click", function(){
    a.push(emri.value);
    // for(i=0;i<a.length;i++){
    //     document.write(a[i]);
    //     // document.write("<br>");
    // }
  document.getElementById("outputi").innerHTML=a.join(",");
})

// for(i=0;i<a.length;i++){
//     document.write(a[i]);
//     document.write("<br>");
// }