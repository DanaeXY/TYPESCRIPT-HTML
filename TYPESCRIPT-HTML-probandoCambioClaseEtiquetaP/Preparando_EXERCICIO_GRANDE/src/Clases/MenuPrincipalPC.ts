import { EtiquetaA } from "../Etiquetas/Etiquetas";
import { Navegacion } from "./Navegacion";

class NavegacionMenuPrincipal extends Navegacion{
    private referenciaEtiquetaA: EtiquetaA;// Clase da etiquetaA

    constructor(etiquetaA:HTMLAnchorElement,
         etiquetaImg: HTMLImageElement,
         etiquetaDiv:HTMLDivElement){
        super(etiquetaA,etiquetaImg,etiquetaDiv);
        this.referenciaEtiquetaA = new EtiquetaA(etiquetaA)
    }

    crearAtributos(direccion:string): void {
        this.referenciaEtiquetaA.introducirAtributoHref(direccion)
        // {Clase EtiquetaA}
        // {Clase EtiquetaImg}
        // {Clase EtiquetaDiv}
    }

    pintarEnPantalla(): void {
        this.referenciaEtiquetaA.pintoEnHTML()
    }
    introducirTextoNasEtiquetas(texto:string){
        this.referenciaEtiquetaA.introducirTexto(texto)
    }
    establecerEstilo(estilo:string): void {
        this.referenciaEtiquetaA.introducirAtributoClass(estilo)
    }

}
/* 
let a = document.createElement("a");
let div = document.createElement("div");
let img = document.createElement("img");
let navegar = new NavegacionMenuPrincipal(a,img,div) 
*/

export{NavegacionMenuPrincipal}
 