<?php
// require_once 'controllers/errors.php';

// class App
// {
//     function __construct()
//     {

//         $url = isset($_GET['url']) ? $_GET['url'] : null;
        
//         $url = rtrim($url, '/');
//         //var_dump($url);
//         /*
//             controlador->[0]
//             método->[1]
//             parameter->[2]
//         */
//         $url = explode('/', $url);
//         // cuando se ingresa sin definir controlador
//         if (empty($url[0])) {
//             $archivoController = 'controllers/login.php';
//             require_once $archivoController;
//             $controller = new Login();
//             $controller->loadModel('login');
//             $controller->render();
//             return false;
//         }
//         $archivoController = 'controllers/' . $url[0] . '.php';

//         if (file_exists($archivoController)) {
//             require_once $archivoController;

//             // inicializar controlador
//             $controller = new $url[0];
//             $controller->loadModel($url[0]);

//             // si hay un método que se requiere cargar
//             if (isset($url[1])) {
//                 if (method_exists($controller, $url[1])) {
//                     if (isset($url[2])) {
//                         //el método tiene parámetros
//                         //sacamos e # de parametros
//                         $nParam = sizeof($url) - 2;
//                         //crear un arreglo con los parametros
//                         $params = [];
//                         //iterar
//                         for ($i = 0; $i < $nParam; $i++) {
//                             array_push($params, $url[$i + 2]);
//                         }
//                         //pasarlos al metodo   
//                         $controller->{$url[1]}($params);
//                     } else {
//                         $controller->{$url[1]}();
//                     }
//                 } else {
//                     $controller = new Errors();
//                 }
//             } else {
//                 $controller->render();
//             }
//         } else {
//             $controller = new Errors();
//         }
//     }
    
// }
