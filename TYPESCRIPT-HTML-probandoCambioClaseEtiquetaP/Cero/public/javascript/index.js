"use strict";
let refBody = document.body;
if (refBody !== null) {
    let etiquetaDiv = document.createElement("div");
    let etiquetaHeader = document.createElement("header");
    let newDiv = document.createElement('div');
    // escribo nas etiquetas
    etiquetaDiv.innerHTML = "Hola Mundo";
    newDiv.style.backgroundColor = 'lightblue';
    etiquetaHeader.innerHTML = "isto é o header";
    // establezco a cor azul claro
    newDiv.innerHTML = 'Isto é un Div';
    // engado no body
    refBody.append(etiquetaDiv);
    refBody.append(etiquetaHeader);
    refBody.append(newDiv);
}
else {
    console.log("document.body is null");
}
