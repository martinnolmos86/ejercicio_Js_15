// index.js

const nombre = "Juan";
const apellido = "Pérez";

const usuario = { nombre, apellido };

sessionStorage.setItem("usuario", JSON.stringify(usuario));

localStorage.setItem("usuario", JSON.stringify(usuario));

const fechaCaducidad = new Date();
fechaCaducidad.setTime(fechaCaducidad.getTime() + 2 * 60 * 1000); // 2 minutos
document.cookie = `usuario=${JSON.stringify(
  usuario
)}; expires=${fechaCaducidad.toUTCString()};`;

console.log("SessionStorage:", sessionStorage.getItem("usuario"));
console.log("LocalStorage:", localStorage.getItem("usuario"));
console.log("Cookie:", document.cookie);
