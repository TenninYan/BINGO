$(function(){
    // $('#new_button').click(function(){
    $('#current').click(function(){
        $.get('gen.php',function(data){
            var color = ["l-green", "yellow", "orange", "purple", "aqua"];
            var pos = Math.floor((data[0] - 1) / 15);
            $('#number')
                .text(data[0])
                .removeClass('l-green yellow orange purple aqua')
                .addClass(color[pos]);
            $('#b_' + data[0]).removeClass('off');
            $('#b_' + data[1]).removeClass('off');
            $('#b_' + data[2]).removeClass('off');
            // $('#number').text(data.result);
            // $('#b_' + data.result).removeClass('off');
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
