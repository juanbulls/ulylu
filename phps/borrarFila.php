<?php
include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);
$registro = isset($_REQUEST["reg"]) ? $_REQUEST["reg"] : (isset($argv[3]) ? $argv[3] : null);

v($base);

$tabla = explode('_', $tabla)[0];
                
try {
    q("DELETE FROM $base.`$tabla` WHERE id = '$registro';");

    $response = [
        "estado" => 'Registro eliminado.'
    ];
} catch (mysqli_sql_exception $e) {
    echo "DELETE $base.`$tabla` WHERE id = '$registro';";
    $response = [
        "error" => "Error eliminando: " . $e->getMessage()
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
