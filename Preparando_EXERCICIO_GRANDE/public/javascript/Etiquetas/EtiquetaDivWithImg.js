import { EtiquetaDiv } from "./EtiquetaDiv.js";
class EtiquetaDivWithImg extends EtiquetaDiv {
    constructor(estilo) {
        super(estilo);
    }
    // Este método é dúvida, poderíase extender a outra Clase
    introducirEtiquetaImg(etiquetaImg) {
        // introduciremos a Imaxen document.createElement("img")
        this.etiquetaDiv = etiquetaImg;
    }
}
export { EtiquetaDivWithImg };
