/// <reference path="jquery.js" />
/// <reference path="bingo.js" />
/// <reference path="card_view.js" />

/*
* BINGO
*
* Copyright (c) 2012 M., Koji
* Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*
* Date: 2012-02-01 17:34:21 -0900
* Revision: 0001
*/

htmlBINGO = function (seed) {

    BINGO.reset();
    this.loadCards();
    if (seed != null) {
        //乱数の基底を指定する
        BINGO.Random.pos = seed;
    } else {
        BINGO.Random.pos = 0;
    }
    this._sound = [
		{ 'name': 'pon', 'src': [
            { 'src': "pon.ogg", 'type': "audio/ogg" }, { 'src': "pon.mp3", 'type': "audio/mpeg" }
        ]
		},
		{ 'name': 'jajan', 'src': [
            { 'src': "jajan.ogg", 'type': "audio/ogg" }, { 'src': "jajan.mp3", 'type': "audio/mpeg" }
        ]
		}
    ];
    this._jingle = [];
    this._jingle.push(new Audio());
    this._jingle.push(new Audio());
    for (var i = 0; i < this._sound.length; i++) {
        this._jingle[i].controls = false;
        this._jingle[i].preload = true;
        this._jingle[i].autoplay = false;
        this._jingle[i].loop = false;
        this.set_jingle(this._jingle[i], this._sound[i].src);
    }
}

