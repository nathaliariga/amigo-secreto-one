// 1) Estado: onde os nomes ficam guardados
let amigos = [];

// 2) Adiciona um nome à lista
function adicionarAmigo() {
  // pegue o valor do input (ajuste o ID se no seu HTML estiver diferente)
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  // validação: não aceitar vazio
  if (!nome) {
    alert('Por favor, insira um nome.');
    input.focus();
    return;
  }

  // coloca no array
  amigos.push(nome);

  // limpa e foca de novo
  input.value = '';
  input.focus();

  // atualiza a lista visível
  atualizarLista();
}

// 3) Atualiza a <ul>/<ol> com os nomes do array
function atualizarLista() {
  // ⚠️ ATENÇÃO AO ID: no template da Alura às vezes é "listaAmigos" e às vezes "lista-amigos"
  // Se no seu HTML estiver "lista-amigos", troque abaixo para 'lista-amigos'
  const lista = document.getElementById('listaAmigos') || document.getElementById('lista-amigos');

  // garante que não duplique
  lista.innerHTML = '';

  // cria um <li> para cada nome
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 4) Sorteia um nome aleatório e mostra no elemento de resultado
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione amigos antes de sortear.');
    return;
  }

  // índice aleatório entre 0 e (amigos.length - 1)
  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  // ⚠️ ATENÇÃO AO ID do resultado: ajuste se no seu HTML for outro
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo sorteado: <strong>${sorteado}</strong>`;
}

// 5) Se seus botões chamam onclick="adicionarAmigo()" e onclick="sortearAmigo()",
// essas linhas garantem que as funções fiquem visíveis para o HTML.
window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;
