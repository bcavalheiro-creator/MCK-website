console.log("JavaScript conectado");

const btnWhatsapp = document.querySelector("#btnWhatsapp");

const botones = document.querySelectorAll(".talla");

let tallaSeleccionada = "";

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        botones.forEach(function(b){
            b.classList.remove("seleccionada");
        });

        tallaSeleccionada = boton.dataset.talla;

        boton.classList.add("seleccionada");

        console.log(tallaSeleccionada);

    });

});


btnWhatsapp.addEventListener("click", function(){

    if (tallaSeleccionada === "") {
        alert("Por favor selecciona una talla antes de continuar.");
        return;
    }

    const mensaje = `Hola MCK 

Me interesa el Guante MCK Hades.

Talla: ${tallaSeleccionada}

¿Está disponible?`;

    const url = `https://wa.me/17223973647?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

});

function cambiarImagen(ruta, ancho, alto, izquierda = 0, derecha = 0) {
    const imagen = document.getElementById("imagenPrincipal");

    imagen.src = ruta;
    imagen.style.width = ancho + "px";
    imagen.style.height = alto + "px";
    imagen.style.marginLeft = izquierda + "px";
    imagen.style.marginRight = derecha + "px";
     }