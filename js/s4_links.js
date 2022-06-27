$(document).ready(function() {

    $('#btnA').bind('mousedown', function(e) {
        $('#Main_Container').append('<img id="popup" style="position: absolute;left: 0; top:0px; z-index:100;" src="images/s4/popup_' + this.id + '.jpg" />');

        $("#popup").bind('mousedown', function(e) {
            $("#popup").remove();

        });
    });

});