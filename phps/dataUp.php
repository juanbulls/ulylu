<?php
include('marlene.php');
include('valentina.php');
include('roles.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tab = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);
$col = isset($_REQUEST["col"]) ? $_REQUEST["col"] : (isset($argv[3]) ? $argv[3] : null);
$reg = isset($_REQUEST["reg"]) ? $_REQUEST["reg"] : (isset($argv[4]) ? $argv[4] : null);
$val = isset($_REQUEST["val"]) ? $_REQUEST["val"] : (isset($argv[5]) ? $argv[5] : null);

$rol = v($base);
if (!in_array('editarClientes', $roles[$rol])) {
    echo json_encode(["error" => "Usuario sin permisos"]);
    exit;
}

$tab = explode('_', $tab)[0];
                
try {
    if ( is_null($val) || $val === "" ){
        $insert_result = q("UPDATE $base.`$tab` SET `$col` = NULL WHERE id = '$reg';");
    } else {
        $insert_result = q("UPDATE $base.`$tab` SET `$col` = '$val' WHERE id = '$reg';");
    }

    $response = [
        "estado" => 'actualizado'
    ];
} catch (mysqli_sql_exception $e) {
    $response = [
        "error" => "Error actualizando dato: " . $e->getMessage()
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
