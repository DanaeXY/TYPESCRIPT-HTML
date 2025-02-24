/**
 * ATA QUE NON SAIBA CONFIGURAR 'private' ,SE QUEREMOS QUE CONSERVE
 * AS VARIABLES E FUNCIÓNS PRIVADAS, DEBEREMOS ESCRIBIR '#'
 * PARA QUE NA COMPILACIÓN EN JAVASCRIPT CONSERVE TAL PROPIEDADE
 *
 * NESTE EXEMPLO O DEIXO ASÍ, PARA FACELO PARELLO A OUTRAS LINGUAXES TIPADAS
 */
class CrearEPintarElemento {
    etiqueta;
    //#etiqueta: string; // 
    constructor(etiqueta) {
        this.etiqueta = etiqueta;
    }
    creoReferencia() {
        return document.createElement(this.etiqueta);
    }
    introduzcoTexto(referencia) {
        referencia.innerHTML = "test de texto";
    }
    pintoEtiqueta(referencia) {
        document.body.append(referencia);
    }
    creoEtiqueta() {
        let referencia;
        referencia = this.creoReferencia();
        this.introduzcoTexto(referencia);
        this.pintoEtiqueta(referencia);
    }
}
export { CrearEPintarElemento };