htmlBINGO.prototype = {
    CHOOSE_COUNT: 14,
    FLASH_COUNT: 6,
    create_cell: function (num, text) {
        var color = ["l-green", "yellow", "orange", "purple", "aqua"];
        var pos = Math.floor((num - 1) / 15);
        text = text || num;

        return $('<div>')
            .append(
                $('<div>').addClass('button r48 ' + color[pos]).text(text)
            ).attr('id', 'b_' + text).addClass('off');
    },
    create_current: function (x, y) {
        return $('<div>')
            .append(
                $('<div>').addClass('button r256 aqua').text('')
            ).addClass('current').attr({ 'id': 'current' }).css({ 'top': y, 'left': x });
    },
    create_symbols: function (base) {
        var table = $('<table>').appendTo(base);
        var tr = $('<tr>').appendTo(table);

        this.create_cell(1, 'B').appendTo($('<td>').appendTo(tr)).removeClass('off');
        this.create_cell(16, 'I').appendTo($('<td>').appendTo(tr)).removeClass('off');
        this.create_cell(31, 'N').appendTo($('<td>').appendTo(tr)).removeClass('off');
        this.create_cell(46, 'G').appendTo($('<td>').appendTo(tr)).removeClass('off');
        this.create_cell(61, 'O').appendTo($('<td>').appendTo(tr)).removeClass('off');


        var table = $('<table>').appendTo(base);
        var map = [
                [1, 9, 17, 25, 0, 0, 0, 0, 0, 44, 52, 60, 68],
                [2, 10, 18, 26, 0, 0, 0, 0, 0, 45, 53, 61, 69],
                [3, 11, 19, 27, 0, 0, 0, 0, 0, 46, 54, 62, 70],
                [4, 12, 20, 28, 0, 0, 0, 0, 0, 47, 55, 63, 71],
                [5, 13, 21, 29, 0, 0, 0, 0, 0, 48, 56, 64, 72],
                [6, 14, 22, 30, 33, 0, 0, 0, 41, 49, 57, 65, 73],
                [7, 15, 23, 31, 34, 36, 0, 39, 42, 50, 58, 66, 74],
                [8, 16, 24, 32, 35, 37, 38, 40, 43, 51, 59, 67, 75]
                ];

        for (var j = 0; j < 8; j++) {
            var tr = $('<tr>').appendTo(table);
            for (var i = 0; i < 13; i++) {
                var num = map[j][i];
                var td = $('<td>').appendTo(tr);
                if (num != 0) {
                    td.append(this.create_cell(num));
                }
            }
        }

        $(base).append(this.create_current(324, 148));
    },
    set_jingle: function (jingle, src) {
        if (src == null || !src.length) {
            throw Error("error: invalid argument.(src)");
        }
        for (var i = 0; i < src.length; i++) {
            if (jingle.canPlayType(src[i].type)) {
                if (jingle.appendChild) {
                    //document.body.appendChild(jingle);
                }
                jingle.src = "sound/" + src[i].src;
                return jingle;
            }
        }
        return null;
    },
    load: function (url, success, error) {
        /// <summary>
        ///     指定のURLから非同期にデータを受信します。
        /// </summary>
        /// <param name="url" type="string">
        ///     非同期受信するためのURLを指定
        /// </param>
        /// <param name="fn" type="function">
        ///     受信が完了した際のコールバック関数を指定
        /// </param>

        htmlBINGO.__xhr__ = $.ajax(
        {
            cache: false,
            type: "GET",
            url: url,
            success: success,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(DQ.format("{0}\n{1}: {2} {3}", url, XMLHttpRequest.status, XMLHttpRequest.statusText, textStatus));
                error && error(XMLHttpRequest);
            }
        });
    },
    set_current: function (num) {
        var color = ["l-green", "yellow", "orange", "purple", "aqua"];
        var pos = Math.floor((num - 1) / 15);

        var inner = $('#current > div');
        inner.text(num)
        .removeClass('l-green yellow orange purple aqua')
        .addClass(color[pos]);
    },
    turn_on: function (cell) {
        $(cell).removeClass('off');
    },
    turn_off: function (cell) {
        $(cell).addClass('off');
    },
    clear_all: function () {
        BINGO.reset();
        BINGO.Random.pos = 0;
        this.loadCards();
        for (var i = 1; i <= 75; i++) {
            $('#b_' + i).addClass('off');
        }
    },
    flash_cell: function (num) {
        var count = this.FLASH_COUNT,
            show = true,
            me = this,
            color = ["B", "I", "N", "G", "O"],
            pos = Math.floor((num - 1) / 15),
            bingo = $('#b_' + color[pos]),
            current = $('#current');

        setTimeout(function () {
            if (show) {
                me.turn_off($('#b_' + num));
                bingo.addClass('off');
                current.addClass('off');
            } else {
                me.turn_on($('#b_' + num));
                bingo.removeClass('off');
                current.removeClass('off');
            }
            show = !show;
            count--;
            if (count > 0) {
                setTimeout(arguments.callee, 200);
            } else {
                bingo.removeClass('off');
                current.removeClass('off');
            }
        }, 27);
    },
    choose_cell: function () {
        var count = this.CHOOSE_COUNT,
            pre = 0,
            me = this;
        setTimeout(function () {
            if (pre != 0) {
                me.turn_off($('#b_' + pre));
            }
            var num;
            if (count == 1) {
                num = BINGO.choose();
                if (queryString["hittest"]) {
                    me.collection[num - 1].css('color', 'red');
                }
            } else {
                num = BINGO.chooseDummy();
            }
            me.turn_on($('#b_' + num));
            //ピコピコ音
            me.set_jingle(me._jingle[0], me._sound[0].src);
            me._jingle[0].play();

            me.set_current(num);
            count--;
            if (count > 0) {
                pre = num;
                setTimeout(arguments.callee, 150);
            } else {
                //じゃじゃーん
                me._jingle[1].play();

                me.flash_cell(num);
                queryString["hittest"] && me.match_cards(num);
            }
        }, 100);
        var num = BINGO.chooseDummy();
        this.turn_on($('#b_' + num));
        this.set_current(num);
        pre = num;
    },
    cards: [],
    match_cards: function (num) {
        var hittest = function (card, num) {
            for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                    if (num == card[x][y]) {
                        card[x][y] = 0;
                        //$('#bingo').append($('<div>').text(x + ':' + y + ',' + num));
                        return true;
                    }
                }
            }

            return false;
        },
        check = function (card, num) {
            //縦
            for (var x = 0; x < 5; x++) {
                var blank = 0;
                for (var y = 0; y < 5; y++) {
                    if (card[x][y] == 0) {
                        blank++;
                    }
                }
                if (blank == 5) {
                    return true; //bingo
                }
            }

            //横
            for (var x = 0; x < 5; x++) {
                var blank = 0;
                for (var y = 0; y < 5; y++) {
                    if (card[y][x] == 0) {
                        blank++;
                    }
                }
                if (blank == 5) {
                    return true; //bingo
                }
            }
            //斜め１
            var blank = 0;
            for (var x = 0; x < 5; x++) {
                if (card[x][x] == 0) {
                    blank++;
                }
            }
            if (blank == 5) {
                return true; //bingo
            }
            //斜め２
            var blank = 0;
            for (var x = 0; x < 5; x++) {
                if (card[4 - x][x] == 0) {
                    blank++;
                }
            }
            if (blank == 5) {
                return true; //bingo
            }

            return false;
        }

        for (var i = 0; i < this.cards.length; i++) {
            if (hittest(this.cards[i].card, num)) {
                if (this.cards[i].bingo) {
                    continue;
                }
                if (check(this.cards[i].card, num)) {
                    this.cards[i].bingo = true;
                    $('#log').append($('<div>').text('bingo:' + (i + 1)));
                }
            }
        }

    },
    loadCards: function () {
        this.load('bingo.txt', function (data) {
            try {
                eval('var s=' + data);
            } catch (e) {
                me.onLoaded && me.onLoaded(me, false);
                throw new Error(DQ.format("DQ.RPG.ShopInfoCatalog.load: format error.({0})", +e.message));
            }

            bingo_ctrl.cards = [];
            bingo_ctrl.card_view = [];
            if (queryString["hittest"]) {
                setTimeout(function () {
                    for (var i = 0; i < s.length; i++) {
                        bingo_ctrl.cards.push({ bingo: false, card: s[i] });
                        bingo_ctrl.card_view.push(BINGO.CARDVIEW.create_card(s[i], $('#log')));
                    }
                    bingo_ctrl.collection = BINGO.CARDVIEW.create_collection($('#log'));
                }, 0);
            }
        });
    }

}

$(function () {
    queryString = [];
    if (location.search.length > 1) {
        var qs = location.search.substr(1).split("&");
        for (var i = 0; i < qs.length; i++) {
            var t = qs[i].split("=");
            queryString[t[0]] = t[1];
        }
    }

    bingo_ctrl = new htmlBINGO(queryString["seed"]);
    bingo_ctrl.create_symbols($('#bingo'));

    $('.a-button').bind('mousedown', function () {
        $(this).addClass('down');
    })
    .bind('mouseup', function () {
        $(this).removeClass('down');
    })
    $('#cl_button')
    .bind('click', function () {
        bingo_ctrl.clear_all();
    });

    $('body').bind('keydown', function (e) {
        if (e.originalEvent.ctrlKey ||
            e.originalEvent.altKey) {
            return;
        }
        bingo_ctrl.choose_cell();
    });
    $('#sel_button').bind('click', function () {
        bingo_ctrl.choose_cell();
    });

});
