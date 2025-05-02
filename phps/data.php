<?php
// se puede probar comentando v()

include('marlene.php');
include('valentina.php');

$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);
$orden = isset($_REQUEST["orden"]) ? $_REQUEST["orden"] : (isset($argv[3]) ? $argv[3] : null);
$patron = isset($_REQUEST["patron"]) ? $_REQUEST["patron"] : (isset($argv[4]) ? $argv[4] : null);
$offset = isset($_REQUEST["offset"]) ? $_REQUEST["offset"] : (isset($argv[5]) ? $argv[5] : null);
$limit = 20;

v($base); // Descomentar cuando termine debugg

$cols_result = q("SHOW COLUMNS FROM $base.$tabla");
$cols = [];
while ($row = mysqli_fetch_assoc($cols_result)) {
    if (ctype_upper($row['Field'][0])) {
        $cols[] = $row['Field'];
    }
}

$patronQ = "";
if(!is_null($patron)) { $patronQ = "WHERE `{$cols[0]}` LIKE '%$patron%'"; }

$ordenQ = "ORDER BY id DESC";
if(!is_null($orden)) { $ordenQ = "ORDER BY $orden" ; }

$limitQ = "";
if(!is_null($offset)) { 
    $offsetPosition = $offset * $limit;
    $limitQ = "LIMIT $limit OFFSET $offsetPosition";
}

$data_result = q("SELECT * FROM $base.$tabla $patronQ $ordenQ $limitQ;");
$data = [];
while ($row = mysqli_fetch_assoc($data_result)) {
    $data[] = $row;
}

$response = [
    "cols" => $cols,
    "data" => $data
];

// Seccion ordenado por ... lo mismo que decir filtros
if (!is_null($orden)) {
    $patronResumen = "";
    if(!is_null($patron)) { $patronResumen = "WHERE Cliente_r LIKE '%$patron%'"; }

    $resumen_result = q("SELECT $orden, SUM(Cantidad) as Cantidad FROM $base.$tabla $patronResumen GROUP BY $orden ORDER BY $orden;");
    $resumen = [];
    while ($row = mysqli_fetch_assoc($resumen_result)) {
        $resumen[] = $row;
    }
    $response['resumen'] = $resumen;
}

header('Content-Type: application/json');
echo json_encode($response);
?>
