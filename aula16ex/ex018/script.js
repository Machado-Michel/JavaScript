function reiniciar(){
    location.reload()
}

// Array para armazenar os números adicionados
let numeros = [];

// Função para adicionar um número ao array
function adicionarNumero() {
    document.getElementById('resultado').innerHTML = '';

    let input = document.getElementById('valor');
    let valor = parseInt(input.value);

    // Validador para que seja inserido numero entre 1 e 100.
    if (isNaN(valor) || valor < 1 || valor > 100) {
        alert('Informe um número válido entre 1 e 100.');
        return;
    }

    //Validador para detectar número repetido.
    if (numeros.includes(valor)) {
        alert('O número já foi adicionado. Informe um número diferente.');
        return;
    }

    numeros.push(valor);
    input.value = '';
    input.focus()
    exibirNumerosAdicionados();
}

// Função para exibir os números adicionados no select
function exibirNumerosAdicionados() {
    let select = document.getElementById('adicionado');
    select.innerHTML = '';

    for (let numero of numeros) {
        let option = document.createElement('option');
        option.text = `Valor ${numero} adicionado.`;
        select.add(option);
    }
}

// Função para analisar os números adicionados
function analisar() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (numeros.length < 2) {
        alert('Informe pelo menos 2 números para calcular a média.');
        return;
    }

    let totalNumeros = numeros.length;
    let maiorNumero = Math.max(...numeros);
    let menorNumero = Math.min(...numeros);
    let somaNumeros = numeros.reduce((a, b) => a + b, 0);
    let mediaNumeros = somaNumeros / totalNumeros;

    resultado.innerHTML += `<p>Ao todo, temos <strong>${totalNumeros}</strong> números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi <strong>${maiorNumero}</strong>.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi <strong>${menorNumero}</strong>.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos <strong>${somaNumeros}</strong>.</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é <strong>${mediaNumeros.toFixed(2)}</strong>.</p>`;
}