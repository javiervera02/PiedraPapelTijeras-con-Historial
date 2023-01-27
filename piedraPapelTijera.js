// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];
//    //
// Elementos de DOM
var nombre = document.getElementsByName("nombre")[0];
var imagenes = document.getElementsByTagName("img");
var partidas = document.getElementsByName("partidas")[0];
var total = document.getElementById("total");
var actual = document.getElementById("actual");
var historial = document.getElementById("historial");
var lista = document.createElement("li");

var jugador = 0, ordenador = 0, ganador;


// Click en primer boton y lanzado de función jugar
document.getElementsByTagName("button")[0].addEventListener("click", jugar);

// Click en segundo boton y lanzado de función ya
document.getElementsByTagName("button")[1].addEventListener("click", ya);

// Click en tercer boton y lanzado de función reset
document.getElementsByTagName("button")[2].addEventListener("click", reset);


// Asignar imagenes.

for (var i = 0; i < posibilidades.length; i++) {

    imagenes[i].setAttribute("src", "img/" + posibilidades[i] + "Jugador.png");
    imagenes[i].setAttribute("id", posibilidades[i]);
    imagenes[i].addEventListener("click", seleccion);

}


// Funciones

function jugar() {
    // Comprobar nombre

    if (nombre.value.length <= 3) {

        nombre.className = "fondoRojo";

    } else if (nombre.value[0] == isNaN()) {

        nombre.className = "fondoRojo";

    } else {

        nombre.removeAttribute("class");

    }

    // Comprobar partidas

    if (parseInt(partidas.value) > 0) {

        partidas.removeAttribute("class");

    } else {

        partidas.className = "fondoRojo";

    }

    comprobacion = document.getElementsByClassName("fondoRojo");

    // Si no hay clase fondoRojo 
    if (comprobacion.length == 0) {

        // Numero de partidas elegido
        total.innerHTML = partidas.value

        // Desactiva los campos
        partidas.disabled = true;
        nombre.disabled = true;

    }

}

function ya() {

    // Parseo a Int para las operaciones.
    var totalInt = parseInt(total.innerHTML);
    var actualInt = parseInt(actual.innerHTML);

    // Comprueba que haya tiradas diponibles
    if (totalInt > 0 && actualInt < totalInt) {


        // Realiza la elección del ordenador y asiga el resultado a su variable
        var tirada = Math.floor(Math.random() * posibilidades.length);

        // Se seleciona la última etiqueta de inmagen y se le asigna la correspondiente
        imagenes[imagenes.length - 1].setAttribute("src", "img/" + posibilidades[tirada] + "Ordenador.png");

        // Se asigna la posición en el array
        ordenador = tirada;

        // Lógica de la jugada
        if (jugador == ordenador) {

            ganador = "Empate"
        }
        if (jugador == 0 && ordenador == posibilidades.length - 1) {

            ganador = "Gana " + nombre.value;

        } else if (ordenador == 0 && jugador == posibilidades.length - 1) {

            ganador = "Gana la máquina"

        } else if (jugador > ordenador) {


            if (jugador - ordenador == 1) {

                ganador = "Gana " + nombre.value;

            } else {

                ganador = "Gana la máquina";

            }


        } else if (ordenador > jugador) {

            if (ordenador - jugador == 1) {

                ganador = "Gana la máquina";

            } else {

                ganador = "Gana " + nombre.value;

            }

        }

        // Suma la partida usada
        actual.innerHTML = actualInt + 1;

        // Incluye el resultado en el historial
        var lista = document.createElement("li");
        lista.innerHTML = ganador;
        historial.appendChild(lista);

    }


}

function reset() {

    // Nueva partida
    var lista = document.createElement("li");
    lista.innerHTML = "Nueva partida";
    historial.appendChild(lista);

    // Valores a 0
    actual.innerHTML = 0;
    total.innerHTML = 0;
    partidas.value = 0;

    // Activa los campos
    partidas.disabled = false;
    nombre.disabled = false;

    // Imagen por defecto
    imagenes[imagenes.length - 1].setAttribute("src", "img/defecto.png");

    // Jugador por defecto
    jugador=0;
    for (var i = 0; i < imagenes.length - 1; i++) {

        imagenes[i].className = "noSeleccionado";

    }
    imagenes[0].className = "seleccionado";

}

function seleccion() {

    // Pasamos todos las imagenes a noSelecionado
    for (var i = 0; i < imagenes.length - 1; i++) {

        imagenes[i].className = "noSeleccionado";

    }

    // Selecionamos la que se ha pinchado
    this.className = "seleccionado";

    // Le asignamos a juagador el valor en el array

    for (var i = 0; i < posibilidades.length; i++) {

        if (this.id == posibilidades[i]) {
            // Se asigna la posición en el array
            jugador = i;
        }
    }




}

