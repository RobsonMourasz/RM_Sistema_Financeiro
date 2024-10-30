<?php
@session_start();

if(!isset($_SESSION['sessao_ativa']) || $_SESSION['sessao_ativa'] !== "S"){
    session_destroy();
    header('location: lagout.php');
}