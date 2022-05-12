// VARIAVEIS
var btnMenu = document.querySelector("#ico-config");
var configModal = document.querySelector(".modal");
var container = document.querySelector(".grid-imagem");


// MOSTRA / ESCONDE MODAL 
btnMenu.addEventListener("click", function () {
	configModal.classList.toggle("hide");
});
// ESCONDE MODAL NO CLICK FORA
container.addEventListener("click", function(){
	configModal.classList.add("hide");
});