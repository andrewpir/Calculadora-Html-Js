var tela = document.getElementById("disp");

var firstsub = true;
var firstsoma = true;
var firstmult = true;
var firstdivi = true;

var doted = false; // variavel para o ponto
var firstnumber = true; // variavel para zerar a tela

var ultimaEquacao; // variavel para manter a ultima equação
var num1, num2; // variavel para manter os dois numeros




function ac() { // função de zerar a tela
    document.getElementById("disp").innerHTML = 0;
    firstnumber = true;
}

function reset() { // Função para resetar toda a memória da calculadora
    ultimaEquacao = ""; 
    num1 = 0;
    doted = false; 
    firstnumber = true; 
    firstcalc = true;
    document.getElementById("disp").innerHTML = 0;
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
    num1 = Number.parseFloat(document.getElementById("disp").innerHTML);
    ultimaEquacao = equa.toString();
    firstnumber = true;
    document.getElementById("log").innerHTML = (equa + num1);
}

function resultado() {
    switch (ultimaEquacao) {
        case "soma":
                num2 = Number.parseFloat(document.getElementById("disp").innerHTML);
                result = num1 + num2;
                document.getElementById("disp").innerHTML = result;
                document.getElementById("log").innerHTML = (num1 + " " + num2 + " " + result);
        break;
        case "subt":
                num2 = Number.parseFloat(document.getElementById("disp").innerHTML);
                result = num1 - num2;
                document.getElementById("disp").innerHTML = result;
                document.getElementById("log").innerHTML = (num1 + " " + num2 + " " + result);
        break;
        case "mult":
                num2 = Number.parseFloat(document.getElementById("disp").innerHTML);
                result = num1 * num2;
                document.getElementById("disp").innerHTML = result;
                document.getElementById("log").innerHTML = (num1 + " " + num2 + " " + result);
        break;
        case "divi":
                num2 = Number.parseFloat(document.getElementById("disp").innerHTML);
                result = num1 / num2;
                document.getElementById("disp").innerHTML = result;
                document.getElementById("log").innerHTML = (num1 + " " + num2 + " " + result);
        break;
    }
    //document.getElementById("log").innerHTML = ("resultado");


    
    
}


