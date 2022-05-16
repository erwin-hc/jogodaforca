var palavra = sessionStorage.getItem("palavra");
var grupo = sessionStorage.getItem("grupo");
var dica = sessionStorage.getItem("dica");
var aleatorio = sessionStorage.getItem("aleatorio");

var tituloGrupo = document.querySelector(".grupo");
var tituloDica = document.querySelector(".dica");
var divPalavra = document.querySelector(".palavra");


if (aleatorio == "NAO") {
	tituloGrupo.innerHTML = "Grupo: " + grupo;
	tituloDica.innerHTML = "Dica: " + dica;
	
} else {
}

