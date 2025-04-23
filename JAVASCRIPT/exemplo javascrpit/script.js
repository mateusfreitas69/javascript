let titulo= document.querySelector("#titulo");
let campotexto = document.querySelector("#campotexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterartexto(){
    //Retirando o valor digitado no input
    //e jogando na variável
    let textoDigitado = campotexto.value;

    //Atribuindo ao elemento titulo o texto que foi digitado
    //no input
    titulo.textContent = textoDigitado;
}
// Atribuindo uma ação de clicar no botão 
btTrocarTexto.onclick = function(){
    alterartexto();
} 