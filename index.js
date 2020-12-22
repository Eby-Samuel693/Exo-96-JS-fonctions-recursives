let div = document.getElementById('div1');
let touche = document.getElementById('touche');
function rescur(param1) {
    let result = 1;
    for (let i = 1; i <= param1; i++)
        result = result * i;
    div.innerHTML = result;
    return result;
}

touche.addEventListener('click',rescur);