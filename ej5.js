let lista = [];

function registrarLux() {
  const valor = document.getElementById("lux").value;
  const r = document.getElementById("resultado5");

  let entrada = valor.toLowerCase();

  if (entrada === "no") {
    // Mostrar resultados
    let texto = "Registro:<br>";

    let i = 0;
    do {
      let v = lista[i];
      let estado = v < 5 ? "Noche profunda" : "Normal";
      texto += `• ${v} lux → ${estado}<br>`;
      i++;
    } while (i < lista.length);

    r.innerHTML = texto;

    lista = [];
    document.getElementById("lux").value = "";
    return;
  }

  const numero = parseFloat(valor);

  if (isNaN(numero)) {
    r.textContent = "Ingresa un número válido o escribe 'no'.";
    return;
  }

  lista.push(numero);
  document.getElementById("lux").value = "";
}
