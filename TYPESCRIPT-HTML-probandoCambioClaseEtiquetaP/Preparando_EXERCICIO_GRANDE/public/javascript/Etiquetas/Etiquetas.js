/**
     * No constructor pasar a referencia
     * e nos métodos os valores para os
     * diferentes atributos
     */
class EtiquetaA {
    constructor(etiquetaA) {
        this.etiquetaA = etiquetaA;
    }
    introducirAtributoHref(direccion) {
        this.etiquetaA.setAttribute('href', direccion);
    }
    introducirAtributoClass(estilo) {
        this.etiquetaA.setAttribute('class', estilo);
    }
    introducirTexto(textoEtiqueta) {
        this.etiquetaA.innerHTML = textoEtiqueta;
    }
    pintoEnHTML() {
        document.body.append(this.etiquetaA);
    }
    get valorRefEtiquetaA() {
        return this.etiquetaA;
    }
}
export { EtiquetaA };
