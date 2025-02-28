import { IWrapperDiv } from "../Interfaces/IWrapperDiv.js";
import { EtiquetaDiv } from "./EtiquetaDiv.js";

class EtiquetaDivWithImg extends EtiquetaDiv{

    constructor(estilo:IWrapperDiv){
        super(estilo)
    }
    // Este método é dúvida, poderíase extender a outra Clase
    public introducirEtiquetaImg(etiquetaImg: HTMLImageElement){
        // introduciremos a Imaxen document.createElement("img")
        this.etiquetaDiv = etiquetaImg;
    }

    /* 
        public pintoEnHTML(): void {
            super.pintoEnHTML();// esta faime referencia a clase pai
        } 
    */
    
}

export{
    EtiquetaDivWithImg
}