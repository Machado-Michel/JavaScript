var horaAtual = new Date();
var hora = horaAtual.getHours();
var minutos = horaAtual.getMinutes();
var segundos = horaAtual.getSeconds();
var horaFormatada = hora.toString().padStart(2, "0");
var minutosFormatados = minutos.toString().padStart(2, "0");
var segundosFormatados = segundos.toString().padStart(2, "0");

console.log(`Agora são exatamente ${horaFormatada}:${minutosFormatados}:${segundosFormatados} Hrs.`);

if (hora < 12) {
    console.log('Bom dia!');
} else if (hora <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}