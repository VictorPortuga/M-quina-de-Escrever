function maquinaDeEscrever(elemento) {
  const texto = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  texto.forEach((letra, i) =>
    setTimeout(() => (elemento.innerHTML += letra), 75 * i),
  );
}

const titulo = document.querySelector('h1');
maquinaDeEscrever(titulo);
