$(function(){
    $('#new_button').click(function(){
        $.get('gen.php',function(data){
            $('#number').text(data.result);
            $('#b_' + data.result).removeClass('off');
        });
    });

    $('#clear_button').click(function(){
        if(confirm('Are you sure to delete everytinig?')){
            for (var i=1; i<=75; i++){
                $('#b_' + i).addClass('off');
            }
        }else{
            // alert('clearing canceled');
        }
    });
});
