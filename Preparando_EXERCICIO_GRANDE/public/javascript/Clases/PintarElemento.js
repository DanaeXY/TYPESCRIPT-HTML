class PintarElemento {
    pintarAntes(ondePintoAntes, referencia) {
        referencia.before(ondePintoAntes);
        return referencia;
    }
    pintarDespois(ondePintoDespois, referencia) {
        referencia.after(ondePintoDespois);
        return referencia;
    }
    pintarOComenzo(ondePintoOComenzo, referencia) {
        referencia.prepend(ondePintoOComenzo);
        return referencia;
    }
    pintarOFinal(ondePintoOFinal, referencia) {
        referencia.append(ondePintoOFinal);
        return referencia;
    }
}
export { PintarElemento };
