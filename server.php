<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode(array(
        array('id' => 1, 'name' => 'Luan'),
        array('id' => 2, 'name' => 'Name'),
    ));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    echo json_encode(array(
        $data,
        array('id' => 3, 'name' => 'Luan'),
        array('id' => 4, 'name' => 'Name'),
    ));
}