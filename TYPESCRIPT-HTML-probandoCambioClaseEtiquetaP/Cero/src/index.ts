let refBody: HTMLBodyElement = document.body as HTMLBodyElement;

if(refBody !== null){
    let etiquetaDiv: HTMLDivElement = document.createElement("div");
    let etiquetaHeader: HTMLElement = document.createElement("header");
    let newDiv = document.createElement('div') as HTMLDivElement;

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
}else{
    console.log("document.body is null");
}



