function reiniciar(){
    location.reload()
}

// Função para verificar se um ano é bissexto
function verificar() {
    let anoInput = window.prompt('Qual o Ano que você quer verificar?');
    let ano = Number(anoInput);
    const resultado = document.getElementById('resultado');

    while (isNaN(ano) || ano <= 0 || anoInput === null || anoInput === "") {
        window.alert('Ano inválido. Por favor, informe um ano válido.');
        anoInput = window.prompt('Qual o Ano que você quer verificar?');
        ano = Number(anoInput);
    }

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            resultado.innerHTML = `O ano <strong>${ano}</strong> <span style="color: green; font-weight: bold; background-color: rgba(0, 128, 0, 0.39);">É BISSEXTO.</span> \u{2705}`;
        } else {
            resultado.innerHTML = `O ano <strong>${ano}</strong> <span style="color: red; font-weight: bold; background-color: rgba(255, 0, 0, 0.3);">NÃO É BISSEXTO.</span> \u{274C}`;
        }
}