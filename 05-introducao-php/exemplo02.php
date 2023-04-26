<!DOCTYPE html>
<html>
    <body>
        <h5>Exemplo do uso de variáveis estáticas</h5>

        <?php 
        function incrementaX() {
            static $x = 0;
            echo "<p>x = $x.</p>";

            $x++;
        }

        incrementaX();
        incrementaX();
        ?>

        <ul>
            <li><a href="/prog2">Voltar</a></li>
        </ul>
    </body>
</html>
