interface BloqueLinkNavegacion {
    etiquetaA: HTMLAnchorElement;
    etiquetaImg: HTMLImageElement;
    etiquetaDiv: HTMLDivElement;
}


abstract class Navegacion implements BloqueLinkNavegacion{

    etiquetaA: HTMLAnchorElement;
    etiquetaImg: HTMLImageElement;
    etiquetaDiv: HTMLDivElement;

    constructor(etiquetaA:HTMLAnchorElement, etiquetaImg: HTMLImageElement,etiquetaDiv:HTMLDivElement){
        this.etiquetaA = etiquetaA;
        this.etiquetaImg = etiquetaImg;
        this.etiquetaDiv = etiquetaDiv; 

    }

    abstract crearAtributos(direccion:string):void;
    abstract pintarEnPantalla():void;
    abstract establecerEstilo(estilo:string):void;
    abstract introducirTextoNasEtiquetas(texto:string):void;
}


export{
    Navegacion
}