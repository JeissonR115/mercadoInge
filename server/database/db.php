<?php
return function ($dbConfig){
    $host=$dbConfig['host'];
    $user=$dbConfig['user'];
    $password=$dbConfig['password'];
    $database=$dbConfig['database'];
    $connection = mysqli_connect($host,$user,$password,$database);
    return $connection;
}
?>