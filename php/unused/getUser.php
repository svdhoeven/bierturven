<?php
require_once('db.php');

if($users = ORM::for_table('user')->find_array()){
    echo json_encode($users);
    http_response_code(200);
}
else{
    http_response_code(500);
}

?>