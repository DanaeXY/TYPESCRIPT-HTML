import { Etiqueta } from "./Etiqueta.js";

class EtiquetaP extends Etiqueta{
    private referencia: any;// Atributo ou variable local dentro da clase
    creoReferencia(): HTMLParagraphElement {
        this.referencia = document.createElement("p")
        return this.referencia;
    }
    introduzcoTexto(texto:string): void {
        this.referencia.innerHTML = texto;
    }
    devolverReferencia(): HTMLParagraphElement {
        return this.referencia
    }
}

export {EtiquetaP}