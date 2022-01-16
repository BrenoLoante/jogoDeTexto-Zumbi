
function opcao() {
    var escolha = Number(prompt(" faça a sua escolha \ n 1 - aumentar o volume da\ n 2 - abrir a janela e ver que gritaria é essa\ n 3 - ir para cozinha fazer um café "
    ));

    while (escolha != 1 || escolha != 2 || escolha != 3)

    {

        if (escolha == 1) {
            window.location.href = 'fase_2_escolha_1.html'

            break;


        } else if (escolha == 2) {
            window.location.href = "fase_2_escolha_2.html"
            break;



        } else if (escolha == 3) {
            window.location.href = "game_over.html"


            break;

        } else {
            alert("escolha entre as opções 1, 2 ou 3")

            break;

        }

    }

}
