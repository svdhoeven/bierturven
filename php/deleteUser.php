<?php
require_once("db.php");

//Check if name is set
if(!empty($_GET['name'])){
    $name = $_GET['name'];
    if(ORM::for_table('user')->where('name', $name)->find_one()->delete()){
        http_response_code(204);
    }
    else{
        http_response_code(500);
    }
}
else{
    http_response_code(400);
}