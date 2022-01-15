function opcao() {
    var escolha = Number(prompt(" o que voce vai fazer \n 1- ligar pra alguem para conseguir mais informações \n 2- sair de casa correndo \n 3- tentar conseguir mais informações com calma"));




    if (escolha === 1) {
        window.location.href = "fase_4_escolha_1.html"


    } else if (escolha === 2) {
        window.location.href = "fase_4_escolha_2.html"



    } else {
        window.location.href = "fase_4_escolha_3.html"





    }


}