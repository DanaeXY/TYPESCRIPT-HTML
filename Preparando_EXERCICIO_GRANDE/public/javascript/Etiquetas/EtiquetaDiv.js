/**
 * A entrada do constructor será @etiquetaDiv : document.createElement("div")
 */
class EtiquetaDiv {
    constructor(estilo) {
        //this.etiquetaDiv = etiquetaDiv;
        this.etiquetaDiv = document.createElement("div");
        this.estiloDiv = estilo;
    }
    introducirAtributoClass() {
        // introduciremos o estilo
        this.etiquetaDiv.setAttribute("class", this.estiloDiv.estilo);
    }
    pintoEnHTML() {
        document.body.append(this.etiquetaDiv);
    }
    get referenciaEtiquetaDiv() {
        this.introducirAtributoClass();
        return this.etiquetaDiv;
    }
}
export { EtiquetaDiv };
