/*
:::::::::::::::::::::::::::::::::::::::::::::::::::
Área dedicada as variaveis utilizadas nas questões.
:::::::::::::::::::::::::::::::::::::::::::::::::::
*/

let pergunta01 = ["Pergunta 1:", 1.1, 1.2, 1.3, 1.4, 0];
let pergunta02 = ["Pergunta 2:", 2.1, 2.2, 2.3, 2.4, 1];
let pergunta03 = ["Pergunta 3:", 3.1, 3.2, 3.3, 3.4, 2];
let pergunta04 = ["Pergunta 4:", 4.1, 4.2, 4.3, 4.4, 3];
let pergunta05 = ["Pergunta 5:", 5.1, 5.2, 5.3, 5.4, 4];
let pergunta06 = ["Pergunta 6:", 6.1, 6.2, 6.3, 6.4, 5];
let pergunta07 = ["Pergunta 7:", 7.1, 7.2, 7.3, 7.4, 6];
let pergunta08 = ["Pergunta 8:", 8.1, 8.2, 8.3, 8.4, 7];
let pergunta09 = ["Pergunta 9:", 9.1, 9.2, 9.3, 9.4, 8];
let pergunta10 = ["Pergunta 10:", 10.1, 10.2, 10.3, 10.4, 9];

var lista;
var resposta = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
var gabarito = { 0: 0.1, 1: 1.2, 2: 2.3, 3: 3.4, 4: 4.1, 5: 5.2, 6: 6.3, 7: 7.4, 8: 8.1, 9: 9.2 };
var resultado = 0;

/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::
Determina questão a ser carregada e carrega respostas.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

window.onload = carregar(pergunta01);

function carregar(var1) {
  lista = [var1];
  n1 = lista[0][5]
  //console.log(lista)
  document.getElementById("pergunta_").textContent = lista[0][0];
  document.getElementsByClassName("botao_1")[n1].style.backgroundColor = "#b20000";
  document.getElementsByClassName("botao_1")[n1].style.color = "white";

  for(i=0; i < 10; i++){
    if (i != n1){
    document.getElementsByClassName("botao_1")[i].style.backgroundColor = "white";
    document.getElementsByClassName("botao_1")[i].style.color = "#b20000";
  }
}
  for (i = 0; i < document.getElementsByClassName("lista").length; i++) {
    document.getElementsByClassName("lista")[i].textContent = lista[0][i + 1];
  }
  animaBotaoResposta()
}

/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 Executa o carregamento das respostas sobre o array resposta para check final. 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function answer(var1) {
  let n2 = lista[0][5]
  resposta[lista[0][5]] = n2 + (var1/10);
  //console.log(n2)
  //console.log(resposta);
  animaBotaoResposta()
}

/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Realiza teste das respostas e trabalha String a ser apresentada no diploma.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function answerTest() {
  for (i = 0; i < 10; i++) {
    //console.log(gabarito[i])
    //console.log(resposta[i])
    if (resposta[i] == gabarito[i]) {
      resultado += 1;
    }
  }
  //console.log(resultado);
  document.getElementsByClassName("quizz")[0].style.display = "none";
  document.getElementsByClassName("quizz")[1].style.display = "none";
  document.getElementsByClassName("diploma")[0].style.display = "block";
  document.getElementsByClassName("diploma2")[0].style.display = "block";
 
  if (resultado < 6){
  document.getElementById("nota_diploma").textContent = `Nota avaliação : ${resultado} de 10`;
  }

}

function teste() {
  console.log(document.getElementById("botao_1").value);
}

/* 
:::::::::::::::::::::::::::::::::::::::::
Segunda etapa do carregamento do diploma. 
:::::::::::::::::::::::::::::::::::::::::
*/

var nomeDiploma;
var raDiploma;

function carregaDados() {
  // Grava nome em uma variavel e carrega no <div> Diploma

  //console.log(document.getElementById("nome_diploma").value);

  nomeDiploma = document.getElementById("nome_diploma").value;
  raDiploma = document.getElementById("ra_diploma").value;

  //console.log(nomeDiploma);

  // Manipulação documento Diploma

  document.getElementById("diploma_nome").textContent = `Aluno: ${nomeDiploma}`;
  document.getElementById("diploma_ra").textContent = `RA : ${raDiploma}`;

}

function imprimir() {
  document.getElementsByClassName("quizz")[0].style.display = "none";
  document.getElementsByClassName("diploma")[0].style.display = "none";
  document.getElementById("imagem_diploma").style.display = "block";
 
  window.print();
}

/* 
::::::::::::::::::::::::::::::::::::::
Função dedicada a animação dos botoes.
::::::::::::::::::::::::::::::::::::::
*/

function animaBotaoResposta(){

    for (i = 0; i < document.getElementsByClassName("lista").length; i++) {
        n1 = lista[0][5]
        n2 = document.getElementsByClassName("lista")[i].value = n1 + ((i+1)/10)
        n3 = resposta[n1]


        //console.log(n1)
        //console.log(n2)
        //console.log(n3)
        
        if (n2 == n3){
            document.getElementsByClassName("lista")[i].style.backgroundColor = "#054166"
            document.getElementsByClassName("lista")[i].style.color = "#B3B012"
        }else {
            document.getElementsByClassName("lista")[i].style.backgroundColor = "white" 
            document.getElementsByClassName("lista")[i].style.color = "black"

        }
    
     }
}

// Commit   
