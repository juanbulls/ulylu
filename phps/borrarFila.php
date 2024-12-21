<?php
include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);
$registro = isset($_REQUEST["reg"]) ? $_REQUEST["reg"] : (isset($argv[4]) ? $argv[4] : null);

// v($base);

$tabla = explode('_', $tabla)[0];
                
try {
    q("DELETE $base.`$tabla` WHERE id = '$registro';");

    $response = [
        "estado" => 'actualizado'
    ];
} catch (mysqli_sql_exception $e) {
    $response = [
        "error" => "Error eliminando: " . $e->getMessage()
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
