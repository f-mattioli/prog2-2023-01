$(document).ready(function () {
    
    $('.btn').click(function () {
        $('#saida').html("Você clicou no " +
            $(this).html());
    });

});
