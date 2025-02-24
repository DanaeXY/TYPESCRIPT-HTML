import { LinksPaxinas } from "./LinksPaxinas.js";
class LinksHome extends LinksPaxinas {
    // MÉTODOS OBRIGATORIOS
    etiquetaDiv() {
        this.referencia = document.createElement("div");
        return this.referencia;
    }
    etiquetaA() {
        this.referencia = document.createElement("a");
        return this.referencia;
    }
    etiquetaImg() {
        this.referencia = document.createElement("img");
        return this.referencia;
    }
    // MÉTODO QUE NECESITO PARA a class 'LinksHome'
    etiquetaH(elementoH) {
        this.referencia = document.createElement(elementoH);
        return this.referencia;
    }
}
export { LinksHome };
