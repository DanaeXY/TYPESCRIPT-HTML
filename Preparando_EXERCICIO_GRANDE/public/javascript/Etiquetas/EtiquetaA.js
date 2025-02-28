class EtiquetaA {
    constructor(datosEtiquetasA) {
        this.etiquetasA = [];
        this.estilos = datosEtiquetasA.estilos;
        this.numEtiquetasImg = datosEtiquetasA.numEtiquetasImg;
        this.direccions = datosEtiquetasA.direccions;
        this.textos = datosEtiquetasA.textos;
    }
    EtiquetasA() {
        this.crearEtiquetasA();
        this.introducirAtributoClass();
        this.introducirAtributoHref();
        this.introducirTexto();
    }
    crearEtiquetasA() {
        for (let contador = 0; contador < this.numEtiquetasImg; contador++) {
            this.etiquetasA.push(document.createElement("a"));
        }
    }
    introducirAtributoHref() {
        for (let contador = 0; contador < this.numEtiquetasImg; contador++) {
            this.etiquetasA[contador].setAttribute('href', this.direccions[contador]);
        }
    }
    introducirAtributoClass() {
        for (let contador = 0; contador < this.numEtiquetasImg; contador++) {
            this.etiquetasA[contador].setAttribute('class', this.estilos[contador]);
        }
    }
    introducirTexto() {
        for (let contador = 0; contador < this.numEtiquetasImg; contador++) {
            this.etiquetasA[contador].innerHTML = this.textos[contador];
        }
    }
    get DevolverEtiquetasA() {
        this.EtiquetasA();
        return this.etiquetasA;
    }
}
export { EtiquetaA };
