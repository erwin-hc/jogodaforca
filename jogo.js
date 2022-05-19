var palavra = sessionStorage.getItem("palavra");
var grupo = sessionStorage.getItem("grupo");
var dica = sessionStorage.getItem("dica");
var aleatorio = sessionStorage.getItem("aleatorio");

var tituloGrupo = document.querySelector(".grupo");
var tituloDica = document.querySelector(".dica");
var divPalavra = document.querySelector(".palavra");

// JSON COM 20 PALAVRAS PARA PEGAR NO ALEATORIO
var objPalavrasAleatorias = [
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
		palavra: "forno",
		grupo: "objeto",
		dica: "para cozinhar"
	},
	{
		palavra: "ventilador",
		grupo: "objeto",
		dica: "verão"
	},
	{
		palavra: "cerveja",
		grupo: "bebida",
		dica: "boa é tomar gelada"
	},
		{
		palavra: "whisky",
		grupo: "bebida",
		dica: "scotch"
	},
		{
		palavra: "limonada",
		grupo: "bebida",
		dica: "toda criança gosta"
	},
		{
		palavra: "pinga",
		grupo: "bebida",
		dica: "feita no brasil"
	},
		{
		palavra: "vinho",
		grupo: "bebida",
		dica: "biblia"
	},
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
	{
		palavra: "exorcista",
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
		dica: "filme vampiros"
	},
	{
		palavra: "alura",
		grupo: "cursos",
		dica: "internet"
	},
		{
		palavra: "js html css",
		grupo: "tecnologia",
		dica: "tríade front end"
		},
		{
		palavra: "button",
		grupo: "tecnologia",
		dica: "tag html"
		},
		{
		palavra: "martelo",
		grupo: "ferramenta",
		dica: "carpinteiro usa"
		},
		{
		palavra: "serrote",
		grupo: "ferramenta",
		dica: "carpinteiro usa"
		},
		{
		palavra: "talhadeira",
		grupo: "ferramenta",
		dica: "pedreiro usa"
		},

];

// SE VARIAVEL ALEATORIO FOR NAO PEGA OS VALORES DOS IMPTUS
if (aleatorio == "NAO") {
	tituloGrupo.innerHTML = "GRUPO: " + grupo;
	tituloDica.innerHTML = "DICA: " + dica;
	separaPalavra(palavra);	
// SE VARIAVEL ALEATORIO FOR SIM PEGA DO JSON ALEATORIAMENTE
} else {
	// INDICE ARRAY ALEATORIO
	var ia = Math.floor(Math.random() * objPalavrasAleatorias.length);
	var palavraAleatoria = objPalavrasAleatorias[ia]['palavra'].toUpperCase();
	var grupoAleatorio = objPalavrasAleatorias[ia]['grupo'].toUpperCase();
	var dicaAleatoria = objPalavrasAleatorias[ia]['dica'].toUpperCase();

	tituloGrupo.innerHTML = "GRUPO: " + grupoAleatorio;
	tituloDica.innerHTML = "DICA: " + dicaAleatoria;
	separaPalavra(palavraAleatoria);
}

// FUNCAO PRA SEPARAR A PALAVRA E COLOCAR NAS DIV'S
function separaPalavra(palavraSecreta) {
	var arrayPalavra = palavraSecreta.split("");
	for (var i=0; i < arrayPalavra.length; i++) {
	divPalavra.innerHTML += "<div class='letras'><h1>"+arrayPalavra[i]+"</h1></div>";
	}
};

// BOTAO NOVO JOGO SETA VARIAVEL PARA ALEATORIO
var btnJogoNovo = document.querySelector("#btnJogoNovo");
btnJogoNovo.addEventListener("click", function () {
	sessionStorage.setItem("aleatorio", "SIM");
});

// VERIFICA VALORES DAS DIV'S TECLADO
var divTeclado = document.querySelector(".teclado");
var divTeclas = divTeclado.querySelectorAll("div");
var divPalavra = document.querySelector(".palavra");
var bonecoSvg = document.querySelector(".svg-boneco");

/// MODAL MSG
var modalMsg = document.querySelector(".modal-msg");
var btnModalNovo = document.querySelector("#btnModalNovo");
var btnModalSair = document.querySelector("#btnModalSair");

// img-container-modal BACKGROUND-COLOR VERDE/VERMELHO
// img-msg IMAGEM VITORIA/DERROTA
// titulo-msg TITULO VENCEU/PERDEU

var divModal = document.querySelector(".container-msg");
var imgModal = document.querySelector(".img-msg");
var tituloModal = document.querySelector(".titulo-msg");

// AUXILIAR PARA COMPARAR SE ACERTOU PALAVRA
var auxVenceu = 0;
var auxBoneco = -1;

divTeclas.forEach(function (item) {

    item.addEventListener('click', function (e) {

    	if (aleatorio == 'SIM') {
        	var palavraSecreta = palavraAleatoria;
    	} else {
    		var palavraSecreta = palavra;
    	}

    	var arrayPalavraSecreta = palavraSecreta.split("");
    	var tecla = e.target.textContent;
    	// PINTA VERDE OU VERMELHO AS TECLAS
    	if (arrayPalavraSecreta.includes(tecla)) {
    		e.target.classList.add("verde");
    		e.target.style.pointerEvents = "none";

    	} else {
    		e.target.classList.add("vermelho");
    		e.target.style.pointerEvents = "none";
    		auxBoneco++;
    		bonecoSvg.children[auxBoneco].style.opacity = 1;

    		if (auxBoneco >8) {
    			// alert("PERDEU PLAYBOY");
    				tituloModal.textContent = "PERDEU";
					divModal.style.backgroundColor = "rgba(217,83,79,0.6)";
					imgModal.src="assets/derrota.svg";
					modalMsg.classList.toggle("hide");
    		}
    	};

    	// MOSTRA LETRA 
		for (var i=0;i<divPalavra.children.length;i++) {
			
			if (divPalavra.children[i].textContent == tecla) {
				divPalavra.children[i].firstChild.style.opacity = 1;
				auxVenceu++;

				// APAGA ESPACOS DA PALAVRA 
				var tiraEspacoPalavra = arrayPalavraSecreta.filter(e => String(e).trim());
				if (auxVenceu == tiraEspacoPalavra.length) {
					// alert("VENCEU");
					tituloModal.textContent = "VENCEU";
					divModal.style.backgroundColor = "rgba(92,184,92,0.6)";
					imgModal.src="assets/vitoria.svg";
					modalMsg.classList.toggle("hide");

				}
			};
		};

    });

});

btnModalNovo.addEventListener("click", function() {
	sessionStorage.setItem("aleatorio", "SIM");
	modalMsg.classList.add("hide");
});
btnModalSair.addEventListener("click", function() {
	modalMsg.classList.add("hide");
});