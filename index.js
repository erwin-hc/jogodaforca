// SELETORES
var iconeMenu = document.querySelector("#ico-config");
var iconeDark = document.querySelector("#ico-dark");
var iconeLight = document.querySelector("#ico-light");
var configModal = document.querySelector(".modal");
var container = document.querySelectorAll(".aux-modal");


// MOSTRA / ESCONDE MODAL 
iconeMenu.addEventListener("click", function () {
	configModal.classList.toggle("hide");
});
// ESCONDE MODAL NO CLICK FORA
container.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        configModal.classList.add("hide");
    });
});

// SELETORES E CORES THEMA
var cor_azul = document.getElementById('cor_azul');
var cor_vermelho = document.getElementById('cor_vermelho');
var cor_verde = document.getElementById('cor_verde');
var icones_svg = document.querySelectorAll('.icones_svg');

var bgLight = "242,242,242";
var bgDark = "30,30,30";

var corAzul ="92,122,255"; /*AZUL - 5c7aff */
var corVerde = "3,181,170"; /*VERDE - 03b5aa */
var corVermelho = "231,111,81"; /*VERMELHO - e76f51 */

var SVGAZUL ="invert(50%) sepia(37%) saturate(5876%) hue-rotate(213deg) brightness(101%) contrast(101%)";
var SVGVERDE ="invert(49%) sepia(87%) saturate(471%) hue-rotate(127deg) brightness(94%) contrast(98%)";
var SVGVERMELHO ="invert(53%) sepia(99%) saturate(1810%) hue-rotate(330deg) brightness(99%) contrast(82%)";


var corPadrao = sessionStorage.getItem('corPadrao');
var bgPadrao = sessionStorage.getItem('bgPadrao');
var svgPadrao = sessionStorage.getItem('svgPadrao');

window.onload = functionAddAttribute;
// ONLOAD ATRIBUTE
function functionAddAttribute(){
    document.documentElement.style.setProperty("--bg-global", bgPadrao);
    document.documentElement.style.setProperty("--cor-global", corPadrao);
    document.documentElement.style.setProperty("--cor-svg-global", svgPadrao);
};

// CLICK ICONE DARK
iconeDark.addEventListener("click", function(){
    document.documentElement.style.setProperty("--bg-global", bgDark);
    sessionStorage.setItem("bgPadrao", bgDark);

});
// CLICK ICONE LIGHT
iconeLight.addEventListener("click", function(){
    document.documentElement.style.setProperty("--bg-global", bgLight);
    sessionStorage.setItem("bgPadrao", bgLight);    
});
// MUDA PARA COR AZUL
cor_azul.addEventListener("click", function() {
    document.documentElement.style.setProperty("--cor-global", corAzul);
    sessionStorage.setItem("corPadrao", corAzul);
    sessionStorage.setItem("svgPadrao", SVGAZUL);    
    configModal.classList.add("hide");

    for(var i = 0; i < icones_svg.length; i++) {
    icones_svg[i].classList.add('svg-azul');
    icones_svg[i].classList.remove('svg-verde');
    icones_svg[i].classList.remove('svg-vermelho');
    }   
});
// MUDA PARA COR VERDE
cor_verde.addEventListener("click", function() {
    document.documentElement.style.setProperty("--cor-global", corVerde);
    sessionStorage.setItem("corPadrao", corVerde);
    sessionStorage.setItem("svgPadrao", SVGVERDE); 
    configModal.classList.add("hide");

    for(var i = 0; i < icones_svg.length; i++) {
    icones_svg[i].classList.remove('svg-azul');
    icones_svg[i].classList.add('svg-verde');
    icones_svg[i].classList.remove('svg-vermelho');
    }
});
// MUDA PARA COR VERMELHA
cor_vermelho.addEventListener("click", function() {
    document.documentElement.style.setProperty("--cor-global", corVermelho);
    sessionStorage.setItem("corPadrao", corVermelho);
    sessionStorage.setItem("svgPadrao", SVGVERMELHO); 
    configModal.classList.add("hide");

    for(var i = 0; i < icones_svg.length; i++) {
    icones_svg[i].classList.remove('svg-azul');
    icones_svg[i].classList.remove('svg-verde');
    icones_svg[i].classList.add('svg-vermelho');
    }
});


var btnAleatorio = document.querySelector("#btnIndexAleatorio");
var btnCriar = document.querySelector("#btnIndexCriar");

btnAleatorio.addEventListener("click", function() {
    sessionStorage.setItem("aleatorio", "SIM");
    window.location.href = "jogo.html";
});

btnCriar.addEventListener("click", function() {
    sessionStorage.setItem("aleatorio", "NAO");
    window.location.href = "palavra.html";
});