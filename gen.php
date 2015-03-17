<?php
function gen_number(){
    $i = mt_rand(1,75);
    return $i;
}

$rs = array(
    "result" =>  htmlspecialchars(gen_number(),ENT_QUOTES,"utf-8"),
    // "result" =>  htmlspecialchars("2",ENT_QUOTES,"utf-8"),
);
header('Content-type: application/json; charset=utf-8');
echo json_encode($rs);
?>
