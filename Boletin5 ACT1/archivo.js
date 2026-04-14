const arbolDOM = {
    tipo: "html",
    etiqueta: "HTML",
    icono: "▼",
    hijos: [
        {
            tipo: "head",
            etiqueta: "HEAD",
            icono: "▼",
            hijos: [
                {
                    tipo: "otro",
                    etiqueta: "TITLE",
                    icono: "▼",
                    hijos: [
                        {
                            tipo: "text",
                            etiqueta: "#text",
                            icono: "◆",
                            contenido: "Título de la Página WEB",
                            hijos: []
                        }
                    ]
                }
            ]
        },
        {
            tipo: "body",
            etiqueta: "BODY",
            icono: "▼",
            hijos: [
                {
                    tipo: "otro",
                    etiqueta: "H1",
                    icono: "▼",
                    hijos: [
                        {
                            tipo: "text",
                            etiqueta: "#text",
                            icono: "◆",
                            contenido: "Encabezado de la página web",
                            hijos: []
                        }
                    ]
                },
                {
                    tipo: "otro",
                    etiqueta: "P",
                    icono: "▼",
                    hijos: [
                        {
                            tipo: "text",
                            etiqueta: "#text",
                            icono: "◆",
                            contenido: "Esto es un párrafo",
                            hijos: []
                        }
                    ]
                },
                {
                    tipo: "otro",
                    etiqueta: "DIV",
                    icono: "▼",
                    hijos: [
                        {
                            tipo: "otro",
                            etiqueta: "TABLE",
                            icono: "▼",
                            hijos: [
                                {
                                    tipo: "otro",
                                    etiqueta: "TR",
                                    icono: "▼",
                                    hijos: [
                                        {
                                            tipo: "otro",
                                            etiqueta: "TD",
                                            icono: "▼",
                                            hijos: [
                                                {
                                                    tipo: "text",
                                                    etiqueta: "#text",
                                                    icono: "◆",
                                                    contenido: "Celda 1",
                                                    hijos: []
                                                }
                                            ]
                                        },
                                        {
                                            tipo: "otro",
                                            etiqueta: "TD",
                                            icono: "▼",
                                            hijos: [
                                                {
                                                    tipo: "text",
                                                    etiqueta: "#text",
                                                    icono: "◆",
                                                    contenido: "Celda 2",
                                                    hijos: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};


function crearNodo(nodoData, delay) {
    const li = document.createElement("li");

   
    const divNodo = document.createElement("div");
    divNodo.className = "nodo tipo-" + nodoData.tipo;
    divNodo.style.animationDelay = delay + "ms";

    const spanIcono = document.createElement("span");
    spanIcono.className = "icono";
    spanIcono.textContent = nodoData.icono;

    
    const spanEtiqueta = document.createElement("span");
    spanEtiqueta.className = "etiqueta";
    spanEtiqueta.textContent = "<" + nodoData.etiqueta + ">";

    
    if (nodoData.tipo === "text") {
        spanEtiqueta.textContent = nodoData.etiqueta;
        const spanContenido = document.createElement("span");
        spanContenido.className = "contenido";
        spanContenido.textContent = '"' + nodoData.contenido + '"';
        divNodo.appendChild(spanIcono);
        divNodo.appendChild(spanEtiqueta);
        divNodo.appendChild(spanContenido);
    } else {
        divNodo.appendChild(spanIcono);
        divNodo.appendChild(spanEtiqueta);
    }

    li.appendChild(divNodo);

  
    if (nodoData.hijos.length > 0) {
        const ul = document.createElement("ul");
        ul.className = "dom-tree";

        for (let i in nodoData.hijos) {
            const liHijo = crearNodo(nodoData.hijos[i], delay + (parseInt(i) + 1) * 60);
            ul.appendChild(liHijo);
        }

        li.appendChild(ul);
    }

    return li;
}



document.addEventListener("DOMContentLoaded", function() {

    const contenedor = document.getElementById("arbol-dom");

    
    const ulRaiz = document.createElement("ul");
    ulRaiz.className = "dom-tree";

    const liRaiz = crearNodo(arbolDOM, 0);
    ulRaiz.appendChild(liRaiz);

    contenedor.appendChild(ulRaiz);


    const leyendaItems = [
        { clase: "dot-html", texto: "HTML (raíz)" },
        { clase: "dot-head", texto: "HEAD" },
        { clase: "dot-body", texto: "BODY" },
        { clase: "dot-otro", texto: "Elementos HTML" },
        { clase: "dot-text", texto: "#text (nodo de texto)" }
    ];

    const divLeyenda = document.createElement("div");
    divLeyenda.id = "leyenda";

    for (let i in leyendaItems) {
        const item = leyendaItems[i];
        const span = document.createElement("span");

        const dot = document.createElement("span");
        dot.className = "dot " + item.clase;

        const texto = document.createElement("span");
        texto.textContent = item.texto;

        span.appendChild(dot);
        span.appendChild(texto);
        divLeyenda.appendChild(span);
    }

    contenedor.appendChild(divLeyenda);
});