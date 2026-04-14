var titulo;
var parrafo;
var celda1;
var celda2;
var tabla;
var btnH1;
var btnP;
var btnCeldas;
var btnAnadir;
var btnColor;
var contadorCelda;

function cambiarH1() {
    titulo = document.getElementById("titulo-principal");
    titulo.innerHTML = "DOM Manipulado";
    titulo.style.color = "red";
    titulo.className = "titulo-activo";
}

function cambiarParrafo() {
    parrafo = document.getElementById("parrafo-ejemplo");
    parrafo.innerHTML = "Esto es un párrafo con <strong>texto en negrita</strong>";
}

function cambiarCeldas() {
    celda1 = document.getElementById("celda1");
    celda2 = document.getElementById("celda2");
    celda1.innerHTML = "Nueva Celda 1";
    celda2.innerHTML = "Nueva Celda 2";
}

function anadirNuevaCelda() {
    var tabla;
    var nuevaFila;
    var nuevaCelda;
    var textoCelda;
    
    tabla = document.getElementById("mi-tabla");
    nuevaFila = document.createElement("tr");
    nuevaCelda = document.createElement("td");
    textoCelda = document.createTextNode("Nueva Celda");
    
    nuevaCelda.appendChild(textoCelda);
    nuevaFila.appendChild(nuevaCelda);
    tabla.appendChild(nuevaFila);
    
    nuevaCelda.setAttribute("id", "celda-nueva-" + contadorCelda);
    nuevaCelda.onclick = function() {
        this.style.backgroundColor = "yellow";
    };
    
    contadorCelda = contadorCelda + 1;
}

function cambiarColorCeldas() {
    var celdas;
    var i;
    
    celdas = document.getElementsByTagName("td");
    
    for (i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor = "lightblue";
    }
}

function celdaClick(evento) {
    var celda;
    celda = evento.target;
    celda.style.backgroundColor = "yellow";
}

function asignarEventoCeldas() {
    var celdas;
    var i;
    
    celdas = document.getElementsByTagName("td");
    
    for (i = 0; i < celdas.length; i++) {
        celdas[i].onclick = celdaClick;
    }
}

contadorCelda = 3;

btnH1 = document.getElementById("btnCambiarH1");
btnP = document.getElementById("btnCambiarP");
btnCeldas = document.getElementById("btnCambiarCeldas");
btnAnadir = document.getElementById("btnAnadirCelda");
btnColor = document.getElementById("btnColorCeldas");

btnH1.onclick = cambiarH1;
btnP.onclick = cambiarParrafo;
btnCeldas.onclick = cambiarCeldas;
btnAnadir.onclick = anadirNuevaCelda;
btnColor.onclick = cambiarColorCeldas;

asignarEventoCeldas();