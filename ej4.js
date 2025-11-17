function identificar() {
  const valor = document.getElementById("codigo").value;
  const c = parseInt(valor);
  const r = document.getElementById("resultado4");

  if (valor === "" || isNaN(c)) {
    r.textContent = "Ingresa un código válido del 1 al 5.";
    return;
  }

  let nombre;

  switch (c) {
    case 1: nombre = "Estrella"; break;
    case 2: nombre = "Planeta"; break;
    case 3: nombre = "Cometa"; break;
    case 4: nombre = "Asteroide"; break;
    case 5: nombre = "Galaxia"; break;
    default:
      nombre = "Código no reconocido.";
  }

  r.textContent = "Resultado: " + nombre;
}
