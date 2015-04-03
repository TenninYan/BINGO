<?php
function gen_number(){
    $i = mt_rand(1,75);
    return $i;
}
    $fp = fopen("teny.txt","r");
    // $ret_array = file('teny.txt');
    // var_dump($ret_array);
    $numbers = array();
    while (!feof($fp)){
        array_push($numbers,fgets($fp));
    }
        // echo "array pushed";
    // var_dump($numbers);
    //     if ($ret_array($real_num) == 0){
    //         $rs = array(htmlspecialchars($real_num,ENT_QUOTES,"utf-8"));
    //         $ret_array($real_num) = 1;
    //         fclose($fp);
    //         break;
    //     }
    // $real_num = htmlspecialchars(gen_number(),ENT_QUOTES,"utf-8");
//
//
//
//
    //gen_first
$rs = array();
do{
$real_num = gen_number();
if($numbers[$real_num] == 0){
    $numbers[$real_num] = "1\n";
    array_push($rs,htmlspecialchars($real_num,ENT_QUOTES,"utf-8"));
    break;
}

}while(1);
//gen_dummy
for ($i=1;$i<43;$i++){
    do{
        $real_num = gen_number();
        if($numbers[$real_num] == 0){
            array_push($rs,htmlspecialchars($real_num,ENT_QUOTES,"utf-8"));
            break;
        }
        
    }while(1);
    // if($numbers[1] == 0){
    //     array_push($rs,htmlspecialchars(0,ENT_QUOTES,"utf-8"));
    // }else{
    //     array_push($rs,htmlspecialchars(1,ENT_QUOTES,"utf-8"));
    
    

    }
    // array_push($rs,htmlspecialchars(gen_number(),ENT_QUOTES,"utf-8"));
    // array_push($rs,htmlspecialchars(1,ENT_QUOTES,"utf-8"));
fclose($fp);
// var_dump($numbers);
header('Content-type: application/json; charset=utf-8');
echo json_encode($rs);

$fp = fopen("teny.txt","w");
foreach($numbers as $data){
    fputs($fp,$data);
}
fclose($fp);

?>
