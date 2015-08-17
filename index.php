<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>BINGO GAME</title>
    <link href="css/bingo.css" rel="stylesheet" type="text/css" />
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.2.min.js" type="text/javascript"></script>
    <script src="js/my_bingo_ctrl.js" type="text/javascript"></script>
</head>
<body bgcolor="#000000">

    <!-- <div class="current" style="left:100px;"> -->
    <div class="current" >
      <table><tbody><tr>
            <td><div id="b_B" class=""><div class="button r144 l-green">B</div></div></td>
            <td><div id="b_I" class=""><div class="button r144 yellow">I</div></div></td>
            <td><div id="b_N" class=""><div class="button r144 orange">N</div></div></td>
            <td><div id="b_G" class=""><div class="button r144 purple">G</div></div></td>
            <td><div id="b_O" class=""><div class="button r144 aqua">O</div></div></td></tr></tbody></table></div>

    <div id ="start_message">
        <p> Enter your BINGO Room's name to start</p>

    </div>

    <div id="start_bingo">
        <input type="text" name="search_word" value="" id="input_text">
        <div class="a-button off" id="start_button">
            <div class="button aqua r24" style="margin: 1em 1em;">
                start</div>
        </div>
    </div>
    <div id ="error_message">
        <!-- <p> Enter your BINGO Room's name to start</p> -->
        <p></p>

    </div>



        <!-- <div class="current" id="current" style="top: 220px; left: 30px;"> -->
        <!-- <div class="button r256 aqua"></div></div> -->


        </div>
    <!-- <span class="walt-s">I wish you both always be happy and solve all problems together! -->
    <!-- </span><span class="walt-s">Love is the master key that opens the gates of happiness. -->
    <!--     - Oliver Wendell Holmes</span> -->
    <div id="log">
    </div>

    <audio id="audio" src="media/drumroll.mp3"></audio>


</body>
</html>
