function reiniciar() {
    location.reload();
}

function reiniciar() {
    location.reload();
}

function verificar() {
    let anterior = window.prompt(`Qual era o preço do produto?`)
    let atual = window.prompt(`Qual é o preço atual do produto?`)
    let precoAnterior = Number(anterior)
    let precoAtual = Number(atual)

    let tituloRes = document.querySelector(`h2#titresultado`)
    let res = document.querySelector(`div#resultado`)

    tituloRes.innerHTML = `Analisando os valores informados.`

    let diferenca = precoAtual - precoAnterior
    let variacaoPercentual = (diferenca / precoAnterior) * 100
    let formatoBRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
    

    if (precoAtual > precoAnterior) {
        res.innerHTML = `<p>O produto custava ${formatoBRL.format(precoAnterior.toFixed(2))} e agora custa R$${precoAtual.toFixed(2)}.</p>
            <p>Hoje o produto está mais caro.</p>
            <p>O preço subiu ${formatoBRL.format(diferenca.toFixed(2))} em relação ao preço anterior.</p>
            <p>Uma variação de ${variacaoPercentual.toFixed(2)}% no preço.</p>`
    } else if (precoAtual < precoAnterior) {
        res.innerHTML = `<p>O produto custava ${formatoBRL.format(precoAnterior.toFixed(2))} e agora custa ${formatoBRL.format(precoAtual.toFixed(2))}.</p>
            <p>Hoje o produto está mais barato.</p>
            <p>O preço desceu ${formatoBRL.format(Math.abs(diferenca).toFixed(2))} em relação ao preço anterior.</p>
            <p>Uma variação de ${Math.abs(variacaoPercentual).toFixed(2)}% no preço.</p>`
    } else {
        res.innerHTML = `<p>
            O produto custa ${formatoBRL.format(precoAnterior.toFixed(2))} e continua custando o mesmo preço.</p>
            <p>Não houve variação no preço.</p>
        `
    }
}