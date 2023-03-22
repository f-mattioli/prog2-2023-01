$(document).ready(function () {
    
    $('#btn-dobro').click(function () {
        var num = parseInt($('#n').val());
        $('#saida').html("Dobro: " + 2 * num);
    });

    $('#btn-triplo').click(function () {
        var num = parseInt($('#n').val());
        $('#saida').html("Triplo: " + 3 * num);
    });

});
