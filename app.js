// 1) Estado: onde guardamos os nomes
let amigos = [];

// 2) Adiciona um nome à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  // valida: não aceitar vazio
  if (!nome) {
    alert('Por favor, insira um nome.');
    input.focus();
    return;
  }

  // coloca no array
  amigos.push(nome);

  // limpa e mantém o foco no campo
  input.value = '';
  input.focus();

  // atualiza a lista visível e limpa um resultado antigo
  atualizarLista();
  limparResultado();
}

// 3) Renderiza a lista de amigos (ul id="listaAmigos")
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // evita duplicação

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 4) Limpa a ul de resultado (ul id="resultado")
function limparResultado() {
  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';
}

// 5) Sorteia um amigo e mostra como <li> dentro da ul #resultado
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione amigos antes de sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = ''; // mostra um resultado por vez

  const li = document.createElement('li');
  li.innerHTML = `Amigo sorteado: <strong>${sorteado}</strong>`;
  ulResultado.appendChild(li);
}

// 6) Deixa as funções acessíveis para os botões com onclick no HTML
window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;

