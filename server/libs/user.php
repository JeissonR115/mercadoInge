<?php
include_once 'libs/db.php';
class User extends DB
{
    private $email;
    private $name;
    public function userExist($emailOrName)
    {
        $column = filter_var($emailOrName, FILTER_VALIDATE_EMAIL) ? 'email_usuario' : 'nombre_usuario';
        $query = $this->connect()->prepare("SELECT * FROM usuario WHERE $column = :emailOrName");
        $query->execute(['emailOrName' => $emailOrName]);

        return ($query->rowCount()) ? true : false;
    }
    public function userLogin($emailOrName, $pass)
    {
        $column = filter_var($emailOrName, FILTER_VALIDATE_EMAIL) ? 'email_usuario' : 'nombre_usuario';
        $query = $this->connect()->prepare("SELECT * FROM usuario WHERE $column = :emailOrName AND password_usuario = :pass ");
        $query->execute([
            'emailOrName' => $emailOrName,
            'pass' => $pass
        ]);

        return ($query->rowCount()) ? true : false;
    }
    public function setUser($emailOrName)
    {
        $column = filter_var($emailOrName, FILTER_VALIDATE_EMAIL) ? 'email_usuario' : 'nombre_usuario';
        $query = $this->connect()->prepare("SELECT * FROM usuario WHERE $column= :emailOrName");
        $query->execute(['emailOrName' => $emailOrName]);
        foreach ($query as $currentUser) {
            $this->name = $currentUser['nombre_usuario'];
            $this->email = $currentUser['email_usuario'];
        }
    }
    public function addUser($name, $email, $pass, $roll = 3)
    {
        $query = $this->connect()->prepare("INSERT INTO usuario(nombre_usuario, email_usuario, password_usuario,roll_usuario_id ) VALUES (:name, :email, :pass,:roll )");
        $query->execute([
            'name' => $name,
            'email' => $email,
            'pass' => $pass,
            'roll' => $roll
        ]);
    }
    public function getName()
    {
        return $this->name;
    }
}
