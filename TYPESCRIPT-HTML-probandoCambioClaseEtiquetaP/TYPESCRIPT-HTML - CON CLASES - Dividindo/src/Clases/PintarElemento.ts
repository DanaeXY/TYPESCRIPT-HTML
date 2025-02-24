class PintarElemento {
    private referencia;// Atributos

    constructor(referenciaEtiqueta : HTMLElement){
        this.referencia = referenciaEtiqueta
    }

    pintarAntes(ondePintoAntes: HTMLElement): void{
        this.referencia.before(ondePintoAntes)
    }
    pintarDespois(ondePintoDespois: HTMLElement): void{
        this.referencia.after(ondePintoDespois)
    }
    pintarOComenzo(ondePintoOComenzo: HTMLElement): void{
        this.referencia.prepend(ondePintoOComenzo)
    }
    pintarOFinal(ondePintoOFinal: HTMLElement): void{
        this.referencia.append(ondePintoOFinal)
    }
}

export {PintarElemento}