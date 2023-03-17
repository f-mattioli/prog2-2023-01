// Indica se o último botão pressionado foi um botão de operação
var ultimoOp = false;

// Armazena a operação selecionada
var operacao;

// Armazena o valor do primeiro operando
var operando01;


/*
 * Concatena ou substitui o conteúdo do display de saída
 */
function cliqueBotao(n) {

    var output = document.getElementById("output");

    if (ultimoOp) {
        /* Exercicio
        output.innerHTML = _______________;
        */
        ultimoOp = false;
    } else {
        output.innerHTML = parseFloat(output.innerHTML + n);
    }

}


/*
 * Recupera o primeiro operando e armazena a operação
 */
function cliqueOperacao(op) {

    operando01 = parseFloat(document.getElementById("output").innerHTML);

    operacao = op;

    /* Exercício
    ultimoOp = _______;
    */

}


function cliqueIgual() {

    /* Exercício
    var output = document.getElementById(_____________);
    */
    var resultado;

    var operando02 = parseFloat(document.getElementById("output").innerHTML);

    switch (operacao) {
    case "soma":
        output.innerHTML = operando01 + operando02;
        break;
    case "sub":
        /* Exercicio:
        output.innerHTML = __________________;
        */
        break;
    case "mult":
        output.innerHTML = operando01 * operando02;
        break;
    case "div":
        output.innerHTML = operando01 / operando02;
        break;
    default:
        output.innerHTML = "Erro: operação inválida!";
        break;

    }

}
