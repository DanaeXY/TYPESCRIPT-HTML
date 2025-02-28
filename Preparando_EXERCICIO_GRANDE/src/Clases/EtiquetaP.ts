import { LinksPaxinas } from "./LinksPaxinas.js";

class LinksHome extends LinksPaxinas{
    private referencia: any;// Atributo ou variable local dentro da clase
    
    // MÉTODOS OBRIGATORIOS
    etiquetaDiv(): HTMLDivElement {
        this.referencia = document.createElement("div")
        return this.referencia;
    }
    etiquetaA(): HTMLAnchorElement {
        this.referencia = document.createElement("a")
        return this.referencia;
    }
    etiquetaImg(): HTMLImageElement {
        this.referencia = document.createElement("img")
        return this.referencia;
    }


    // MÉTODO QUE NECESITO PARA a class 'LinksHome'
    
    etiquetaH(elementoH: string): HTMLHeadingElement {
        this.referencia = document.createElement(elementoH)
        return this.referencia;
    }
}

export {LinksHome}