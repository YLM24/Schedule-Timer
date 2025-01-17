
let minutos = 25;  // Establecer el número de minutos (por ejemplo, 1 minuto)
let segundosRestantes = minutos * 60;  // Convertir los minutos a segundos
let temporizador;


function startPomodoro() {
    let minutosRestantes = Math.floor(segundosRestantes / 60); // Obtener los minutos restantes
    let segundos = segundosRestantes % 60;  // Obtener los segundos restantes

    document.getElementById('timer').innerHTML = minutosRestantes + ":" +segundos;

    if (segundosRestantes == 0) {
        alert("Se terminó el tiempo");
    } else {
        segundosRestantes--; 
        temporizador = setTimeout(startPomodoro, 1000);  // Llamar la función nuevamente después de 1 segundo
    }
}

document.getElementById('detener').addEventListener('click', detenerTemporizador);
function detenerTemporizador() {
    clearTimeout(temporizador);  // Detener el setTimeout
    console.log("Temporizador detenido");
}

/* Seleccionar modo */

// Pomodoro
document.getElementById('t1').addEventListener('click', function() {
    document.getElementById('timer').innerHTML = "25:00";
});

// Descanso corto
document.getElementById('t2').addEventListener('click', function() {
    document.getElementById('timer').innerHTML = "5:00";
});

// Descanso Largo
document.getElementById('t3').addEventListener('click', function() {
    document.getElementById('timer').innerHTML = "15:00";
});

// Función para actualizar el modo de temporizador
function cambiarModo(nuevoTiempo) {
    minutos = nuevoTiempo;  // Actualizar la variable minutos
    segundosRestantes = minutos * 60;  // Recalcular los segundos restantes
    
}

// Botón Pomodoro (25 minutos)
document.getElementById('t1').addEventListener('click', function() {
    cambiarModo(25);  // Cambiar el tiempo a 25 minutos
});

// Botón Descanso corto (5 minutos)
document.getElementById('t2').addEventListener('click', function() {
    cambiarModo(5);  // Cambiar el tiempo a 5 minutos
});

// Botón Descanso largo (15 minutos)
document.getElementById('t3').addEventListener('click', function() {
    cambiarModo(15);  // Cambiar el tiempo a 15 minutos
});