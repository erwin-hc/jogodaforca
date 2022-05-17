var palavra = sessionStorage.getItem("palavra");
var grupo = sessionStorage.getItem("grupo");
var dica = sessionStorage.getItem("dica");
var aleatorio = sessionStorage.getItem("aleatorio");

var tituloGrupo = document.querySelector(".grupo");
var tituloDica = document.querySelector(".dica");
var divPalavra = document.querySelector(".palavra");

var palavraAleatoria = "PALAVRA ALEATORIA";



if (aleatorio == "NAO") {
	tituloGrupo.innerHTML = "Grupo: " + grupo;
	tituloDica.innerHTML = "Dica: " + dica;
	separaPalavra(palavra);	
} else {
	tituloGrupo.innerHTML = "Grupo: " + "GERAL";
	tituloDica.innerHTML = "Dica: " + "USAMOS NA ESCRITA";
	separaPalavra(palavraAleatoria);
}

// FUNCAO PRA SEPARAR A PALAVRA E COLOCAR NAS DIVS
function separaPalavra(palavraSecreta) {
	var arrayPalavra = palavraSecreta.split("");
	for (var i=0; i < arrayPalavra.length; i++) {
	divPalavra.innerHTML += "<div class='letras'>"+arrayPalavra[i]+"</div>";
	}
};


var objPalavrasAleatorias = {
////////////////////////////////////////
// OBJETOS
////////////////////////////////////////
	{
		palavra: "lampada",
		grupo: "objeto",
		dica: "toda casa tem"
	},
	{
		palavra: "celular",
		grupo: "objeto",
		dica: "ninguém vive sem"
	},
	{
		palavra: "bicicleta",
		grupo: "objeto",
		dica: "qualidade de vida"
	},
	{
		palavra: "guarda chuva",
		grupo: "objeto",
		dica: "mantém você seco"
	},
	{
		palavra: "ventilador",
		grupo: "objeto",
		dica: "mantém você fresco"
	},
////////////////////////////////////////
// BEBIDAS
////////////////////////////////////////
	{
		palavra: "cerveja",
		grupo: "bebida",
		dica: "boa é tomar gelada"
	},
		{
		palavra: "whisky",
		grupo: "bebida",
		dica: "conhecido como scotch"
	},
		{
		palavra: "refrigerante",
		grupo: "bebida",
		dica: "toda criança gosta"
	},
		{
		palavra: "cachaça",
		grupo: "bebida",
		dica: "feita no brasil"
	},
		{
		palavra: "vinho",
		grupo: "bebida",
		dica: "tá até na biblia"
	},
////////////////////////////////////////
// MUSICA
////////////////////////////////////////
	{
		palavra: "metallica",
		grupo: "musica",
		dica: "big four"
	},
		{
		palavra: "sepultura",
		grupo: "musica",
		dica: "metal nacional"
	},
		{
		palavra: "colera",
		grupo: "musica",
		dica: "banda punk"
	},
		{
		palavra: "slayer",
		grupo: "musica",
		dica: "trash metal"
	},
		{
		palavra: "ramones",
		grupo: "musica",
		dica: "banda punk"
	},
////////////////////////////////////////
// FILME
////////////////////////////////////////
	{
		palavra: "o exorcista",
		grupo: "filme",
		dica: "classico de terror"
	},
	{
		palavra: "star wars",
		grupo: "filme",
		dica: "classico sci fi"
	},
	{
		palavra: "casablanca",
		grupo: "filme",
		dica: "1942"
	},
	{
		palavra: "psicose",
		grupo: "filme",
		dica: "alfred hitchcock"
	},
	{
		palavra: "nosferatu",
		grupo: "filme",
		dica: "filme alemão vampiros"
	},

}