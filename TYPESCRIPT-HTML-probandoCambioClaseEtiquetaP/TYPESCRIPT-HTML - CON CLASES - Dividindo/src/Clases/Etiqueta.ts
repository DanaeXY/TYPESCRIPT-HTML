/**
 * ATA QUE NON SAIBA CONFIGURAR 'private' ,SE QUEREMOS QUE CONSERVE
 * AS VARIABLES E FUNCIÓNS PRIVADAS, DEBEREMOS ESCRIBIR '#' 
 * PARA QUE NA COMPILACIÓN EN JAVASCRIPT CONSERVE TAL PROPIEDADE
 * 
 * NESTE EXEMPLO O DEIXO ASÍ, PARA FACELO PARELLO A OUTRAS LINGUAXES TIPADAS 
 */

abstract class Etiqueta{
    abstract creoReferencia() : HTMLElement;
    abstract introduzcoTexto(texto: string) : void;
    abstract devolverReferencia(): HTMLParagraphElement; 
}

export {Etiqueta}


