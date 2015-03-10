/*
* BINGO
*
* Copyright (c) 2012 M., Koji
* Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*
* Date: 2012-02-01 17:34:21 -0900
* Revision: 0001
*/

BINGO.CARDVIEW = {}
BINGO.CARDVIEW.create_card = function (card, base) {
    var table = $('<table>').appendTo(base).addClass('card');
    for (var y = 0; y < 5; y++) {
        var tr = $('<tr>').appendTo(table);
        for (var x = 0; x < 5; x++) {
            var di = $('<div>');
            $('<td>')
                .appendTo(tr)
                .append(di
                    .text(card[y][x]))
                .css('width', '1em');
            di
                .attr('idx', card[y][x]);

        }
    }
}

BINGO.CARDVIEW.create_collection = function (base) {
    var collection = [];
    for (var i = 1; i <= 75; i++) {
        var list = $('[idx=' + i + ']');
        collection.push(list);
    }

    return collection;
}
