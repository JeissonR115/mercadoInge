<?php
class UserSession
{
    public function __construct()
    {
        session_start();
    }
    public function setCurrentUser(string $user){
        $_SESSION['user'] = $user;
    }
    public function getCurrentUser(){
        return $_SESSION['user'];
    }
    public function closeSession() :bool{
        session_unset();
        session_destroy();
        return session_status() === PHP_SESSION_NONE;
    }

}
