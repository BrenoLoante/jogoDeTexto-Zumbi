
        function opcao() {
            var escolha = Number(prompt(
                "Faça a sua escolha    \n 1 - vai sair de casa  \n 2 -  ir no vizinho \n  3 - sair pela escada de emergência."
            ));

            while (escolha != 1 || escolha != 2 || escolha != 3)

            {

                if (escolha == 1) {
                    window.location.href = "../game_over.html"
                    
                    break;


                } else if (escolha == 2) {
                    window.location.href = "../game_over.html"
                    break;



                } else if (escolha == 3) {
                    window.location.href = "fase_3_escolha_3.html"


                    break;

                } else {
                    alert("escolha entre as opções 1, 2 ou 3")

                    break;

                }

            }

        }
    