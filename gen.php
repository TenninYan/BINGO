<?php
function gen_number(){
    $i = mt_rand(1,75);
    return $i;
}

    // $fp = fopen("teny.txt","r");
    $ret_array = file('teny.txt');
    var_dump($ret_array);
    do{
        $real_num = gen_number();
        if ($ret_array($real_num) == 0){
            $rs = array(htmlspecialchars($real_num,ENT_QUOTES,"utf-8"));
            $ret_array($real_num) = 1;
            // $fp = fopen('teny.txt','w');
            // foreach($ret_array as $data){
            //     fputs($fp,$data."\n");
            // }
            // fclose($fp);
            break;
        }
    }while(0);
    // $real_num = htmlspecialchars(gen_number(),ENT_QUOTES,"utf-8");
    

    for ($i=1;$i<20;$i++){
        array_push($rs,htmlspecialchars(gen_number(),ENT_QUOTES,"utf-8"));
    }


header('Content-type: application/json; charset=utf-8');
echo json_encode($rs);
?>
