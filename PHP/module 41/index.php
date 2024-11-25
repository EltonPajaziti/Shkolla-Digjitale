<?php
$num=2;
if($num <0){
    echo "$num is less than 0";
}else{
    echo "$num is bigger than 0";
}
echo "<br><br>";
$age=13;
if($age>12 && $age<20){
    echo "You are a teenager";
} 
echo "<br><br>";

$numri=10;
if($numri>5){
    echo"$numri is bigger than 5";
}elseif($numri>8){
    echo "$numri is bigger than 8";
}else{
    echo"$numri is less than 5 and 8";
}
//just for testing
echo "<br><br>";
$day="Elton";
switch($day){
    case "Monday":
    echo "Today it's Monday";
    break;

    case "Tuesday":
        echo "Today it's Tuesday";
        break;

        case "Wednesday":
            echo "Today it's Wednesday";
            break;

            case "Thursday":
                echo "Today it's Thursday";
                break;

                case "Friday":
                    echo "Today it's Friday";
                    break;

                    case "Saturday":
                        echo "Today it's Saturday";
                        break;

                        case "Sunday":
                            echo "Today it's Sunday";
                            break;

                            default:
                            echo"Invalid day";
                            break;
}
 echo "<br><br>";
$x=1;

while($x<=5){
    echo "The number is: $x   <br>";
    $x++;
}
echo "<br><br>";
// $x=1;
do{
    echo "The number is: $x   <br>";
    $x++;
}while($x<5);
echo "<br><br>";

for($x=0;$x<=10;$x++){
    echo "The number is:  $x  <br>";
}
echo "<br><br>";
$cars= array("BMW","AUDI", "TESLA");
foreach($cars as $car){
    echo"$car <br>";
}

echo "<br><br>";
$cars= array("BMW"=>20,"AUDI"=>25, "TESLA"=>30);
foreach($cars as $car=>$number){
    echo"$car=>$number<br>";
}
?>