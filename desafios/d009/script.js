function reiniciar() {
    location.reload();
}

function reajuste() {
    let nomeFun = "";
    let salario = "";
    let aumento = "";

    function validarNome() {
        while (nomeFun === "") {
            nomeFun = prompt("Qual é o nome do Funcionário(a):");

            if (nomeFun === null) {
                return false; // Cancelado, encerra a função
            } else if (nomeFun === "") {
                alert("O nome do funcionário não pode ser vazio.\n\nTente Novamente!");
            }
        }

        return true;
    }

    function validarSalario() {
        while (salario === "") {
            salario = prompt(`Qual é o salário de ${nomeFun}?`);

            if (salario === null) {
                return false; // Cancelado, encerra a função
            } else if (salario === "") {
                alert(`O salário do funcionário ${nomeFun} não pode ser vazio.\n\nTente Novamente!`);
            } else if (isNaN(salario)) {
                alert(`O salário do funcionário ${nomeFun} deve ser um valor numérico.\n\nTente Novamente!`);
                salario = "";
            }
        }

        return true;
    }

    function validarAumento() {
        while (aumento === "") {
            aumento = prompt(`O salário de ${nomeFun} vai ser reajustado em qual porcentagem?`);

            if (aumento === null) {
                return false; // Cancelado, encerra a função
            } else if (aumento === "") {
                alert(`Digite um valor para o aumento salarial de ${nomeFun}!`);
            } else if (isNaN(aumento)) {
                alert(`O aumento salarial de ${nomeFun} deve ser um valor numérico.\n\nTente Novamente!`);
                aumento = "";
            } else if (parseFloat(aumento) <= 0) {
                alert(`O aumento salarial de ${nomeFun} deve ser maior que zero.\n\nTente Novamente!`);
                aumento = "";
            }
        }

        return true;
    }

    if (!validarNome()) {
        return;
    }

    if (!validarSalario()) {
        return;
    }

    if (!validarAumento()) {
        return;
    }

    const formatoBRL = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" });
    const valorSalario = parseFloat(salario);
    const valorAumento = parseFloat(aumento);

    const reajuste = valorSalario * (valorAumento / 100);
    const salarioAtualizado = valorSalario + reajuste;

    const resultado = document.querySelector("#res");
    const tituloResultado = document.querySelector("#titRes");
    tituloResultado.textContent = `${nomeFun} recebeu um aumento salarial!`;
    resultado.innerHTML = `
        <p>O salário atual era de <strong>${formatoBRL.format(valorSalario.toFixed(2))}</strong></p>
        <p>Com o aumento de <strong>${valorAumento}%</strong>, o salário vai aumentar <strong>${formatoBRL.format(reajuste.toFixed(2))}</strong> no próximo mês.</p>
        <p>E a partir daí, ${nomeFun} vai passar a ganhar <strong>${formatoBRL.format(salarioAtualizado.toFixed(2))}.</strong></p>
    `;
}
