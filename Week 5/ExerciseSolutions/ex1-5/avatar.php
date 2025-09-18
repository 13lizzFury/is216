<?php
// avatar.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$seed = substr(base_convert(random_int(0, PHP_INT_MAX), 10, 36), 0, 13);
$url  = "https://api.dicebear.com/7.x/pixel-art/svg?seed={$seed}";

echo json_encode(['seed' => $seed, 'url' => $url],
                 JSON_UNESCAPED_SLASHES);
