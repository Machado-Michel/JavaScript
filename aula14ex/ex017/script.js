function reiniciar(){
    location.reload();
}

function tabuada(){
let num = document.getElementById('txtn')    
let tab = document.getElementById('seltab')
if (num.value.length == 0 || num.value == ""){
    alert('[ERRO] Digite um número!')
    return;
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}
}