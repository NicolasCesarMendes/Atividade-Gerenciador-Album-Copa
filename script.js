// Função que calcula e retorna a porcentagem de progresso para completar o álbum.
function calcularPorcentagem(total, coladas) {
    let porcentagem = ((coladas / total) * 100).toFixed(2);
    return porcentagem;
}

// Função que calcula e retorna quantas figurinhas faltam.
function calcularFaltantes(total, coladas) {
    let faltantes = total - coladas;
    return faltantes;
}

// Função que gera a mensagem principal com base na porcentagem de progresso.
function gerarStatusMensagem(porcentagem) {
    if (porcentagem == 100) {
        return "🚀 ÁLBUM COMPLETO! Você é um mestre colecionador!";
    } else if (porcentagem >= 50 && porcentagem < 100) {
        return "💪 Falta pouco! Mais da metade já foi!";
    } else if (porcentagem >= 0 && porcentagem < 50) {
        return "🌱 O álbum está no início, bora trocar!";
    }
    else {
        return "Dados inválidos!";
    }
}

// Função principal que realiza a entrada, processamento e saída de dados.
function atualizarPainel() {
    let total = Number(document.getElementById("total").value);
    let coladas = Number(document.getElementById("coladas").value);
    let repetidas = Number(document.getElementById("repetidas").value);

    let resultadoMensagem = document.getElementById("resultadoMensagem");
    let resultadoProgresso = document.getElementById("resultadoProgresso");
    let resultadoFaltantes = document.getElementById("resultadoFaltantes");
    let resultadoRepetidas = document.getElementById("resultadoRepetidas");

    let porcentagem = calcularPorcentagem(total, coladas);
    let faltantes = calcularFaltantes(total, coladas);

    resultadoMensagem.innerHTML = gerarStatusMensagem(Number(porcentagem));

    resultadoProgresso.innerHTML = "Você já completou " + porcentagem + "% do álbum!";
    if (resultadoMensagem.innerHTML == "Dados inválidos!") {
        resultadoProgresso.innerHTML = "Dados não definidos! Por favor, digite os valores necessários.";
    }

    resultadoFaltantes.innerHTML = "Faltam " + faltantes + " figurinhas para completar o álbum.";
    if (faltantes == 1) {
        resultadoFaltantes.innerHTML =  "Falta " + faltantes + " figurinha para completar o álbum.";
    }    

    resultadoRepetidas.innerHTML = "Você tem " + repetidas + " figurinhas repetidas para trocar!";
    if (repetidas == 1) {
        resultadoRepetidas.innerHTML = "Você tem " + repetidas + " figurinha repetida para trocar!";
    }
}