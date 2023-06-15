function reiniciar () {
    location.reload();
}

function calcular() {
    var a = parseFloat(prompt("Digite o valor de A:"));
    var b = parseFloat(prompt("Digite o valor de B:"));
    var c = parseFloat(prompt("Digite o valor de C:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Os valores informados não são números válidos.");
        return;
    }

    var delta = Math.pow(b, 2) - 4 * a * c;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    var tituloRes = document.getElementById("titres")
    tituloRes.innerHTML = "";

    if (delta < 0) {
        resultado.innerHTML = "Não há soluções reais.";
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        tituloRes.innerHTML = `Resolvendo Bhaskara`
        resultado.innerHTML += `A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong> <br>`;
        resultado.innerHTML += `O cálculo realizado será <strong>\u{0394} = ${b}² - 4 . ${a} . ${c}</strong><br>`;
        resultado.innerHTML += `O valor calculado foi <strong>\u{0394} = ${delta}</strong>`;
    }
}
