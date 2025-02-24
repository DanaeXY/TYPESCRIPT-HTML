/**
 * ATA QUE NON SAIBA CONFIGURAR 'private' ,SE QUEREMOS QUE CONSERVE
 * AS VARIABLES E FUNCIÓNS PRIVADAS, DEBEREMOS ESCRIBIR '#' 
 * PARA QUE NA COMPILACIÓN EN JAVASCRIPT CONSERVE TAL PROPIEDADE
 * 
 * NESTE EXEMPLO O DEIXO ASÍ, PARA FACELO PARELLO A OUTRAS LINGUAXES TIPADAS 
 */

class CrearEPintarElemento{
    private etiqueta:string;
    //#etiqueta: string; // 

    constructor(etiqueta : string){
        this.etiqueta = etiqueta;
    }
    private creoReferencia() : HTMLElement{
        return document.createElement(this.etiqueta);
    }

    private introduzcoTexto(referencia : HTMLElement) : void{
        referencia.innerHTML = "test de texto";
    }

    private pintoEtiqueta(referencia : HTMLElement) : void{
        document.body.append(referencia);
    }

    public creoEtiqueta() : void {
        let referencia: HTMLElement;
        referencia = this.creoReferencia();
        this.introduzcoTexto(referencia);
        this.pintoEtiqueta(referencia);
    }
}

export {CrearEPintarElemento}