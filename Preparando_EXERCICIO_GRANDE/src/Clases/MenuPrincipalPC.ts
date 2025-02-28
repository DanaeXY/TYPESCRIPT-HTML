import { EtiquetaA } from "../Etiquetas/EtiquetaA.js";
import { EtiquetaDiv } from "../Etiquetas/EtiquetaDiv.js";
//import { EtiquetaDivWithImg } from "../Etiquetas/EtiquetaDivWithImg";
import { EtiquetaImg } from "../Etiquetas/EtiquetaImg.js";
import { IIcono } from "../Interfaces/Icono.js";
import { IEtiquetaA } from "../Interfaces/IEtiquetaA.js";
import { IWrapperDiv } from "../Interfaces/IWrapperDiv.js";
import { Navegacion } from "./Navegacion.js";
import { PintarElemento } from "./PintarElemento.js";

class NavegacionMenuPrincipal extends Navegacion{
    private referenciaEtiquetaA: EtiquetaA;    
    private referenciaEtiquetaImg:EtiquetaImg;
    private posicionarEtiquetaCreada: PintarElemento;
    private referenciaEtiquetaDiv: EtiquetaDiv;
    private direccion: string = '';// témola que inicializar o non iniciala no constructor
    private etiquetasCreadasImg : HTMLImageElement[] = [];
    private etiquetasCreadasA: HTMLAnchorElement[] = [];

    //Inicializo a variable porque non a teño no constructor
    private etiquetaDivCreada: HTMLElement = document.createElement("a");

    constructor(enlace:IIcono,etiquetasA: IEtiquetaA,estilo: IWrapperDiv){
        super();
        this.referenciaEtiquetaA = new EtiquetaA(etiquetasA);
        this.referenciaEtiquetaImg = new EtiquetaImg(enlace);
        this.posicionarEtiquetaCreada = new PintarElemento();
        this.referenciaEtiquetaDiv = new EtiquetaDiv(estilo);
    }

    crearEtiquetas():void{
     
        this.etiquetasCreadasA = this.referenciaEtiquetaA.DevolverEtiquetasA;
        this.etiquetaDivCreada = this.referenciaEtiquetaDiv.referenciaEtiquetaDiv;
        this.etiquetasCreadasImg = this.referenciaEtiquetaImg.EtiquetasImg;
    }
    pintarEnPantalla(direccion:string): void {
        let etiquetasConImg: HTMLElement[] = [];
        let divConEtiquetas: HTMLElement = document.createElement("a");
        this.direccion = direccion;
        this.crearEtiquetas()

        for(let contador = 0; contador < this.referenciaEtiquetaImg.NumEtiquetasImg ; contador ++){
            etiquetasConImg.push(this.agregandoEtiqueta(this.etiquetasCreadasImg[contador],this.etiquetasCreadasA[contador]))
            //console.log("bucle ",etiquetasConImg)
        }
        console.log("this.etiquetaDivCreada ",this.etiquetaDivCreada)
        for(let contador = 0; contador < this.referenciaEtiquetaImg.NumEtiquetasImg ; contador ++){
            divConEtiquetas = this.agregandoEtiqueta(etiquetasConImg[contador],this.etiquetaDivCreada)
           
        }
        document.body.prepend(divConEtiquetas)
    }

    private agregandoEtiqueta(ondePintoAntes: HTMLElement ,referencia:HTMLElement):HTMLElement{ 
        return this.posicionarEtiquetaCreada.pintarOFinal(ondePintoAntes,referencia)

    }

}


export{NavegacionMenuPrincipal}
 