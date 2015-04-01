<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>BINGO GAME</title>
    <link href="css/bingo.css" rel="stylesheet" type="text/css" />
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.2.min.js" type="text/javascript"></script>
    <script src="js/my_bingo_ctrl.js" type="text/javascript"></script>
</head>
<body>
    <!-- <div class="bingo" id="bingo"> -->
        <!-- <span class="walt">BINGO</span> -->
        <div class="a-button" id="start_button">
            <div class="button aqua r24" style="margin: 1em 1em;">
                start</div>
        </div>
        <div class="a-button" id="clear_button">
            <div class="button aqua r24" style="margin: 1em 1em;">
                clear</div>
        </div>
        <!-- <div class="a&#45;button" id="new_button"> -->
        <!--     <div class="button aqua r24" style="margin: 1em 1em;"> -->
        <!--         new</div> -->
        <!-- </div> -->
    <!-- </div> -->

    <div class="current" style="left:360px;">
      <table><tbody><tr>
            <td><div id="b_B" class=""><div class="button r144 l-green">B</div></div></td>
            <td><div id="b_I" class=""><div class="button r144 yellow">I</div></div></td>
            <td><div id="b_N" class=""><div class="button r144 orange">N</div></div></td>
            <td><div id="b_G" class=""><div class="button r144 purple">G</div></div></td>
            <td><div id="b_O" class=""><div class="button r144 aqua">O</div></div></td></tr></tbody></table></div>

     <div class="current" style="top:300px;left:360px;">
    <table><tbody>
        <tr>
          <td><div id="b_1" class="off"><div class="button r48 l-green">1</div></div></td>
          <td><div id="b_6" class="off"><div class="button r48 l-green">6</div></div></td>
          <td><div id="b_11" class="off"><div class="button r48 l-green">11</div></div></td>
          <td><div id="b_16" class="off"><div class="button r48 yellow">16</div></div></td>
          <td><div id="b_21" class="off"><div class="button r48 yellow">21</div></div></td>
          <td><div id="b_26" class="off"><div class="button r48 yellow">26</div></div></td>
          <td><div id="b_31" class="off"><div class="button r48 orange">31</div></div></td>
          <td><div id="b_36" class="off"><div class="button r48 orange">36</div></div></td>
          <td><div id="b_41" class="off"><div class="button r48 orange">41</div></div></td>
          <td><div id="b_46" class="off"><div class="button r48 purple">46</div></div></td>
          <td><div id="b_51" class="off"><div class="button r48 purple">51</div></div></td>
          <td><div id="b_56" class="off"><div class="button r48 purple">56</div></div></td>
          <td><div id="b_61" class="off"><div class="button r48 aqua">61</div></div></td>
          <td><div id="b_66" class="off"><div class="button r48 aqua">66</div></div></td>
          <td><div id="b_71" class="off"><div class="button r48 aqua">71</div></div></td>
        </tr>

        <tr>
          <td><div id="b_2" class="off"><div class="button r48 l-green">2</div></div></td>
          <td><div id="b_7" class="off"><div class="button r48 l-green">7</div></div></td>
          <td><div id="b_12" class="off"><div class="button r48 l-green">12</div></div></td>
          <td><div id="b_17" class="off"><div class="button r48 yellow">17</div></div></td>
          <td><div id="b_22" class="off"><div class="button r48 yellow">22</div></div></td>
          <td><div id="b_27" class="off"><div class="button r48 yellow">27</div></div></td>
          <td><div id="b_32" class="off"><div class="button r48 orange">32</div></div></td>
          <td><div id="b_37" class="off"><div class="button r48 orange">37</div></div></td>
          <td><div id="b_42" class="off"><div class="button r48 orange">42</div></div></td>
          <td><div id="b_47" class="off"><div class="button r48 purple">47</div></div></td>
          <td><div id="b_52" class="off"><div class="button r48 purple">52</div></div></td>
          <td><div id="b_57" class="off"><div class="button r48 purple">57</div></div></td>
          <td><div id="b_62" class="off"><div class="button r48 aqua">62</div></div></td>
          <td><div id="b_67" class="off"><div class="button r48 aqua">67</div></div></td>
          <td><div id="b_72" class="off"><div class="button r48 aqua">72</div></div></td>
        </tr>
        <tr>
          <td><div id="b_3" class="off"><div class="button r48 l-green">3</div></div></td>
          <td><div id="b_8" class="off"><div class="button r48 l-green">8</div></div></td>
          <td><div id="b_13" class="off"><div class="button r48 l-green">13</div></div></td>
          <td><div id="b_18" class="off"><div class="button r48 yellow">18</div></div></td>
          <td><div id="b_23" class="off"><div class="button r48 yellow">23</div></div></td>
          <td><div id="b_28" class="off"><div class="button r48 yellow">28</div></div></td>
          <td><div id="b_33" class="off"><div class="button r48 orange">33</div></div></td>
          <td><div id="b_38" class="off"><div class="button r48 orange">38</div></div></td>
          <td><div id="b_43" class="off"><div class="button r48 orange">43</div></div></td>
          <td><div id="b_48" class="off"><div class="button r48 purple">48</div></div></td>
          <td><div id="b_53" class="off"><div class="button r48 purple">53</div></div></td>
          <td><div id="b_58" class="off"><div class="button r48 purple">58</div></div></td>
          <td><div id="b_63" class="off"><div class="button r48 aqua">63</div></div></td>
          <td><div id="b_68" class="off"><div class="button r48 aqua">68</div></div></td>
          <td><div id="b_73" class="off"><div class="button r48 aqua">73</div></div></td>
        </tr>
        <tr>
          <td><div id="b_4" class="off"><div class="button r48 l-green">4</div></div></td>
          <td><div id="b_9" class="off"><div class="button r48 l-green">9</div></div></td>
          <td><div id="b_14" class="off"><div class="button r48 l-green">14</div></div></td>
          <td><div id="b_19" class="off"><div class="button r48 yellow">19</div></div></td>
          <td><div id="b_24" class="off"><div class="button r48 yellow">24</div></div></td>
          <td><div id="b_29" class="off"><div class="button r48 yellow">29</div></div></td>
          <td><div id="b_34" class="off"><div class="button r48 orange">34</div></div></td>
          <td><div id="b_39" class="off"><div class="button r48 orange">39</div></div></td>
          <td><div id="b_44" class="off"><div class="button r48 orange">44</div></div></td>
          <td><div id="b_49" class="off"><div class="button r48 purple">49</div></div></td>
          <td><div id="b_54" class="off"><div class="button r48 purple">54</div></div></td>
          <td><div id="b_59" class="off"><div class="button r48 purple">59</div></div></td>
          <td><div id="b_64" class="off"><div class="button r48 aqua">64</div></div></td>
          <td><div id="b_69" class="off"><div class="button r48 aqua">69</div></div></td>
          <td><div id="b_74" class="off"><div class="button r48 aqua">74</div></div></td>
        </tr>
        <tr>
          <td><div id="b_5" class="off"><div class="button r48 l-green">5</div></div></td>
          <td><div id="b_10" class="off"><div class="button r48 l-green">10</div></div></td>
          <td><div id="b_15" class="off"><div class="button r48 l-green">15</div></div></td>
          <td><div id="b_20" class="off"><div class="button r48 yellow">20</div></div></td>
          <td><div id="b_25" class="off"><div class="button r48 yellow">25</div></div></td>
          <td><div id="b_30" class="off"><div class="button r48 yellow">30</div></div></td>
          <td><div id="b_35" class="off"><div class="button r48 orange">35</div></div></td>
          <td><div id="b_40" class="off"><div class="button r48 orange">40</div></div></td>
          <td><div id="b_45" class="off"><div class="button r48 orange">45</div></div></td>
          <td><div id="b_50" class="off"><div class="button r48 purple">50</div></div></td>
          <td><div id="b_55" class="off"><div class="button r48 purple">55</div></div></td>
          <td><div id="b_60" class="off"><div class="button r48 purple">60</div></div></td>
          <td><div id="b_65" class="off"><div class="button r48 aqua">65</div></div></td>
          <td><div id="b_70" class="off"><div class="button r48 aqua">70</div></div></td>
          <td><div id="b_75" class="off"><div class="button r48 aqua">75</div></div></td>
        </tr>
        </tbody></table>
        </div>


    <!-- <form action="" method="post" style="top: 220px; left: 30px;"> -->
    <!-- <button> -->
        <!-- Generate Number -->
        <font size="2em">
        <div class="" id="current" >
        <div class="button r256 aqua" id="number">
        </div></div>
        </font>

    <!-- </button> -->
    <!-- </form> -->
        <!-- <div class="current" id="current" style="top: 220px; left: 30px;"> -->
        <!-- <div class="button r256 aqua"></div></div> -->


        </div>
    <!-- <span class="walt-s">I wish you both always be happy and solve all problems together! -->
    <!-- </span><span class="walt-s">Love is the master key that opens the gates of happiness. -->
    <!--     - Oliver Wendell Holmes</span> -->
    <div id="log">
    </div>


</body>
</html>
