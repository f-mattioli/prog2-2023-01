$(document).ready(function () {
    
    $('#btn-primo').click(function () {
        var num = parseInt($('#n').val());

        if (num < 0) {
            alert("Número inválido!");
            return;
        }

        var mensagem = "";
        switch (num) {
            case 0:
            case 1:
                mensagem = "O número NÃO É PRIMO!";
                break;
            case 2:
                mensagem = "O número é PRIMO!";
                break;
            default:
                mensagem = "O número é PRIMO!";
                for (var i = 2; i < num; ++i) {
                    if (num % i == 0) {
                        mensagem = "O número NÃO É PRIMO!";
                        break;
                    }
                }
        }

        $("#saida").html(mensagem);
    });

});
