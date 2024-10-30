<?php
require_once('config');
require_once('funcoes.php');

$conexao = new mysqli(DB_SERVIDOR,DB_USERNAME,DB_PASSWORD,DB_DATABASE,DB_PORT) or die($conexao->errno);
