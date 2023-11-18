<?php
include_once 'libs/db.php';
class User extends DB{
    private $name;
    private $email;
    public function userExist(string $user, string $pass) : bool {
        $query = $this->connect()->prepare('SELECT FROM usuario WHERE nombre_usuario= :user AND password_usuario= :pass');
        $query->execute(['user'=> $user, 'pass'=> $pass]);
        return ($query->rowCount())? true:false ;
    }
    public function setUser(string $user) :void{
        $query =$this->connect()->prepare('SELECT FROM usuario WHERE nombre_usuario= :user');
        $query->execute(['user'=> $user]);
        foreach ($query as $currentUser) {
            $this->name = $currentUser['nombre_usuario'];
            $this->email = $currentUser['email_usuario'];
        }
    }
    public function getName() : string {
        return $this->name;
    }
}