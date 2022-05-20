# jogodaforca
Challeng One Jogo da Forca

<h1> Requisitos: </h1>
<p>
- Deve funcionar só com letras maiúsculas; <br>
- Não devem ser utilizadas letras com acentos nem caracteres especiais;<br>
- Ao completar o desenho da forca, deve ser exibida uma mensagem na tela de "Fim de Jogo";<br>
- Se completar a palavra correta antes de acabarem as tentativas, deve ser exibida na tela a mensagem "Você Venceu. Parabéns!";<br>
- A página deve ter os traços indicando cada letra da palavra, separados por espaço;<br>
- A página deve ter um botão de "Iniciar Jogo" para começar o jogo;<br>
- Só deve ser possívél escrever letras (os números não serão válidos)<br>
- As letras erradas devem aparecer na tela, mas não podem aparecer repetidamente;<br>
- As letras corretas devem ser mostradas na tela acima dos traços, nas posições corretas em relação à palavra.<br>
</p>

<h1>Extras:</h1>
<p>
- A página deve conter um campo para inserção de texto com a finalidade de adicionar novas palavras ao jogo, e um botão "Adicionar nova palavra". 
</p>

<h1>Observações:</h1>
<p>
	Neste projeto aprendi várias coisas novas tanto do JavaScript quanto CSS, foi um desafio interessante!<br>
	Aprendi a usar os métodos: <br>
	includes(), retorna true se existe um item em um array.<br>
	split(), separa uma string em array de letras.<br>
	Aprendi a criar váriaveis que ficam guardadas no "sessionStorage", muito util para transportar a váriavel para outra página, por exemplo.<br>
	Criei três páginas diferentes, uma para o inicio (index), outra para criar a palavra e por fim uma pro jogo.<br>
	Criei um teclado virtual na página do jogo onde o jogador interage com o click para jogar.<br>
	Adicionei um evento que captura o click dessas teclas e retorna o valor das mesmas comparando com a palavra secreta
	dentro de um forEach.<br>
	Tive que pegar duas funções na internet que não consegui implementar sozinho, uma que usa o método filter para tirar os espaços em branco da string, e outra para remover os acentos da string.

</p>
