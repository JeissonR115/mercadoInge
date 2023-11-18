<?php
include_once 'libs/db.php';
class User extends DB{
    private $email;
    private $name;
    public function userExist($emailOrName, $pass) {
        $column = filter_var($emailOrName, FILTER_VALIDATE_EMAIL) ? 'email_usuario' : 'nombre_usuario';
        $query = $this->connect()->prepare("SELECT * FROM usuario WHERE $column = :emailOrName AND password_usuario = :pass");
        $query->execute(['emailOrName' => $emailOrName, 'pass' => $pass]);

        return ($query->rowCount()) ? true: false; 
    }
    
    public function setUser( $emailOrName ) {
        $column = filter_var($emailOrName, FILTER_VALIDATE_EMAIL) ? 'email_usuario' : 'nombre_usuario';
        $query =$this->connect()->prepare("SELECT * FROM usuario WHERE $column= :emailOrName");
        $query->execute(['emailOrName'=> $emailOrName]);
        foreach ($query as $currentUser) {
            $this->name = $currentUser['nombre_usuario'];
            $this->email = $currentUser['email_usuario'];
        }
    }
    public function getName()  {
        return $this->name;
    }
}