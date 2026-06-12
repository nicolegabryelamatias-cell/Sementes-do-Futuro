let pontos = 0;
let respondidas = {};

function responder(pergunta, correta){

  if(respondidas[pergunta]){
    return;
  }

  respondidas[pergunta] = true;

  if(correta){
    pontos++;
  }
}

function mostrarResultado(){

  let mensagem = "";

  if(pontos === 3){
    mensagem = "🎉 Excelente! Você acertou tudo.";
  } else if(pontos >= 2){
    mensagem = "👍 Muito bem!";
  } else {
    mensagem = "📚 Continue aprendendo.";
  }

  document.getElementById("resultado").innerText =
    "Pontuação: " + pontos + "/3 - " + mensagem;
}
