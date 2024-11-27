<?php
// phpinfo();
$x="HELLO!";
print_r($x);
echo "<br>";

$x=5;
echo gettype($x)."<br>";

function displayVersion(){
    echo "This is php version". phpversion();
    echo"\n";
}

displayVersion();

echo "<br>";

function helloWorld(){
    echo "Hello World!";
}

helloWorld();

function sum(){
    $value=20+30;
    echo $value;
}

echo "<br>";
sum();

echo "<br>";
function maximum ($x, $y){
    if($x > $y){
        return $x;
    }else{
        return $y;
    }
}

echo maximum(20,30);

function plotpjestueshmeria($n){
if($n %2 ==0){
return "$n eshte i plotpjestueshem me 2";
}else{
    return "$n nuk eshte i plotpjestueshem me 2";
}
}

echo"<br>";
 echo plotpjestueshmeria(4);
echo"<br>";
 echo plotpjestueshmeria(5);
 echo"<br>";
 echo plotpjestueshmeria(10);
echo"<br>";
 echo plotpjestueshmeria(21);

$x=20;
$y=30;

function ab(){
    global $x, $y;
    $c=$x+$y;
    return $c;
}
echo "<br>";
echo ab();

function staticVariable(){
    static $count=0;
    $count++;
    echo "<br> The value of count is $count <br>";
}

//static gjith vazhdon prej qasaj ku u met nuk e hup vleren edhe nuk e bon 0
staticVariable();
staticVariable();
staticVariable();
staticVariable();
staticVariable();

$sports= array("Football","BasketBall", "HandBall");
print_r($sports);

echo "<br>";
//elementin e fundit ne nje array e gjejme me ane te metodes end
echo end($sports);
echo "<br>";
echo count($sports);// i numron anetaret e vargut sa jane 
echo "<br>";
$length= count($sports);
for($i=0;$i<$length;$i++){
    echo $sports[$i]."<br>";
}

//var_dump() perdoret per me marr informata ma t detajuara lidhun me qka po dojna pershembull per array ose diqka tjeter

$numrat=[1,5,10,4];
echo array_sum($numrat);// e llogarit shumen e  anetareve te vargut 


?>