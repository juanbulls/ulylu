<?php
$serv = "localhost";
$usr = 'root';
$clave = '12ufagot';
$con = mysqli_connect($serv, $usr, $clave);
$con ->set_charset("utf8");
function q($lin){
    global $con;
    return mysqli_query($con, $lin);
}
?>