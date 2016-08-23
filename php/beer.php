<?php
require_once('db.php');

$method = $_SERVER["REQUEST_METHOD"];

$response = "No valid method";

switch($method){
    case 'GET':
        if($beers = ORM::for_table('beer')->find_array()){
            echo json_encode($beers);
            header('Content-Type: application/json');
            http_response_code(200);
        }
        else{
            http_response_code(500);
        }
        break;
    default:
        //Method not found
        break;
}