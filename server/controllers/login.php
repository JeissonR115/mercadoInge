<?php
class Login{
    public function __construct() {
        error_log('inicio de login::construct -> inicio Login');
    }
    public function loadModel(string $text = '/'){

    }
    public function render(){

    }
}
// Configuración de la conexión a la base de datos
// $dbConfig = include 'database/db.config.php';

// // Conexión a la base de datos
// $dbConnectionFunction = include 'database/db.php';
// $dbConnection = $dbConnectionFunction($dbConfig);

// // Obtener datos del ingreso
// $email = isset($_POST['email']) ? $_POST['email'] : '';
// $password = isset($_POST['password']) ? $_POST['password'] : '';

// // Preparar la consulta SQL con una sentencia preparada
// $query = "SELECT * FROM usuario WHERE email_usuario=? and password_usuario=?";
// $stmt = $dbConnection->prepare($query);
// $stmt->bind_param('ss', $email, $password);
// $stmt->execute();
// $stmt->store_result();
// $numRows = $stmt->num_rows;

// if ($numRows) {
//     header("Location: /index.html");
// } else {
//     header("Location: /pages/form.html?error=1");
// }

// // Cerrar la conexión
// $stmt->close();
// $dbConnection->close();
