class PintarElemento {
    constructor(referenciaEtiqueta) {
        this.referencia = referenciaEtiqueta;
    }
    pintarAntes(ondePintoAntes) {
        this.referencia.before(ondePintoAntes);
    }
    pintarDespois(ondePintoDespois) {
        this.referencia.after(ondePintoDespois);
    }
    pintarOComenzo(ondePintoOComenzo) {
        this.referencia.prepend(ondePintoOComenzo);
    }
    pintarOFinal(ondePintoOFinal) {
        this.referencia.append(ondePintoOFinal);
    }
}
export { PintarElemento };
