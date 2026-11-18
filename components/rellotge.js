/* Exercici 3: rellotge que compta el temps des que carrega la pagina
   fins la propera recarrega. */
function iniciarRellotge(idElement) {
  var element = document.getElementById(idElement);
  var inici = Date.now();

  function dosDigits(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function actualitzar() {
    var segons = Math.floor((Date.now() - inici) / 1000);
    var h = Math.floor(segons / 3600);
    var m = Math.floor((segons % 3600) / 60);
    var s = segons % 60;
    element.textContent = "Temps a la pàgina: " + dosDigits(h) + ":" + dosDigits(m) + ":" + dosDigits(s);
  }

  actualitzar();
  setInterval(actualitzar, 1000);
}
