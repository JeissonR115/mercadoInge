<?php
class DB
{
    private $host;
    private $db;
    private $user;
    private $password;
    private $charset;

    public function __construct($dbConfig = null)
    {
        if ($dbConfig === null) {
            $dbConfig = require 'db.config.php';
        }
        $this->host = $dbConfig['host'];
        $this->user = $dbConfig['user'];
        $this->password = $dbConfig['password'];
        $this->db = $dbConfig['database'];
        $this->charset = 'CHARSET';
    }

    function connect()
    {
        try {
            $connection = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";charset=" . $this->charset;
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            $pdo = new PDO($connection, $this->user, $this->password, $options);
            error_log('Conexión a BD exitosa');
            return $pdo;
        } catch (PDOException $e) {
            error_log('Error connection: ' . $e->getMessage());
        }
    }
}
