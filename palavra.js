// SELETORES
var salvarBtn = document.querySelector("#btnPalavraSalvar");
var inputPalavra = document.querySelector(".inputPalavra");
var inputGrupo = document.querySelector(".inputGrupo");
var inputDica = document.querySelector(".inputDica");

// BOTAO SALVAR
salvarBtn.addEventListener("click", function(e){
	e.preventDefault();
	
	if (!isNaN(inputPalavra.value)) {
		inputPalavra.value = "";
		inputPalavra.placeholder = "APENAS LETRAS PERMITIDAS.."; 
		inputPalavra.focus();
		return false;
	}
	// CHECA SE OS INPUTS ESTAO PREENCHIDOS
	if (inputPalavra.value == "") {
		inputPalavra.focus();
		return false;
	} else if (inputGrupo.value == ""){
		inputGrupo.focus();
		return false;
	} else if (inputDica.value == "") {
		inputDica.focus();
	} else {
		// SE TUDO TIVER PREENCHIDO SETA AS VARIAVES NO SESSION STORAGE E LIMPA OS CAMPOS
		sessionStorage.setItem("palavra", inputPalavra.value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
		sessionStorage.setItem("grupo", inputGrupo.value.toUpperCase());
		sessionStorage.setItem("dica", inputDica.value.toUpperCase());
		sessionStorage.setItem("aleatorio", "NAO");
		window.location.href = "jogo.html";
		inputPalavra.value = "";
		inputGrupo.value = "";
		inputDica.value = "";			
	}	

});



// const removeAcentos = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
