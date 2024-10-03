<?php
include('marlene.php');

$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : (isset($argv[1]) ? $argv[1] : null);

function v($base) {
    global $token;
    $data_result = q("SELECT * FROM $base.uszAccesos WHERE hash='$token';");

    if (is_null($token) || !mysqli_num_rows($data_result) == 1) {
        echo json_encode(["error" => "invalidado"]);
        exit;
    }
}
v('bauer');
?>