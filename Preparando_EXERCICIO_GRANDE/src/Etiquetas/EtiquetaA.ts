import { IEtiquetaA } from "../Interfaces/IEtiquetaA.js";

class EtiquetaA{
    
    private numEtiquetasImg:number;
    private etiquetasA: HTMLAnchorElement[]=[];
    private estilos:string[];
    private direccions:string[];
    private textos:string[];
    constructor(datosEtiquetasA: IEtiquetaA){
        this.estilos = datosEtiquetasA.estilos;
        this.numEtiquetasImg = datosEtiquetasA.numEtiquetasImg;
        this.direccions = datosEtiquetasA.direccions;
        this.textos = datosEtiquetasA.textos;
    }

    private EtiquetasA(){
        this.crearEtiquetasA();
        this.introducirAtributoClass();
        this.introducirAtributoHref();
        this.introducirTexto();
    }

    private crearEtiquetasA(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            
            this.etiquetasA.push(document.createElement("a"))
        }
    }
    private introducirAtributoHref(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            this.etiquetasA[contador].setAttribute('href',this.direccions[contador]);
        }
        
    }

    private introducirAtributoClass(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            this.etiquetasA[contador].setAttribute('class',this.estilos[contador]);
        }
    }

    private introducirTexto(){
        for(let contador = 0; contador < this.numEtiquetasImg;contador++){
            this.etiquetasA[contador].innerHTML = this.textos[contador];
        }
    }

    

    get DevolverEtiquetasA():HTMLAnchorElement[] {
        this.EtiquetasA()
        return this.etiquetasA
    }

}

export{EtiquetaA}
