var ventana = document.querySelector(".emergente");
var button = document.querySelector(".boton-cerrar");
button.addEventListener('click',cerrar);
function cerrar( ){
  ventana.classList.add("cerrar");
}

var aperturaEmergente = document.querySelectorAll(".abrir-emergente");
aperturaEmergente.addEventListener('click',abrir);
function abrir(event){
event.target.getAttribute("");
}
