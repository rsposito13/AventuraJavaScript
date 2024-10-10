// Definindo o personagem Lulu Cabeção e suas características iniciais
let lulu = {
    vida: 100,
    forca: 50,
    recursos: 30,
    distancia: 400, // Distância de Salinas até Belo Horizonte
};

// Função que exibe o status atual do jogador
function exibirStatus() {
    console.clear(); // Limpa o console a cada atualização
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

    // Exibe o status e opções no alert
    alert(status);
}

// Função que gera um desafio aleatório
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
    
    // Atualizando as características de Lulu
    lulu.vida += desafioEscolhido.vida;
    lulu.forca += desafioEscolhido.forca;
    lulu.recursos += desafioEscolhido.recursos;

    // Atualizando a distância
    lulu.distancia -= 50; // Reduz a distância em 50 km após o desafio
}

// Função para recuperar recursos
function recuperarRecursos() {
    if (lulu.recursos > 0) {
        lulu.recursos -= 10; // Perde 10 recursos
        lulu.vida += 20; // Recupera 20 de vida
        alert("Você recuperou um pouco de vida!");
    } else {
        alert("Você não tem recursos suficientes para recuperar vida!");
    }
}

// Função para descansar
function descansar() {
    lulu.vida += 10; // Recupera 10 de vida
    alert("Você descansou e recuperou parte da sua saúde!");
}

// Função para usar recursos
function usarRecursos() {
    if (lulu.recursos > 0) {
        lulu.recursos -= 5; // Perde 5 recursos
        lulu.vida += 10; // Recupera 10 de vida
        alert("Você usou um recurso e se sentiu melhor!");
    } else {
        alert("Você não tem recursos suficientes!");
    }
}

// Função que simula a luta contra a Galocura
function lutarContraGalocura() {
    const resultado = Math.random(); // Gera um número aleatório entre 0 e 1
    if (resultado < 0.5) {
        alert("Você lutou bravamente, mas foi derrotado pela Galocura. Fim de jogo!");
    } else {
        alert("Você venceu a Galocura e resgatou Lívia! Você é um herói!");
    }
}

// Função que inicia o jogo
function start() {
    alert("Bem-vindo ao jogo da jornada de Lulu Cabeção!\n" +
          "Você deve resgatar Lívia, que foi capturada pela torcida Galocura.\n" +
          "Prepare-se para enfrentar desafios e tomar decisões!\n" +
          "Boa sorte!");
    exibirStatus(); // Exibe o status inicial de Lulu
    jogarRodada(prompt("Escolha uma ação:\n1 - Seguir em frente\n2 - Recuperar recursos\n3 - Descansar\n4 - Usar recurso\n5 - Desistir"));
}

// Função principal do jogo para jogar uma rodada
function jogarRodada(acao) {
    if (acao === "1") { // Seguir em frente
        if (lulu.vida > 0 && lulu.distancia > 0) {
            desafio();
            exibirStatus();

            // Checar se Lulu está vivo
            if (lulu.vida <= 0) {
                alert("Lulu Cabeção foi derrotado pela União Sinistra. Fim de jogo!");
                return;
            }

            // Checar se Lulu chegou a Belo Horizonte
            if (lulu.distancia <= 0) {
                alert("Você chegou a Belo Horizonte!");
                lutarContraGalocura(); // Luta com a Galocura
                return;
            }
        } else if (lulu.vida <= 0) {
            alert("Você não pode continuar. Lulu está sem vida!");
        }
    } else if (acao === "2") { // Recuperar recursos
        recuperarRecursos();
        exibirStatus();
    } else if (acao === "3") { // Descansar
        descansar();
        exibirStatus();
    } else if (acao === "4") { // Usar recursos
        usarRecursos();
        exibirStatus();
    } else if (acao === "5") { // Desistir
        alert("Você desistiu da jornada. Fim de jogo!");
        return; // Encerrando o jogo
    } else {
        alert("Opção inválida! Tente novamente.");
    }

    // Repetindo a rodada se o jogo não acabou
    if (lulu.vida > 0 && lulu.distancia > 0) {
        jogarRodada(prompt("Escolha uma ação:\n1 - Seguir em frente\n2 - Recuperar recursos\n3 - Descansar\n4 - Usar recurso\n5 - Desistir"));
    }
}
