<?php
include('marlene.php');
$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
$tabla = isset($_REQUEST["tabla"]) ? $_REQUEST["tabla"] : (isset($argv[2]) ? $argv[2] : null);
$patron = isset($_REQUEST["patron"]) ? $_REQUEST["patron"] : (isset($argv[3]) ? $argv[3] : null);

$cols_result = q("SHOW COLUMNS FROM $base.$tabla");
$cols = [];
while ($row = mysqli_fetch_assoc($cols_result)) {
    if (ctype_upper($row['Field'][0])) {
        $cols[] = $row['Field'];
    }
}
$patronQ = "";
if (!is_null($patron)) { $patronQ = "WHERE Cliente_r LIKE '%$patron%'"; }
$data_result = q("SELECT * FROM $base.$tabla $patronQ ORDER BY id DESC");
$data = [];
while ($row = mysqli_fetch_assoc($data_result)) {
    $data[] = $row;
}

$response = [
    "cols" => $cols,
    "data" => $data
];

header('Content-Type: application/json');
echo json_encode($response);
?>
