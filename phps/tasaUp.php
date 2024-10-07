<?php
include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tasa = isset($_REQUEST["tasa"]) ? $_REQUEST["tasa"] : (isset($argv[2]) ? $argv[2] : null);

v($base);
                
try {
    $insert_result = q("UPDATE $base.setup SET Valor ='$tasa' WHERE Param = 'TRM';");

    $response = [
        "estado" => 'actualizado'
    ];
} catch (mysqli_sql_exception $e) {
    $response = [
        "error" => "Error ingresando tasa"
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
