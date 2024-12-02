<?php
$host='localhost:4307';
$user='root';
$pass='';
$db='shkolladigjitale';

try{
    $conn= new PDO("mysql:host=$host;dbname=$db", $user, $pass);

    // $sql= "CREATE TABLE users(id INT(6) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    // username VARCHAR(255) NOT NULL,
    // password VARCHAR(255) NOT NULL) ";


    

    // // $username= "Elton";
    // $password= password_hash("12345678",PASSWORD_DEFAULT);
    // $sql = "INSERT INTO users (username, password) VALUES ('Djellza', '$password')";

    // $sql="INSERT INTO users(username, password) VALUES ('$username','$password')";

    // $sql="ALTER TABLE users ADD email varchar(255)";

    //deleting a column
    // $sql="ALTER TABLE users DROP column email";





    
    $conn->exec($sql);
    $last_id = $conn->lastInsertId();
 
    // echo "User added successfully! User ID: " . $last_id;
    echo "COLUMN is deleted";
    echo "<br>";
 
} catch( Exception $e){
    echo"Something went wrong!";
}



?>