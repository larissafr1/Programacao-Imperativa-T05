console.log ("---Menu Microondas---");


function pratoPronto (tempo, tempoPadrao) {

    if (tempo > (tempoPadrao * 2)) {
        console.log ("QUEIMOU"); //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou
    } else 
    
    if (tempo < tempoPadrao) {
        console.log ("Tempo insuficiente"); //Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
    } else
    
    if (tempo < (tempoPadrao * 3)) {
        console.log ("KABUM!"); //Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabum”
    } else {
        console.log ("Prato pronto, bom apetite"); //No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
    }
}

function menu (tempo, opcao) {
    

    switch (opcao) {
    case "pipoca":
        pratoPronto (tempo, 10);           
        break;

     case "macarrao":
        pratoPronto (tempo, 8);
         break;

     case "carne":
         pratoPronto (tempo, 15);
         break;

     case "feijao":
        pratoPronto (tempo, 12);
          break;

     case "brigadeiro":
          pratoPronto (tempo, 8);
          break;

    default:
        console.log ("Prato inexistente"); // Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";

}

}


menu(50, "pipoca");
menu(2, "macarrao");
menu(18, "carne");
menu(60, "feijao");
menu(8, "brigadeiro")
menu(22, "arroz");
