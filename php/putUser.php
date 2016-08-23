<?php
require_once("idiorm/idiorm.php");
require_once("db.php");

//Check if name is set
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