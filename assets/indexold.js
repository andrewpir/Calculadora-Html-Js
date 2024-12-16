var ultimaEquacao; // variavel para manter a ultima equação
var num1; // variavel para manter o primeiro numero
var doted = false; // variavel para o ponto
var firstnumber = true; // variavel para zerar a tela
var equalactive = false;
var tela = document.getElementById("disp");

function ac() { // função de zerar a tela
    document.getElementById("disp").innerHTML = 0;
    firstnumber = true;
}

function attDisplay(num) { // funçao de atualização do display a cada tecla
    if (firstnumber == true) { // se for o primeiro numero ele tira o que tem e limpa a tela
        document.getElementById("disp").innerHTML = "";
        firstnumber = false;
    };
    if (num == "dot" && doted == false) { // se for apertado o ponto e doted for falso
        doted = true;
        num = ".";
    }else if (num == "dot" && doted == true) { // se for apertado o ponto e ja tiver um ponto ativo
        num = "";
    }
    number = document.getElementById("disp").innerHTML + num; //linha para adicionar numero na string
    document.getElementById("disp").innerHTML = number;
}

function equacao(equa) { //função de equação para pegar o primeiro numero e preparar para o próximo numero
    var equaString = equa.toString();
    if (equalactive == false) {
        num1 = Number.parseFloat(document.getElementById("disp").innerHTML); // salva o primeiro numero
        firstnumber = true;
        ultimaEquacao = equaString; // salva a equação selecionado
        equalactive = true;
    }else if (equalactive == true) {
        resultado();
        num1 = Number.parseFloat(document.getElementById("disp").innerHTML); // salva o primeiro numero
        firstnumber = true;
        ultimaEquacao = equaString; // salva a equação selecionado
    }
}

function calcula(num1) {
    var num2 = Number.parseFloat(document.getElementById("disp").innerHTML);
    var resp;
    switch (ultimaEquacao) {
        case "soma":
            resp = num1 + num2;
        break;
        case "subt":
            resp = num1 - num2;
            num2 = num1;
        break;
        case "mult":
            resp = num1 * num2;
        break;
        case "divi":
            resp = num1 / num2;
        break;
    }
    return resp;
}

function resultado() {
    var result = calcula(num1)
    document.getElementById("disp").innerHTML = result;
    num1 = Number.parseFloat(document.getElementById("disp").innerHTML);
    firstnumber = true;
    equalactive = false;
}

function reset() {
    ultimaEquacao = ""; 
    num1 = 0;
    doted = false; 
    firstnumber = true; 
    equalactive = false;
    document.getElementById("disp").innerHTML = 0;
}
