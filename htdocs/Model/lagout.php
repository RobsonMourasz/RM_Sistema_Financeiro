<?php

@session_start();

if (isset($_SESSION['sessao_ativa'])) {
    @session_destroy();
    header('refresh:0 ;url=../index.html');
    exit();
} else {
    header('refresh:0 ;url=../index.html');
    die();
}
