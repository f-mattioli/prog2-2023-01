$(document).ready(function () {
    
    $('#btn-par').click(function () {
        var num = parseInt($('#n').val());

        if (num % 2 == 0) { 
            $('#saida').html("O número é PAR!");
        } else {
            $('#saida').html("O número é ÍMPAR!");
        }
    });

});
