
    
    function opcao() {
  var escolha = Number(prompt(
      "Faça a sua escolha    \n 1 - dscobrir qual é o carro  \n 2 -  largar a chave e ir embora \n  3 - se entregar ao seu destino."
  ));

  while (escolha != 1 || escolha != 2 || escolha != 3)

  {

      if (escolha == 1) {
          window.location.href = "fase_4_escolha_2.html"
          
          break;


      } else if (escolha == 2) {
          window.location.href = "game_over.html"
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

