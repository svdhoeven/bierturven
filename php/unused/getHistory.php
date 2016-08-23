<?php
require_once('db.php');

if(!empty($_GET['id'])) {
    $id = $_GET['id'];
    if(!empty($_GET['limit'])){
        $limit = $_GET['limit'];
        $query = "SELECT * FROM history WHERE userId = '$id' AND date > NOW() - INTERVAL '$limit' DAY";
        $limitHistory = ORM::for_table('history')->raw_query($query)->order_by_asc('date')->find_array();
        $allHistory = ORM::for_table('history')->where('userId', $id)->order_by_asc('date')->find_array();
        $history = [
            "limitHistory" => $limitHistory,
            "allHistory" => $allHistory
        ];
    }
    else{
        $history = ORM::for_table('history')->where('userId', $id)->order_by_asc('date')->find_array();
    }

    echo json_encode($history);
    http_response_code(200);
}
else{
    http_response_code(400);
}