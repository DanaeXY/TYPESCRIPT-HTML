/**
 * A entrada do constructor será @etiquetaDiv : document.createElement("div")
 */

import { IWrapperDiv } from "../Interfaces/IWrapperDiv.js";

class EtiquetaDiv{
    // O 'protected' fai que a poda ver noutra clase, pero dende fora non
    protected etiquetaDiv: HTMLDivElement;
    protected estiloDiv;
    constructor(estilo:IWrapperDiv){
        //this.etiquetaDiv = etiquetaDiv;
        this.etiquetaDiv = document.createElement("div");
        this.estiloDiv = estilo;
    }

    private introducirAtributoClass():void{
        // introduciremos o estilo
        this.etiquetaDiv.setAttribute("class",this.estiloDiv.estilo)

    }

    public pintoEnHTML(){
        document.body.append(this.etiquetaDiv)
    }

    get referenciaEtiquetaDiv():HTMLDivElement{
        this.introducirAtributoClass()
        return this.etiquetaDiv;
    }
    
}

export{
    EtiquetaDiv
}