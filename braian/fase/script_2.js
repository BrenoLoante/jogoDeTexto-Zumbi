function opcao() {
    var escolha = Number(prompt("faça a sua escolha  1 - ligar pra alguem para conseguir mais informações\ n 2 - sair de casa correndo\ n 3 - tentar conseguir mais informações com calma "));




    if (escolha === 1) {
        window.location.href = "fase_3_escolha_1.html"


    } else if (escolha === 2) {
        window.location.href = "fase_3_escolha_2.html"



    } else {
        window.location.href = "fase_3_escolha_3.html"





    }


}