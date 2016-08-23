<?php
require_once('db.php');

$method = $_SERVER["REQUEST_METHOD"];

$response = "No valid method";
header('Content-Type: application/json');

switch($method){
    case 'GET':
        $query = "SELECT history.*, user.name FROM history JOIN user ON history.userId = user.id ORDER BY history.date DESC LIMIT 50";
        if($history = ORM::for_table('history')->raw_query($query)->find_array()){
            echo json_encode($history);
            http_response_code(200);
        }
        else{
            http_response_code(500);
        }
        break;
}