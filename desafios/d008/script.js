function compra() {
var produto = prompt(`Qual o produto que está sendo comprado?`)
    var valorProduto = prompt(`Qual o valor do produto: ${produto}`)

    while (valorProduto === null || valorProduto === ""){
        alert(`Para continuarmos com a compra, o valor do produto: ${produto}, deve ser informado.`)
        var valorProduto = prompt(`Qual o valor do produto: ${produto}`)

        if (valorProduto === null || valorProduto === ""){
            return;
        }
    }
    var valorCompra = Number(valorProduto)
    var desconto = valorCompra * 0.10;
    var valorTotal = valorCompra - desconto;
    var formatoBRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

    var tituloRes = document.querySelector(`#titRes`)
    tituloRes.innerHTML = `Calculando desconto de 10% para ${produto}...`


    var resultado = document.querySelector(`div#res`)
    resultado.innerHTML = `<p>O preço original era <strong>${formatoBRL.format(valorCompra.toFixed(2))}.</strong></p>
    <p>Você acaba de ganhar <strong>${formatoBRL.format(desconto.toFixed(2))}</strong> de Desconto.</p>
    <p>No fim, você irá pagar <strong>${formatoBRL.format(valorTotal.toFixed(2))}</strong> no produto <strong>${produto}.</strong></p>
    <h4>Obrigado por sua compra e Volte Sempre!</h4>`

}
