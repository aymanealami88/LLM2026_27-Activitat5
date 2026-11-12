/* Exercici 1: galeria d'imatges (codi en un fitxer .js extern)
   En clicar una miniatura es carrega la imatge gran a sota. */
function mostrarImatge(miniatura) {
  var visor = document.getElementById("imatge-gran");
  var peu = document.getElementById("peu-imatge");
  var totes = document.querySelectorAll(".galeria-miniatures img");

  visor.src = miniatura.getAttribute("data-gran");
  visor.alt = miniatura.alt;
  peu.textContent = miniatura.alt;

  for (var i = 0; i < totes.length; i++) {
    totes[i].classList.remove("seleccionada");
  }
  miniatura.classList.add("seleccionada");
}
