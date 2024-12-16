<?php
// Të dhënat për lidhjen me bazën e të dhënave (përdorni 'mysql' si driver)
$host = 'localhost:4307';
$dbname = ''; // Mbajeni bosh për krijimin e bazës së të dhënave
$username = 'root'; // Ndryshoni sipas konfigurimit tuaj
$password = ''; // Vendosni fjalëkalimin tuaj

try {
    // Krijo një lidhje PDO
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Krijimi i bazës së të dhënave
    $dbNameToCreate = 'challenge';
    $sqlCreateDatabase = "CREATE DATABASE IF NOT EXISTS $dbNameToCreate";
    $pdo->exec($sqlCreateDatabase);
    echo "Baza e të dhënave '$dbNameToCreate' u krijua me sukses.<br>";

    // Lidhja me bazën e të dhënave të krijuar
    $pdo->exec("USE $dbNameToCreate");

    // Krijimi i tabelës
    $tableName = 'users';
    $sqlCreateTable = "
        CREATE TABLE IF NOT EXISTS $tableName (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            username VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            confirm_password VARCHAR(255) NOT NULL,
            is_admin BOOLEAN DEFAULT FALSE
        )
    ";
    $pdo->exec($sqlCreateTable);
    echo "Tabela '$tableName' u krijua me sukses.<br>";

    $bookingsTableName = 'bookings';
    $sqlCreateBookingsTable = "
        CREATE TABLE IF NOT EXISTS $bookingsTableName (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            movie_id int NOT NULL,
            movie_name VARCHAR(100) NOT NULL,
            user_email VARCHAR(100) NOT NULL,
            number_of_tickets INT NOT NULL,
            booking_date DATETIME NOT NULL,
            booking_time TIME NOT NULL,
            status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (user_email) REFERENCES users(email) ON DELETE CASCADE
        )
    ";
    $pdo->exec($sqlCreateBookingsTable);
    echo "Tabela '$bookingsTableName' u krijua me sukses.<br>";

    $moviesTableName = 'movies';
    $sqlCreateBookingsTable = "
        CREATE TABLE IF NOT EXISTS $moviesTableName (
            id INT AUTO_INCREMENT PRIMARY KEY,
            movie_name VARCHAR(100) NOT NULL,
            movie_description VARCHAR(1000) NOT NULL,
            movie_quality VARCHAR(30) NOT NULL
        )
    ";
    $pdo->exec($sqlCreateBookingsTable);
    echo "Tabela '$moviesTableName' u krijua me sukses.<br>";

} catch (PDOException $e) {
    echo "Gabim: " . $e->getMessage();
}
