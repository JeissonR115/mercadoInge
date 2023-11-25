<?php
include_once 'libs/user.php';
include_once 'libs/userSession.php';

$user = new User();
$userSession = new UserSession();
// Verificar si hay un usuario en sesión
if (isset($_SESSION['user'])) {
    $user->setUser($userSession->getCurrentUser());
    header("Location: /pages/about-us.html");
} elseif (isset($_POST['emailOrUser']) && isset($_POST['password'])) {
    $emailOrUserForm = $_POST['emailOrUser'];
    $passwordForm = $_POST['password'];
    if ($user->userLogin($emailOrUserForm, $passwordForm)) {
        $userSession->setCurrentUser($emailOrUserForm);
        $user->setUser($emailOrUserForm);
        header("Location: /pages/admin.html");
    } else {
        header("Location: /pages/login.html?error=1");
    }
} else {
    header("Location: /pages/login.html");
    exit(); 
}
