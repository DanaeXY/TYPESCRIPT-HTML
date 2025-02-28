class PintarElemento {
    
    pintarAntes(ondePintoAntes: HTMLElement,referencia:HTMLElement):HTMLElement{
        referencia.before(ondePintoAntes);
        return referencia
    }
    pintarDespois(ondePintoDespois: HTMLElement,referencia:HTMLElement):HTMLElement{
        referencia.after(ondePintoDespois)
        return referencia
    }
    pintarOComenzo(ondePintoOComenzo: HTMLElement,referencia:HTMLElement):HTMLElement{
        referencia.prepend(ondePintoOComenzo);
        return referencia
    }
    pintarOFinal(ondePintoOFinal: HTMLElement,referencia:HTMLElement):HTMLElement{
        referencia.append(ondePintoOFinal)
        return referencia
    } 
}

export {PintarElemento}