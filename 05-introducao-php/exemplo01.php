<!DOCTYPE html>
<html>
    <body>
        <h5>Exemplo do uso de variáveis globais</h5>

        <?php 
        $x = 10;

        function somaComX($y) {
            global $x;
            $soma = $x + $y;
            echo "<p>Resultado = $soma.";
        }

        somaComX(2);
        ?>


        <ul>
            <li><a href="/prog2">Voltar</a></li>
        </ul>
    </body>
</html>
