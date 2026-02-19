<?php
$host = "localhost";
$user = "root";
$pass = "";    
$dbname = "shop";

$conn = new mysqli(hostname: $host, username: $user, password: $pass, database: $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
