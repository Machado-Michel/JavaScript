function contar() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    let passo = parseInt(document.getElementById("passo").value);

    
    if (inicio === null || inicio === "" || isNaN(inicio)){
        alert("[ERRO] Informe o valor inicial!");
        return;
    }

    if (fim === null || fim === "" || isNaN(fim)){
        alert("[ERRO] Informe o valor final!")
        return;
    }

    // Validador para passo negativo ou igual a zero. Adiciona o passo como 1.
    if (passo <= 0 || isNaN(passo)) {
        passo = 1;
        alert("O valor do passo é inválido. O passo foi ajustado para 1.");
    }

    let resultado = 'Contando: '

    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            resultado += i + ` \u{1F449} `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            resultado += i + ` \u{1F449} `;
        }
    }

    document.getElementById("res").textContent = resultado.slice(0, -3);

    // Adicionar bandeira quadriculada após a contagem
    setTimeout(function () {
        document.getElementById("res").textContent += ` \u{1F449}\u{1F3C1}`;
    }, 1000); // 1000 milissegundos = 1 segundo de atraso
}

function reiniciar(){
    location.reload();
}