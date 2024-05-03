<?php

// Validate the request is coming from GitHub
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE'] ?? '';
$payload = file_get_contents('php://input');
if (!verify_signature($payload, $signature)) {
    header('HTTP/1.0 403 Forbidden');
    die("Firma invalida.");
}

// Execute git pull
$output = shell_exec('cd /var/www/html && git pull');
echo "Pull Ok. \n";

// Verify the signature
function verify_signature($payload, $signature) {
    $secret = 'rappiMeLaPela';
    $hash = "sha1=" . hash_hmac('sha1', $payload, $secret);
    return hash_equals($hash, $signature);
}
