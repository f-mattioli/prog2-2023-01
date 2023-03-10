/*
 * Exercício 01
 */
function ex01_dobro() {
    var n = document.getElementById('n').value;
    document.getElementById('saida').innerHTML = 
        'Dobro: ' + (2 * n);
}

function ex01_triplo() {
    var n = document.getElementById('n').value;
    document.getElementById('saida').innerHTML = 
        'Triplo: ' + (3 * n);
}

/*
 * Exercício 02
 */
function ex02_par_ou_impar() {
    var n = parseInt(document.getElementById('n').value);

    if (n % 2 == 0) {
        document.getElementById('saida').innerHTML = 'O número é par.';
    } else {
        document.getElementById('saida').innerHTML = 'O número é ímpar.';
    }
}
