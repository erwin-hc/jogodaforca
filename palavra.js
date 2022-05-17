// SELETORES
var salvarBtn = document.querySelector("#btnPalavraSalvar");
var inputPalavra = document.querySelector(".inputPalavra");
var inputGrupo = document.querySelector(".inputGrupo");
var inputDica = document.querySelector(".inputDica");

// BOTAO SALVAR
salvarBtn.addEventListener("click", function(e){
	e.preventDefault();
	
	// CHECA SE OS INPUTS ESTAO PREENCHIDOS
	if (inputPalavra.value == "") {
		inputPalavra.focus();
		return
	} else if (inputGrupo.value == ""){
		inputGrupo.focus();
		return
	} else if (inputDica.value == "") {
		inputDica.focus();
	} else {
		// SE TUDO TIVER PREENCHIDO SETA AS VARIAVES NO SESSION STORAGE E LIMPA OS CAMPOS
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




