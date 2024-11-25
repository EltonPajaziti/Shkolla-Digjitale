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
?>