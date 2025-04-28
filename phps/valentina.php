<?php
$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : null;

function v($b) {
    global $token;
    $data_result = q("SELECT * FROM $b.uszAccesos WHERE hash='$token';");

    if (is_null($token) || !mysqli_num_rows($data_result) == 1) {
        echo json_encode(["error" => "Usuario no validado"]);
        exit;
    }

    $row = mysqli_fetch_assoc($data_result);
    return $row['rol'];
}
?>