function reiniciar() {
    location.reload()
}

// Função para validar se uma nota é válida
function validarNota(nota) {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
}

// Função para exibir a mensagem de situação do aluno
function exibirMensagemSituacao(situacao) {
    let res = document.getElementById('resultado');
    res.innerHTML += `<p>O aluno está <strong class="${situacao}">${situacao.toUpperCase()}</strong></p>`;
}

// Função para calcular a média das notas
function calcularMedia(...notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// Função para realizar a avaliação
function avaliar() {
    let nome = window.prompt(`Qual o nome do Aluno?`);

    if (nome === "" || nome === null) {
        alert("Por favor digite um nome para continuarmos com a avaliação!");
        return false;
    }

    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = Number(window.prompt(`Qual a nota ${i} de ${nome}?`));
        if (!validarNota(nota)) {
            alert("Digite uma nota válida (entre 0 e 10).");
            return false;
        }
        notas.push(nota);
    }

    // Cálculo da média com base nas notas
    let media = calcularMedia(...notas);

    let res = document.getElementById(`resultado`);
    res.innerHTML = ""; // Limpa o conteúdo atual do elemento

    document.getElementById(`titulo_res`).innerHTML = `Analisando a situação de ${nome}...`;
    res.innerHTML += `<p>Com as notas ${notas.join(", ")}, a <strong>média é ${media.toFixed(2)}</strong>.</p>`;

    if (media >= 6) {
        // Aprovado
        exibirMensagemSituacao("aprovado");
    } else if (media >= 3) {
        // Recuperação
        exibirMensagemSituacao("recuperacao");
    } else {
        // Reprovado
        exibirMensagemSituacao("reprovado");
    }
}

// Adicionar evento de clique ao botão de avaliar
document.getElementById('btnAvaliar').addEventListener('click', avaliar);


