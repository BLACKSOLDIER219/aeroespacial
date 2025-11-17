 function registrar() {
            let num = parseInt(prompt("¿Cuántas distancias?"));
            let suma = 0;
            for (let i = 0; i < num; i++) {
                let dist = parseFloat(prompt(`Distancia ${i+1} en millones de km:`));
                suma += dist;
            }
            let promedio = suma / num;
            document.getElementById("resultado").textContent = `Promedio: ${promedio.toFixed(2)} millones de km`;
        }