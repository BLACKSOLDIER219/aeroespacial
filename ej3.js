let contador = 0;

function registrarCrater() {
  const valor = document.getElementById("diametro").value;
  const d = parseFloat(valor);
  const r = document.getElementById("resultado3");

  if (valor === "" || isNaN(d)) {
    r.textContent = "Ingresa un número válido.";
    return;
  }

  if (d === 0) {
    r.textContent = `Cráteres mayores a 50 km: ${contador}`;
    contador = 0; // reinicia
    return;
  }

  if (d > 50) {
    contador++;
  }

  document.getElementById("diametro").value = "";
}
