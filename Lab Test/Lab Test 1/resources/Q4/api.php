<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Read the JSON file
$file_loc = 'bike_stations.json';
$stations = json_decode(file_get_contents($file_loc), true);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        echo json_encode($stations);
        break;

    case 'POST':
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $station_id = $data->station_id;
        $action = $data->action;
        $station_index = array_search($station_id, array_column($stations, 'id'));

        if ($action === 'rent') {
            if ($stations[$station_index]['available_bikes'] > 0) {
                $stations[$station_index]['available_bikes']--;
                $stations[$station_index]['available_docks']++;
                echo json_encode(['message' => 'Bike rented successfully']);
            } else {
                http_response_code(400);
            }
        } elseif ($action === 'return') {
            if ($stations[$station_index]['available_docks'] > 0) {
                $stations[$station_index]['available_bikes']++;
                $stations[$station_index]['available_docks']--;
                echo json_encode(['message' => 'Bike returned successfully']);
            } else {
                http_response_code(400);
            }
        } else {
            http_response_code(400);
        }

        file_put_contents($file_loc, json_encode($stations, JSON_PRETTY_PRINT));
        break;

    case 'OPTIONS':
        http_response_code(200);
        break;

    default:
        http_response_code(405);
        break;
}