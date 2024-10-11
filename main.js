let lulu = {
    vida: 100,
    forca: 50,
    recursos: 30,
    distancia: 400,
};

function exibirStatus() {
    console.clear();
    const status = `
    --- Status de Lulu Cabeção ---
    Vida: ${lulu.vida}
    Força: ${lulu.forca}
    Recursos: ${lulu.recursos}
    Distância até BH: ${lulu.distancia} km
    -----------------------------
    Escolha uma ação:
    1 - Seguir em frente
    2 - Recuperar recursos
    3 - Descansar
    4 - Usar recurso
    5 - Desistir
    `;

    alert(status);
}

function desafio() {
    const desafios = [
        { descricao: "Você encontrou um bando da União Sinistra! Teve que lutar!", vida: -20, forca: -10, recursos: -5 },
        { descricao: "A chuva torrencial fez você escorregar e cair!", vida: -15, forca: 0, recursos: -10 },
        { descricao: "Você encontrou comida na estrada!", vida: 0, forca: 0, recursos: +20 },
        { descricao: "Um viajante te deu uma poção mágica!", vida: +15, forca: 5, recursos: -5 },
        { descricao: "Você teve que atravessar um rio gelado e quase desmaiou!", vida: -25, forca: -5, recursos: -10 }
    ];

    const desafioEscolhido = desafios[Math.floor(Math.random() * desafios.length)];
    alert(desafioEscolhido.descricao);
    
    lulu.vida += desafioEscolhido.vida;
    lulu.forca += desafioEscolhido.forca;
    lulu.recursos += desafioEscolhido.recursos;

    lulu.distancia -= 50; 
}

function recuperarRecursos() {
    if (lulu.recursos > 0) {
        lulu.recursos -= 10; 
        lulu.vida += 20; 
        alert("Você recuperou um pouco de vida!");
    } else {
        alert("Você não tem recursos suficientes para recuperar vida!");
    }
}

function descansar() {
    lulu.vida += 10;
    alert("Você descansou e recuperou parte da sua saúde!");
}


function usarRecursos() {
    if (lulu.recursos > 0) {
        lulu.recursos -= 5; 
        lulu.vida += 10;
        alert("Você usou um recurso e se sentiu melhor!");
    } else {
        alert("Você não tem recursos suficientes!");
    }
}

function lutarContraGalocura() {
    const resultado = Math.random();
    if (resultado < 0.5) {
        alert("Você lutou bravamente, mas foi derrotado pela Galocura. Fim de jogo!");
    } else {
        alert("Você venceu a Galocura e resgatou Lívia! Você é um herói!");
    }
}

function start() {
    alert("Bem-vindo ao jogo da Jornada para salvar sua amada!\n" +
          "Você deve resgatar Lívia, que foi capturada pela torcida Galocura.\n" +
          "Prepare-se para enfrentar desafios e tomar decisões!\n" +
          "Boa sorte!");
    exibirStatus(); 
    jogarRodada(prompt("Escolha uma ação:\n1 - Seguir em frente\n2 - Recuperar recursos\n3 - Descansar\n4 - Usar recurso\n5 - Desistir"));
}

function jogarRodada(acao) {
    if (acao === "1") { 
        if (lulu.vida > 0 && lulu.distancia > 0) {
            desafio();
            exibirStatus();

            if (lulu.vida <= 0) {
                alert("Lulu Cabeção foi derrotado pela União Sinistra. Fim de jogo!");
                return;
            }

            if (lulu.distancia <= 0) {
                alert("Você chegou a Belo Horizonte!");
                lutarContraGalocura(); 
                return;
            }
        } else if (lulu.vida <= 0) {
            alert("Você não pode continuar. Lulu está sem vida!");
        }
    } else if (acao === "2") { 
        recuperarRecursos();
        exibirStatus();
    } else if (acao === "3") { 
        descansar();
        exibirStatus();
    } else if (acao === "4") { 
        usarRecursos();
        exibirStatus();
    } else if (acao === "5") { 
        alert("Você desistiu da jornada. Fim de jogo!");
        return; 
    } else {
        alert("Opção inválida! Tente novamente.");
    }

    if (lulu.vida > 0 && lulu.distancia > 0) {
        jogarRodada(prompt("Escolha uma ação:\n1 - Seguir em frente\n2 - Recuperar recursos\n3 - Descansar\n4 - Usar recurso\n5 - Desistir"));
    }
}
