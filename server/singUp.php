    <?php
    include_once 'libs/user.php';
    include_once 'libs/userSession.php';

    // Obtener datos del formulario
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $name = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Validación de entrada
    $user = new User();
    if (!$user->userExist($name) && !$user->userExist($email)) {
        $user->addUser($name, $email, $password);
        header("Location: /pages/login.html");
    }
   
    echo '<script>alert("El usuario ya existe."); window.location.href = "/pages/signUp.html";</script>';

