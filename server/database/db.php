<?php
return function ($dbConfig) {
    $host = $dbConfig['host'];
    $user = $dbConfig['user'];
    $password = $dbConfig['password'];
    $database = $dbConfig['database'];
    $connection = new mysqli($host, $user, $password, $database);

    // Verificar la conexión
    if ($connection->connect_error) {
        die("Error de conexión: " . $connection->connect_error);
    }

    return $connection;
};
?>
