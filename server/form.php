<?php
// Configuración de la conexión a la base de datos
$dbConfig = include 'database/db.config.php';

// Conexión a la base de datos
$dbConnectionFunction = include 'database/db.php';
$dbConnection = $dbConnectionFunction($dbConfig);

// Obtener datos del formulario
$email = isset($_POST['email']) ? $_POST['email'] : '';
$name = strstr($email, '@', true) ? strstr($email, '@', true) : $email;
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Validación de entrada
if (empty($email) || empty($password)) {
    echo "Error: El correo electrónico y la contraseña son obligatorios. <br>";
} else {
    // Preparar la consulta SQL con una sentencia preparada
    $query = "INSERT INTO usuario(nombre_usuario, email_usuario, password_usuario) VALUES (?, ?, ?)";
    $stmt = $dbConnection->prepare($query);
    // Vincular parámetros
    $stmt->bind_param("sss", $name, $email, $password);
    // Ejecutar la consulta
    $stmt->execute();
    // Verificar si la inserción fue exitosa
    if ($stmt->affected_rows > 0) {
        echo "Registro insertado correctamente. <br>";
        echo "Nombre: " . $name . " <br>";
        echo "Email: " . $email . " <br>";
    } else {
        echo "Error al insertar el registro. <br>";
    }
    // Cerrar la sentencia preparada
    $stmt->close();
}

// Cerrar la conexión
$dbConnection->close();
