document.getElementById("jugar-btn").addEventListener("click", function() {
    let numJuegos = parseInt(prompt("¿Cuántas veces deseas jugar?"));

    if (isNaN(numJuegos) || numJuegos <= 0) {
        alert("Por favor, ingresa un número válido.");
    } else {
        for (let i = 0; i < numJuegos; i++) {
            let jugadaUsuario = parseInt(prompt("Ingresa 1 para Piedra🪨\nIngresa 2 para Papel✋\nIngresa 3 para Tijera✂️"));
            let jugadaComputadora = Math.floor(Math.random() * 3) + 1;

            if (jugadaUsuario === 1) {
                if (jugadaComputadora === 1) {
                    alert("La computadora ha elegido: Piedra. ¡Empate!");
                } else if (jugadaComputadora === 2) {
                    alert("La computadora ha elegido: Papel. Perdiste.");
                } else {
                    alert("La computadora ha elegido: Tijera. ¡Felicidades, Ganaste!");
                }
            } else if (jugadaUsuario === 2) {
                if (jugadaComputadora === 1) {
                    alert("La computadora ha elegido: Piedra. ¡Felicidades, Ganaste!");
                } else if (jugadaComputadora === 2) {
                    alert("La computadora ha elegido: Papel. ¡Empate!");
                } else {
                    alert("La computadora ha elegido: Tijera. Perdiste.");
                }
            } else if (jugadaUsuario === 3) {
                if (jugadaComputadora === 1) {
                    alert("La computadora ha elegido: Piedra. Perdiste.");
                } else if (jugadaComputadora === 2) {
                    alert("La computadora ha elegido: Papel. ¡ Felicidades, Ganaste!");
                } else {
                    alert("La computadora ha elegido: Tijera. ¡Empate!");
                }
            } else {
                alert("Opción no válida. Por favor, ingresa 1, 2 o 3.");
                i--;
            }
        }
    }
});
