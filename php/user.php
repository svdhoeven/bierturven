<?php
require_once('db.php');

$method = $_SERVER["REQUEST_METHOD"];

$response = "No valid method";

switch($method){
    case 'GET':
        if($users = ORM::for_table('user')->find_array()){
            echo json_encode($users);
            header('Content-Type: application/json');
            http_response_code(200);
        }
        else{
            http_response_code(500);
        }
        break;
    case 'POST':
        if(!empty($_GET['name'])){
            $name = $_GET['name'];
            $user = ORM::for_table('user')->create();
            $user->name = $name;
            $user->dateCreated = date("Y-m-d H:i:s");
            if($user->save()){
                http_response_code(201);
            }
            else{
                http_response_code(500);
            }
        }
        else{
            http_response_code(400);
        }
        break;
    case 'PUT':
        if(!empty($_GET['id']) && !empty($_GET['amount'])){
            $id = $_GET['id'];
            $amount = $_GET['amount'];
            $user = ORM::for_table('user')->where('id', $id)->find_one();
            $user->beer = $user->beer + $amount;
            if($user->save()){
                $history = ORM::for_table('history')->create();
                $history->date = date("Y-m-d H:i:s");
                $history->userId = $id;
                $history->amount = $amount;
                $history->currentAmount = $user->beer;
                if($history->save()){
                    http_response_code(200);
                }
                else{
                    http_response_code(202);
                }
            }
            else{
                http_response_code(500);
            }
        }
        else{
            http_response_code(400);
        }
        break;
    case 'DELETE':
        if(!empty($_GET['id'])){
            $id = $_GET['id'];
            if(ORM::for_table('user')->where('id', $id)->find_one()->delete()){
                http_response_code(204);
            }
            else{
                http_response_code(500);
            }
        }
        else{
            http_response_code(400);
        }
        break;
    default:
        //Method not found
        break;
}