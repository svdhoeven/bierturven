<?php
require_once("db.php");

//Check if name is set
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