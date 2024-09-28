<?php
$base = isset($_REQUEST["base"]) ? $_REQUEST["base"] : (isset($argv[1]) ? $argv[1] : null);
echo $token = bin2hex(random_bytes(23));
?>