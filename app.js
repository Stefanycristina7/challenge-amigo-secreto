let amigos= [];

/* Essa finção vai fazer com que os amigos sejam adicionados na lista*/ 

function adicionarAmigo(){
  let campoAmigo = document.getElementById('amigo');
  let amigoInserido = campoAmigo.value.trim();

  if(amigoInserido === ''){
    alert('Por favor, digite um nome válido');
    return;
  }

  amigos.push(amigoInserido);
  campoAmigo.value = ''; // limpa o campo da entrada após nome adicionado
  campoAmigo.focus();
  atualizarListaDeAmigos();
}
