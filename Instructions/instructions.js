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
const img = document.querySelector("img");
const container = document.querySelector("body");

// Add Event Listener
container.addEventListener("mousemove", moveImg);

// Move Image Function
function moveImg(e) {
    console.log(e.target);
    img.style.left = `${e.clientX}px`;
    img.style.top = `${e.clientY}px`;
}