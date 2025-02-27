import { EtiquetaA } from "../Etiquetas/EtiquetaA.js";
import { EtiquetaDiv } from "../Etiquetas/EtiquetaDiv.js";
//import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg.js";
import { Navegacion } from "./Navegacion.js";
import { PintarElemento } from "./PintarElemento.js";
class NavegacionMenuPrincipal extends Navegacion {
    constructor(enlace, etiquetasA, estilo) {
        super(); // obliga a ter 'super()'
        this.direccion = ''; // témola que inicializar o non iniciala no constructor
        this.etiquetasCreadasImg = [];
        this.etiquetasCreadasA = [];
        this.referenciaEtiquetaA = new EtiquetaA(etiquetasA);
        this.referenciaEtiquetaImg = new EtiquetaImg(enlace);
        this.posicionarEtiquetaCreada = new PintarElemento();
        this.referenciaEtiquetaDiv = new EtiquetaDiv(estilo);
    }
    crearEtiquetas(direccion) {
        // {Clase EtiquetaA}
        this.etiquetasCreadasA = this.referenciaEtiquetaA.DevolverEtiquetasA;
        // {Clase EtiquetaDiv}
        this.etiquetaDivCreada = this.referenciaEtiquetaDiv.referenciaEtiquetaDiv;
        // {Clase EtiquetaImg}
        //this.referenciaEtiquetaImg.introducirAtributoSrc()
        this.etiquetasCreadasImg = this.referenciaEtiquetaImg.EtiquetasImg;
    }
    pintarEnPantalla(direccion) {
        let resultado = []; //TRAMPA
        let final;
        this.direccion = direccion;
        this.crearEtiquetas(direccion);
        for (let contador = 0; contador < this.referenciaEtiquetaImg.NumEtiquetasImg; contador++) {
            //let resultado = this.agregandoEtiqueta(this.etiquetasCreadasImg[contador],this.etiquetasCreadasA[contador])
            resultado.push(this.agregandoEtiqueta(this.etiquetasCreadasImg[contador], this.etiquetasCreadasA[contador]));
            console.log("bucle importante ", resultado);
            //document.body.prepend(resultado)
        }
        console.log("this.etiquetaDivCreada ", this.etiquetaDivCreada);
        for (let contador = 0; contador < this.referenciaEtiquetaImg.NumEtiquetasImg; contador++) {
            final = this.agregandoEtiqueta(resultado[contador], this.etiquetaDivCreada);
            console.log(this.agregandoEtiqueta(resultado[contador], this.etiquetaDivCreada));
        }
        document.body.prepend(final);
    }
    agregandoEtiqueta(ondePintoAntes, referencia) {
        return this.posicionarEtiquetaCreada.pintarOFinal(ondePintoAntes, referencia);
    }
}
export { NavegacionMenuPrincipal };
