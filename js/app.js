let amigos = [];

function aumentarPrimeiraLetra(nome) {
  return nome.charAt(0).toUpperCase() + nome.substring(1);
}

function adicionar() {
  let amigo = document.getElementById("nome-amigo").value;
  if (amigo == "") {
    alert("Preencha o nome do amigo!");
    return;
  }

  if (amigos.map(nome => nome.toUpperCase()).includes(amigo.toUpperCase())) {
    alert("Este amigo já está na lista, digite o sobrenome!");
    return;
}

  let lista = document.getElementById("lista-amigos");
  amigos.push(aumentarPrimeiraLetra(amigo));

  if (lista.textContent.trim() == "") {
    lista.textContent = amigo;
  } else {
    lista.textContent = lista.textContent + ", " + amigo;
  }
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("É necessário ter pelo menos 4 amigos para sortear!");
    return;
  }
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
  }
}

//código que embaralha a lista
function embaralha(lista) {
  let indice = lista.length;

  while (indice) {
    // atenção para o pós-incremento indice--
    const indiceAleatorio = Math.floor(Math.random() * indice--);
    [lista[indice], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").textContent = "";
}
