<?php
$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : (isset($argv[1]) ? end($argv) : null);

function v($b) {
    global $token;
    $data_result = q("SELECT * FROM $b.uszAccesos WHERE hash='$token';");

    if (is_null($token) || !mysqli_num_rows($data_result) == 1) {
        echo json_encode(["error" => "invalidado"]);
        exit;
    }
}
?>