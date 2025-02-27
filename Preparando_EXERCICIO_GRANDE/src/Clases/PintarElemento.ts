class PintarElemento {
    //private referencia;// Atributos

    /* constructor(referenciaEtiqueta : HTMLElement){
        this.referencia = referenciaEtiqueta
    } */

    pintarAntes(ondePintoAntes: HTMLElement,referencia:HTMLElement){
        referencia.before(ondePintoAntes);
        return referencia
    }
    pintarDespois(ondePintoDespois: HTMLElement,referencia:HTMLElement){
        referencia.after(ondePintoDespois)
        return referencia
    }
    pintarOComenzo(ondePintoOComenzo: HTMLElement,referencia:HTMLElement){
        referencia.prepend(ondePintoOComenzo);
        return referencia
    }
    pintarOFinal(ondePintoOFinal: HTMLElement,referencia:HTMLElement){
        referencia.append(ondePintoOFinal)
        return referencia
    } 
}

export {PintarElemento}