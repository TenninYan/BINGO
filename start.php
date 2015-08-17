<?php
mkdir('./teny',0777);

$fp = fopen('./teny/teny.txt','w');
$numbers = array();
for ($i=0;$i<=75;$i++){
    array_push($numbers,0);
}
foreach($numbers as $data){
    fputs($fp,$data."\n");
}
fclose($fp);
?>
