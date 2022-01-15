function opcao() {
    var escolha = Number(prompt("faça a sua escolha    \n 1 - aumentar o volume da  \n 2 -  abrir a janela e ver  que gritaria é essa \n  3 - ir para cozinha fazer um café"));
   
    // while (true) {

      if (escolha === 1) {
            window.location.href = 'fase_2_escolha_1.html'
        

        } else if (escolha === 2) {
            window.location.href = "fase_2_escolha_2.html"
            


        } else {
            window.location.href = 'fase_2_escolha_3.html'

        

          
        }
    
    // }

} 


