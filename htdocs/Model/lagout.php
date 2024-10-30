<?php 

@session_start();

if(isset($_SESSION['sessao_ativa'])){
    @session_destroy();
    $LOCAL= __FILE__;
    
    echo "<script>window.location.assign('$LOCAL')</script>";
    exit();
}else{
   header('refresh:0 ;url=../index.php');

}