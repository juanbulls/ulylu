<?php
$toto = isset($_REQUEST["toto"]) ? $_REQUEST["toto"] : (isset($argv[1]) ? end($argv) : null);
include('valentina.php');

echo $toto.'\n';
?>