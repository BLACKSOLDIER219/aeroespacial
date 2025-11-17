function clasificarBrillo() {
  const valor = document.getElementById("magnitud").value;
  const m = parseFloat(valor);
  const r = document.getElementById("res1");

  if (valor === "" || isNaN(m)) {
    r.textContent = "Ingresa una magnitud válida.";
    return;
  }

  let clasificacion = "";
  if (m <= 0) clasificacion = "Extremadamente brillante";
  else if (m <= 1) clasificacion = "Muy brillante";
  else if (m <= 2) clasificacion = "Brillante";
  else if (m <= 6) clasificacion = "Débil";
  else clasificacion = "No visible";

  r.textContent = `Magnitud: ${m} - Clasificación: ${clasificacion}`;
}
