function reiniciar(){
    location.reload();
}

function age(){
    let d1 = document.getElementById('data').value
    let m1 = document.getElementById('mes').value
    let a1 = document.getElementById('ano').value

    let data = new Date();
    let d2 = data.getDate();
    let m2 = 1 + data.getMonth();
    let a2 = data.getFullYear();
    let mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2){
        d2 = d2 + mes[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2){
        m2 = m2 + 12;
        a2 = a2 - 1;
    }
    var d = d2 - d1;
    var m = m2 -  m1;
    var a = a2 - a1;

    document.getElementById('age').innerHTML = `Sua idade é <strong>${a}</strong> Anos, <strong>${m}</strong> Meses e <strong>${d}</strong> Dias.`
}