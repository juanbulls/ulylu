<?php
include('marlene.php');

$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : (isset($argv[1]) ? $argv[1] : null);

echo "token: ".$token;
/*
function v($base) {
    $data_result = q("SELECT * FROM $base.uszAccesos WHERE hash='$token';");

    echo "contador: ". is_null($token);
    if (is_null($token) || !mysqli_num_rows($data_result) == 1) {
        echo json_encode(["error" => "invalidado"]);
        exit;
    }
}
v('bauer');*/
?>