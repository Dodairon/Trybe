let a = "REIM" .toLowerCase();

switch(a) {
    case "peao":
        console.log("uma casa para frente");
        break;
    
    case "torre":
        console.log("quantas casas quiser na horizontal e vertical");
        break;
    
    case "cavalo":
        console.log("anda em L (3 para 1)");
        break;

    case "bispo":
        console.log("quantas casas quiser na diagonal");
        break;

    case "rainha":
        console.log("quantas casas quiser em qualquer direcao");
        break;

    case "rei":
        console.log("apenas 1 casa em qualquer direcao");
        break;

    default:
        console.log("nao e uma peca de xadrez")
}