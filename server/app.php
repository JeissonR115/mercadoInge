<?php
// Configuración de la conexión a la base de datos
$dbConfig= include 'database/db.config.php'; 
// Conexión a la base de datos
$dbConnection= include 'database/db.php'; 

// Obtener datos del formulario
$name = $_POST['email'];
$email = $_POST['email'];
$password = $_POST['password'];
// Preparar la consulta SQL
$query = "INSERT INTO usuario(nombre_usuario, email_usuario, password_usuario) VALUES ('$name', '$email', '$password')";
// Ejecutar la consulta
mysqli_query($dbConnection($dbConfig),$query);

echo "nombre: ". $name." <br>";
echo "email: ". $email." <br>";

?>
