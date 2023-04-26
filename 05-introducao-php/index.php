<!DOCTYPE html>
<html>
    <body>
        <h5>Introdução à Linguagem PHP</h5>

        <?php
            function imprimeMensagem($nome, $idade) {
                return "Olá $nome você tem $idade anos."; 
            }
        ?>

        <p>Este exemplo imprimirá uma mensagem utilizando funções.</p>

        <h6>
        <?php
            $nome = "Maria";
            $idade = "40";
            $mensagem = imprimeMensagem($nome, $idade);

            echo "A mensagem gerada foi: $mensagem.";
        ?>
        </h6>

        <ul>
            <li><a href="exemplo01.php">Exemplo 01</a></li>
            <li><a href="exemplo02.php">Exemplo 02</a></li>
        </ul>
    </body>
</html>
