import { EtiquetaA } from "../Etiquetas/Etiquetas.js";
import { Navegacion } from "./Navegacion.js";
class NavegacionMenuPrincipal extends Navegacion {
    constructor(etiquetaA, etiquetaImg, etiquetaDiv) {
        super(etiquetaA, etiquetaImg, etiquetaDiv);
        this.referenciaEtiquetaA = new EtiquetaA(etiquetaA);
    }
    crearAtributos(direccion) {
        this.referenciaEtiquetaA.introducirAtributoHref(direccion);
        // {Clase EtiquetaA}
        // {Clase EtiquetaImg}
        // {Clase EtiquetaDiv}
    }
    pintarEnPantalla() {
        this.referenciaEtiquetaA.pintoEnHTML();
    }
    introducirTextoNasEtiquetas(texto) {
        this.referenciaEtiquetaA.introducirTexto(texto);
    }
    establecerEstilo(estilo) {
        this.referenciaEtiquetaA.introducirAtributoClass(estilo);
    }
}
/*
let a = document.createElement("a");
let div = document.createElement("div");
let img = document.createElement("img");
let navegar = new NavegacionMenuPrincipal(a,img,div)
*/
export { NavegacionMenuPrincipal };
