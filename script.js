function somar(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').innerText = `${resultado}`;
}

function subtrair(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = num1 - num2;
    document.getElementById('resultado').innerText = `${resultado}`;
}

function multiplicar(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = num1 * num2;
    document.getElementById('resultado').innerText = `${resultado}`;
}

function dividir(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado;

    if(num1 == 0){
        document.getElementById('resultado').innerText = 'Impossível';
    }

    else if(num1 > num2){
        resultado = num1 / num2;
    } 

    else {
        resultado = num2 / num1;
    }

    document.getElementById('resultado').innerText = `${resultado}`;
}