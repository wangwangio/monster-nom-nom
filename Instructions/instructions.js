// elegir un nombre al azar

// function seleccionarNombreAlAzar (datos) {
//     return datos[Math.floor(Math.random()*datos.length)];
// }

// let nombres = [`Guillem`,`Oksana`,`Erick`,`Mamadou`,`Lidia`];
// let eliminados = nombres.splice();
// console.log(seleccionarNombreAlAzar(nombres));
// console.log(eliminados);

// Movimiento imagen monstruo
// Get UI Elements
const img = document.querySelector(".monsterMouse");
const container = document.querySelector("body");

// Add Event Listener
container.addEventListener("mousemove", moveImg);

// Move Image Function
function moveImg(e) {
    console.log(e.target);
    img.style.left = `${e.clientX}px`;
    img.style.top = `${e.clientY}px`;
}

//para que suene la cancion principal al abrir el juego
const mainTheme = new Audio('../assets/Sounds/monster-theme.mp3');
mainTheme.volume = 0.2;
mainTheme.autoplay = true;
mainTheme.play();