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

//Essa função vai atualizar os nomes na lista e vai colocar eles na tela usando a tag <li>
function atualizarListaDeAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; //Limpa a lista antes de adicionar para que não haja nomes duplicados

  for (let i = 0; i <  amigos.length; i++) {
    let nomeItem = document.createElement('li');
    nomeItem.classList.add('item-amigo');
    nomeItem.textContent = amigos[i];

    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = '❌';
    botaoRemover.classList.add('botao-excluir');//criando uma classe para o elemento button
    botaoRemover.onclick = function(){
      removerAmigo(i);
    };
    nomeItem.appendChild(botaoRemover);
    listaAmigos.appendChild(nomeItem);
    
  }
}
//essa função é para que o usuario consiga remover os amigos da lista 
function removerAmigo(index){
  amigos.splice(index,1);
  atualizarListaDeAmigos();
}
//A função vai realizar o sorteio dos nomes
function sortearAmigo() {
  if (amigos.length < 3) {
    alert('Por favor, insira no mínimo 3 amigos!');
    return;
  }
  if (sorteados.length === amigos.length) {
    alert('Todos os amigos já foram sorteados!');
    return;
  }
}
