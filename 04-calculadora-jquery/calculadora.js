// Indica se o último botão pressionado foi um botão de operação
var ultimoOp = false;

// Armazena a operação selecionada
var operacao = null;

// Armazena o valor do primeiro operando
var operando01;


$(document).ready(function (){
    
    /*
     * Concatena ou substitui o conteúdo do display de saída
     */
    $(".btn-numero").click(function () {
        if (ultimoOp) {
            $("#output").html($(this).html());
            ultimoOp = false;
        } else {
            if ($(this).html() == ".") {
                $("#output").html($("#output").html() + $(this).html());
            } else {
                $("#output").html(parseFloat($("#output").html() + $(this).html()));
            }
        }
    });

    /*
     * Recupera o primeiro operando e armazena a operação
     */
    $(".btn-op").click(function () {
        if (operacao != null) {
            $("#btn-igual").trigger("click");
        }

        operando01 = parseFloat($("#output").html());
        operacao = $(this).html();
        ultimoOp = true;
    });

    $("#btn-igual").click(function () {
        var resultado;
        var operando02 = parseFloat($("#output").html());

        switch (operacao) {
        case "+":
            $("#output").html(operando01 + operando02);
            break;
        case "-":
            $("#output").html(operando01 - operando02);
            break;
        case "*":
            $("#output").html(operando01 * operando02);
            break;
        case "/":
            if (operando02 == 0) {
                $("#output").html("Err");
            } else {
                $("#output").html(operando01 / operando02);
            }
            break;
        default:
            $("#output").html("Erro: operação inválida!");
            break;
        }
    });

    $("#btn-clear").click(function () {
        $("#output").html("0");
        ultimoOp = false;
        operacao = null;
    });

});
