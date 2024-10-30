<?php
@session_start();
require __DIR__.'/../App/Config/Conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usuario = $_POST['user'];
    $senha = $_POST['pass'];
    
    if($usuario ==="robsonic10@gmail.com" && $senha === "1234"){
        $retorno = ['retorno' => 'OK','login'=>$usuario];
        $_SESSION['sessao_ativa'] = 'S';
        $_SESSION['usuario'] = $usuario;
    }else if($usuario !="robsonic10@gmail.com"){
        $retorno = ['retorno' => 'Usuario'];
    } else if($senha !="1234"){
        $retorno = ['retorno' => 'Senha'];
    }
    
    echo json_encode($retorno);
    die();

} else {
    // Se não for uma solicitação POST, retorne um erro
    http_response_code(405); // Método não permitido
    echo json_encode(['erro' => 'Método não permitido']);
}
?>
