// SELETORES
var salvarBtn = document.querySelector("#btnPalavraSalvar");
var inputPalavra = document.querySelector(".inputPalavra");
var inputGrupo = document.querySelector(".inputGrupo");
var inputDica = document.querySelector(".inputDica");


salvarBtn.addEventListener("click", function(e){
	e.preventDefault();
	
	if (inputPalavra.value == "") {
		inputPalavra.focus();
		return
	} else if (inputGrupo.value == ""){
		inputGrupo.focus();
		return
	} else if (inputDica.value == "") {
		inputDica.focus();
	} else {
		sessionStorage.setItem("palavra", inputPalavra.value.toUpperCase());
		sessionStorage.setItem("grupo", inputGrupo.value.toUpperCase());
		sessionStorage.setItem("dica", inputDica.value.toUpperCase());
		sessionStorage.setItem("aleatorio", "NAO");
		window.location.href = "jogo.html";
		inputPalavra.value = "";
		inputGrupo.value = "";
		inputDica.value = "";			
	}	

});




