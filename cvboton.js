const boton = document.getElementById ("mostrar"); 
const expLaboral = document.getElementById ("exp-laboral");
boton.addEventListener ('click',mostrarTexto );
function  mostrarTexto (event) {
    expLaboral.classList.toggle ("colapsed") ?
    event.currentTarget.classList.remove ("rotated") : event.currentTarget.classList.add ("rotated");    
} 