$(function(){
    var drumroll = document.getElementById("audio");
    $('#current').click(function(){
        $.get('gen.php',function(data){
            var changeSpeed = 70;
            var blinkSpeed = 150;
            var dummynum = 42;
            var blinknum = 4;
            drumroll.play();
                for (var i=1; i<=dummynum; i++){
                    dummyeffect(i);
                }
            realeffect();

            temp();

            function dummyeffect(i){
                var color = ["l-green", "yellow", "orange", "purple", "aqua"];
                var pos = Math.floor((data[i] - 1) / 15);
                setTimeout(function(){
                    $('#number')
                        .text(data[i])
                        .removeClass('l-green yellow orange purple aqua')
                        .addClass(color[pos]);
                    $('#b_' + data[i]).removeClass('off');
                },i*changeSpeed)
                setTimeout(function(){
                    $('#number')
                        $('#b_' + data[i]).addClass('off');
                },(i+1)*changeSpeed)
            }
            function realeffect(){
                var color = ["l-green", "yellow", "orange", "purple", "aqua"];
                var pos = Math.floor((data[0] - 1) / 15);
                for(var t=0; t<blinknum; t++){
                    setTimeout(function(){
                        $('#current').addClass('off')
                        $('#b_' + data[0]).addClass('off');
                    },(dummynum+1)*changeSpeed+2*t*blinkSpeed)
                    setTimeout(function(){
                        $('#current')
                            .removeClass('off');
                        $('#number')
                            .text(data[0])
                            .removeClass('l-green yellow orange purple aqua')
                            .addClass(color[pos]);
                        $('#b_' + data[0]).removeClass('off');
                    },(dummynum+1)*changeSpeed+(2*t+1)*blinkSpeed)
                }
            }

            function temp(){
                console.log(data);
            }
        });
    });

    $('#clear_button').click(function(){
        if(confirm('Are you sure to delete everytinig?')){
            $.get('start.php',function(data){});
            for (var i=1; i<=75; i++){
                $('#b_' + i).addClass('off');
            }
        }else{
            // alert('clearing canceled');
        }
    });

    $('#input_text').keyup(function(){
        $('#start_button').removeClass('off');
    });

    $('#start_button').click(function(){
        // console.log('function start');
        $.get('start.php',function(data){
                // console.log(data);
            // success:function(return_array){alert('success');},
            // error:function(){alert('error')},
        });
    });

});
