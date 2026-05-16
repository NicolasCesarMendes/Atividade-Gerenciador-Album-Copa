function calcularPorcentagem(total, coladas) {
    let porcentagem = (coladas / total)*100;
    return "Você já completou " + porcentagem + "% do álbum!";
}

function calcularFaltantes(total, coladas) {
    let faltantes = total - coladas;
    return "Faltam " + faltantes + " figurinhas para completar o álbum.";
}

function gerarStatusMensagem(porcentagem) {
    if (porcentagem == 100) {
        return "🚀 ÁLBUM COMPLETO! Você é um mestre colecionador!";
    } else if (porcentagem >= 50) {
        return "💪 Falta pouco! Mais da metade já foi!";
    } else {
        return "🌱 O álbum está no início, bora trocar!";
    }
}

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


    resultadoMensagem.innerHTML = gerarStatusMensagem(porcentagem);
    resultadoProgresso.innerHTML = porcentagem;
    resultadoFaltantes.innerHTML = faltantes;
    resultadoRepetidas.innerHTML = repetidas;
}