<?php
include('marlene.php');
// include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tab = isset($_REQUEST["tab"]) ? $_REQUEST["tab"] : (isset($argv[2]) ? $argv[2] : null);
$col = isset($_REQUEST["col"]) ? $_REQUEST["col"] : (isset($argv[3]) ? $argv[3] : null);
$reg = isset($_REQUEST["reg"]) ? $_REQUEST["reg"] : (isset($argv[4]) ? $argv[4] : null);
$val = isset($_REQUEST["val"]) ? $_REQUEST["val"] : (isset($argv[5]) ? $argv[5] : null);

// v($base);
                
try {
    // echo "UPDATE $base.`$tab` SET `$col` = '$val' WHERE id = '$reg';";
    $insert_result = q("UPDATE $base.`$tab` SET `$col` ='$val' WHERE id = '$reg';");

    $response = [
        "estado" => 'actualizado'
    ];
} catch (mysqli_sql_exception $e) {
    $response = [
        "error" => "Error ingresando dato"
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
