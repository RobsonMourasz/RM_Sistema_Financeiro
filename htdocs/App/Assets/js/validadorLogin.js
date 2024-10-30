document.getElementById('acessar').addEventListener('click', async function () {

    const usuario = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    $.ajax({

        type: "POST",
        dataType: "JSON",
        url: "Model/verificarLogin.php",
        cache: false,
        data: {
            user: usuario,
            pass: senha
        },
        success: function (resposta) {

            if (resposta.retorno.trim() === 'Usuario') {
                $('#alerta-email').addClass("erro")
                $('#alerta-email').fadeIn().html('Verifique se o Usuário está correto!');
                setTimeout(function () {

                    $('#alerta-email').fadeOut("Slow");
                    $('#alerta-email').removeClass("erro");

                }, 2000);
            } else if (resposta.retorno.trim() === 'Senha') {
                $('#alerta-senha').addClass("erro")
                $('#alerta-senha').fadeIn().html('Verifique se a senha está correta!');
                setTimeout(function () {

                    $('#alerta-senha').fadeOut("Slow");
                    $('#alerta-senha').removeClass("erro");

                }, 2000);
            } else if (resposta.retorno.trim() === 'OK'){
                location.href="View/";
            }

        },
        error: function (mensagem) {
            console.error(mensagem);
        }
    })
})