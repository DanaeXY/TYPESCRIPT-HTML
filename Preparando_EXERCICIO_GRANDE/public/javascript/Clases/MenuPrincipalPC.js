import { EtiquetaA } from "../Etiquetas/EtiquetaA.js";
import { EtiquetaDiv } from "../Etiquetas/EtiquetaDiv.js";
//import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg.js";
import { Navegacion } from "./Navegacion.js";
import { PintarElemento } from "./PintarElemento.js";
class NavegacionMenuPrincipal extends Navegacion {
    constructor(enlace, etiquetasA, estilo) {
        super();
        this.direccion = ''; // témola que inicializar o non iniciala no constructor
        this.etiquetasCreadasImg = [];
        this.etiquetasCreadasA = [];
        this.etiquetaDivCreada = document.createElement("p");
        this.referenciaEtiquetaA = new EtiquetaA(etiquetasA);
        this.referenciaEtiquetaImg = new EtiquetaImg(enlace);
        this.posicionarEtiquetaCreada = new PintarElemento();
        this.referenciaEtiquetaDiv = new EtiquetaDiv(estilo);
    }
    crearEtiquetas() {
        this.etiquetasCreadasA = this.referenciaEtiquetaA.DevolverEtiquetasA;
        this.etiquetaDivCreada = this.referenciaEtiquetaDiv.referenciaEtiquetaDiv;
        this.etiquetasCreadasImg = this.referenciaEtiquetaImg.EtiquetasImg;
    }
    pintarEnPantalla(direccion) {
        let etiquetasConImg = [];
        let divConEtiquetas = document.createElement("a");
        this.direccion = direccion;
        this.crearEtiquetas();
        for (let contador = 0; contador < this.referenciaEtiquetaImg.NumEtiquetasImg; contador++) {
            etiquetasConImg.push(this.agregandoEtiqueta(this.etiquetasCreadasImg[contador], this.etiquetasCreadasA[contador]));
            //console.log("bucle ",etiquetasConImg)
        }
        console.log("this.etiquetaDivCreada ", this.etiquetaDivCreada);
        for (let contador = 0; contador < this.referenciaEtiquetaImg.NumEtiquetasImg; contador++) {
            divConEtiquetas = this.agregandoEtiqueta(etiquetasConImg[contador], this.etiquetaDivCreada);
        }
        document.body.prepend(divConEtiquetas);
    }
    agregandoEtiqueta(ondePintoAntes, referencia) {
        return this.posicionarEtiquetaCreada.pintarOFinal(ondePintoAntes, referencia);
    }
}
export { NavegacionMenuPrincipal };
